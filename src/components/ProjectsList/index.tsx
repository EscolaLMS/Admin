import { DeleteOutlined } from '@ant-design/icons';
import ProTable, { type ProColumns } from '@ant-design/pro-table';
import { Button, Popconfirm, Tooltip, message } from 'antd';
import { format } from 'date-fns';
import React, { useEffect, useMemo, useState } from 'react';
import { FormattedMessage, Link, useIntl } from 'umi';

import TypeButtonDrawer from '@/components/TypeButtonDrawer';
import UserSelect from '@/components/UserSelect';
import { DATETIME_FORMAT } from '@/consts/dates';
import { program } from '@/services/escola-lms/course';
import { TopicType } from '@/services/escola-lms/enums';
import { deleteProjectSolution, projectSolutions } from '@/services/escola-lms/projects';

const handleRemove = async (id: number) => {
  const res = await deleteProjectSolution(id);
  if (res.success) {
    message.success(res.message);
  }
  return true;
};

const getFlatTopics = (lessons: API.Lesson[]): API.Topic[] =>
  lessons.reduce<API.Topic[]>(
    (acc, l) => [...acc, ...(l.lessons ? getFlatTopics(l.lessons) : []), ...(l.topics ?? [])],
    [],
  );

interface Props {
  courseId?: number;
}

export const ProjectsList: React.FC<Props> = ({ courseId }) => {
  const intl = useIntl();

  const [projectTopics, setProjectTopics] = useState<API.TopicProject[]>([]);

  const enumsProjectTopics = useMemo(
    () =>
      projectTopics.reduce<Record<string, { text: string; status: string }>>(
        (acc, curr) => ({
          ...acc,
          [curr.id ?? -1]: {
            text: curr.title ?? '',
            status: curr.id ?? -1,
          },
        }),
        {},
      ),
    [projectTopics],
  );

  const columns: ProColumns<API.ProjectSolution>[] = useMemo(
    () => [
      {
        title: <FormattedMessage id="ID" defaultMessage="ID" />,
        dataIndex: 'id',
        hideInSearch: true,
        sorter: true,
        width: '80px',
      },
      {
        title: <FormattedMessage id="topic" defaultMessage="topic" />,
        dataIndex: 'topic_id',
        hideInSearch: false,
        sorter: true,
        valueEnum: enumsProjectTopics,
        render: (_, record) => (
          <Link to={`/courses/list/${courseId}/program/?topic=${record.topic_id}`}>
            {enumsProjectTopics?.[record.topic_id]?.text ?? record.topic_id}
          </Link>
        ),
      },
      {
        sorter: true,
        title: <FormattedMessage id="user" defaultMessage="user" />,
        dataIndex: 'user_id',
        renderFormItem: (item, { type, defaultRender, ...rest }, form) => {
          if (type === 'form') return null;

          const stateType = form.getFieldValue('state');
          return (
            <UserSelect
              {...rest}
              state={{
                type: stateType,
              }}
            />
          );
        },
        render: (_, record) =>
          record.user_id && (
            <TypeButtonDrawer
              key={'user'}
              type="EscolaLms\Core\Models\User"
              type_id={record.user_id}
            />
          ),
      },
      {
        sorter: true,
        title: <FormattedMessage id="created_at" defaultMessage="Created at" />,
        dataIndex: 'created_at',
        hideInSearch: true,
        render: (_, record) =>
          record.created_at && format(new Date(record.created_at), DATETIME_FORMAT),
      },
      {
        title: <FormattedMessage id="download" defaultMessage="Download" />,
        dataIndex: 'file_url',
        hideInSearch: true,
        render: (_, record) => (
          <Button type="primary" target="_blank" size="small" href={record.file_url}>
            <FormattedMessage id="download" defaultMessage="Download" />
          </Button>
        ),
      },
      {
        hideInSearch: true,
        title: <FormattedMessage id="pages.searchTable.titleOption" defaultMessage="option" />,
        dataIndex: 'option',
        valueType: 'option',
        render: (_d, record, _i, action) => [
          <Popconfirm
            key="delete"
            title={
              <FormattedMessage
                id="deleteQuestion"
                defaultMessage="Are you sure to delete this record?"
              />
            }
            onConfirm={async () => {
              const success = await handleRemove(record.id);
              if (!success) return;

              action?.reload();
            }}
            okText={<FormattedMessage id="yes" />}
            cancelText={<FormattedMessage id="no" />}
          >
            <Tooltip title={<FormattedMessage id="delete" defaultMessage="delete" />}>
              <Button type="primary" icon={<DeleteOutlined />} danger />
            </Tooltip>
          </Popconfirm>,
        ],
      },
    ],
    [enumsProjectTopics],
  );

  useEffect(() => {
    if (!courseId) return;

    program(courseId).then((res) => {
      if (!res.success) return;

      const flatProjectTopics = getFlatTopics(res.data.lessons).filter(
        (t): t is API.TopicProject => t.topicable_type === TopicType.Project,
      );
      setProjectTopics(flatProjectTopics);
    });
  }, [courseId]);

  return (
    <ProTable<API.ProjectSolution, API.ProjectSolutionListParams>
      headerTitle={intl.formatMessage({
        id: 'project_solutions',
        defaultMessage: 'Project Uploaded Solutions',
      })}
      search={{
        layout: 'vertical',
      }}
      rowKey="id"
      request={async ({ pageSize, current, user_id, topic_id }, sort) => {
        const sortArr = sort && Object.entries(sort)[0];
        const order_by = sortArr && (sortArr[0] as API.ProjectSolutionListParams['order_by']);
        const res = await projectSolutions({
          pageSize,
          current,
          course_id: courseId,
          user_id,
          topic_id,
          order_by,
          order: sortArr ? (sortArr[1] === 'ascend' ? 'ASC' : 'DESC') : undefined,
        });
        if (!res.success) return { data: [], total: 0, success: false };

        return {
          data: res.data,
          total: res.meta.total,
          success: true,
        };
      }}
      columns={columns}
    />
  );
};

export default ProjectsList;
