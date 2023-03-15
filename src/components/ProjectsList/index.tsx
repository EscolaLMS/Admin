import { DeleteOutlined } from '@ant-design/icons';
import { Button, Tooltip, Popconfirm, message, Typography, Drawer } from 'antd';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useIntl, FormattedMessage, Link } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import UserSelect from '@/components/UserSelect';
import { format } from 'date-fns';
import { DATETIME_FORMAT } from '@/consts/dates';

import { program } from '@/services/escola-lms/course';
import { projectSolutions, deleteProjectSolution } from '@/services/escola-lms/projects';

import TypeButtonDrawer from '@/components/TypeButtonDrawer';
import CourseSelect from '@/components/CourseSelect';
import { TopicType } from '@/services/escola-lms/enums';

const handleRemove = async (id: number) => {
  return deleteProjectSolution(id).then((response) => {
    if (response.success) {
      message.success(response.message);
    }
    return true;
  });
};

const getFlatTopics = (lessons: API.Lesson[]): API.Topic[] => {
  return lessons.reduce((acc, curr) => {
    return [...acc, ...(curr.lessons ? getFlatTopics(curr.lessons) : []), ...(curr.topics ?? [])];
  }, [] as API.Topic[]) as API.Topic[];
};

const DataDisplay: React.FC<{ data: unknown }> = ({ data }) => {
  const [visible, setVisible] = useState(false);
  return data && typeof data === 'object' && Object.keys(data).length > 0 ? (
    <React.Fragment>
      <Button size="small" onClick={() => setVisible(true)}>
        <FormattedMessage id="show" defaultMessage="show" />
      </Button>
      <Drawer width={700} open={visible} onClose={() => setVisible(false)}>
        <Typography.Paragraph>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </Typography.Paragraph>
      </Drawer>
    </React.Fragment>
  ) : (
    <React.Fragment />
  );
};

export const ProjectsList: React.FC<{ courseId?: number }> = ({ courseId }) => {
  const actionRef = useRef<ActionType>();
  const intl = useIntl();

  const [projectTopics, setProjectTopics] = useState<API.TopicProject[]>([]);

  useEffect(() => {
    if (courseId) {
      program(courseId).then((resp) => {
        if (resp.success) {
          setProjectTopics(
            getFlatTopics(resp.data.lessons).filter(
              (topic) => topic.topicable_type === TopicType.Project,
            ) as API.TopicProject[],
          );
        }
      });
    }
  }, [courseId]);

  const columns: ProColumns<API.ProjectSolution>[] = [
    {
      title: <FormattedMessage id="ID" defaultMessage="ID" />,
      dataIndex: 'id',
      hideInSearch: true,
    },
    {
      title: <FormattedMessage id="topic" defaultMessage="topic" />,
      dataIndex: 'id',
      hideInSearch: true,
      render: (_, record) => {
        return (
          <Link to={`/courses/list/4/program/?topic=${record.topic_id}`}>
            {projectTopics.find((t) => t.id === record.topic_id)?.title ?? record.topic_id}
          </Link>
        );
      },
    },
    {
      title: <FormattedMessage id="user" defaultMessage="user" />,
      dataIndex: 'user_id',
      renderFormItem: (item, { type, defaultRender, ...rest }, form) => {
        if (type === 'form') {
          return null;
        }
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
      render: (_, record) => [
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
            if (success) {
              if (actionRef.current) {
                actionRef.current.reload();
              }
            }
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
  ];

  return (
    <ProTable<API.ProjectSolution, API.ProjectSolutionListParams>
      headerTitle={intl.formatMessage({
        id: 'projectSolutions',
        defaultMessage: 'Project Uploaded Solutions',
      })}
      actionRef={actionRef}
      rowKey="id"
      request={({ pageSize, current, user_id, topic_id }) => {
        return projectSolutions({
          pageSize,
          current,
          course_id: courseId,
          user_id,
          topic_id,
        }).then((response) => {
          if (response.success) {
            return {
              data: response.data,
              total: response.meta.total,
              success: true,
            };
          }
          return [];
        });
      }}
      columns={columns}
    />
  );
};

export default ProjectsList;
