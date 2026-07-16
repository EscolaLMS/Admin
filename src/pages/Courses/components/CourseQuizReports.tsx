import { FileSearchOutlined } from '@ant-design/icons';
import type { ProTableProps } from '@ant-design/pro-components';
import type { ActionType, ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { Button, Tag, Tooltip } from 'antd';
import { format } from 'date-fns';
import React, { useCallback, useRef } from 'react';
import { FormattedMessage, Link, useIntl } from 'umi';

import TypeButtonDrawer from '@/components/TypeButtonDrawer';
import { DATETIME_FORMAT } from '@/consts/dates';
import { getQuizAttempts } from '@/services/escola-lms/gift_quiz';
import { createTableOrderObject } from '@/utils/utils';

import CourseQuizSelect from './CourseQuizSelect';

type ProTableRequest = NonNullable<
  ProTableProps<API.QuizAttempt, API.QuizAttemptsParams>['request']
>;

export const CourseQuizReports: React.FC<{ courseId: number }> = ({ courseId }) => {
  const actionRef = useRef<ActionType>();
  const intl = useIntl();

  const columns: ProColumns<API.QuizAttempt>[] = [
    {
      title: <FormattedMessage id="ID" defaultMessage="ID" />,
      dataIndex: 'id',
      hideInSearch: true,
      sorter: true,
      defaultSortOrder: 'descend',
      width: '80px',
    },
    {
      title: <FormattedMessage id="quiz" defaultMessage="Quiz" />,
      dataIndex: 'topic_gift_quiz_id',
      renderFormItem: (_s, { type, ...rest }) => {
        if (type === 'form') {
          return null;
        }
        return <CourseQuizSelect {...rest} courseId={courseId} />;
      },
      render: (_, record) => (
        <TypeButtonDrawer
          type="EscolaLms\TopicTypeGift\Models\GiftQuiz"
          type_id={record.topic_gift_quiz_id}
        />
      ),
    },
    {
      title: <FormattedMessage id="dateRange" defaultMessage="Date Range" />,
      dataIndex: 'dateRange',
      hideInSearch: false,
      hideInForm: true,
      hideInTable: true,
      valueType: 'dateRange',
      fieldProps: {
        allowEmpty: [true, true],
        placeholder: [
          intl.formatMessage({ id: 'select_date', defaultMessage: 'Select date' }),
          intl.formatMessage({ id: 'select_date', defaultMessage: 'Select date' }),
        ],
      },
    },
    {
      title: <FormattedMessage id="student" defaultMessage="Student" />,
      dataIndex: 'user_id',
      hideInSearch: true,
      render: (_, record) => (
        <TypeButtonDrawer
          type="EscolaLms\Core\Models\User"
          type_id={record.user_id}
          text={
            record?.user?.first_name && record?.user?.last_name
              ? `${record.user.first_name} ${record.user.last_name}`
              : undefined
          }
        />
      ),
    },
    {
      title: <FormattedMessage id="result_score" defaultMessage="Result score" />,
      dataIndex: 'result_score',
      hideInSearch: true,
      sorter: true,
    },
    {
      title: <FormattedMessage id="max_score" defaultMessage="Max score" />,
      dataIndex: 'max_score',
      hideInSearch: true,
      sorter: true,
    },
    {
      title: <FormattedMessage id="started_at" defaultMessage="Started at" />,
      dataIndex: 'started_at',
      hideInSearch: true,
      sorter: true,
      render: (_, record) => format(new Date(record.started_at), DATETIME_FORMAT),
    },
    {
      title: <FormattedMessage id="end_at" defaultMessage="End at" />,
      dataIndex: 'end_at',
      hideInSearch: true,
      sorter: true,
      render: (_, record) =>
        record.end_at ? (
          format(new Date(record.end_at), DATETIME_FORMAT)
        ) : (
          <Tag>
            <FormattedMessage id="uncompleted" defaultMessage="uncompleted" />
          </Tag>
        ),
    },
    {
      hideInSearch: true,
      title: <FormattedMessage id="pages.searchTable.titleOption" defaultMessage="option" />,
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => (
        <Link to={`/courses/quiz-reports/${record.id}`} key="details">
          <Tooltip title={<FormattedMessage id="details" defaultMessage="details" />}>
            <Button icon={<FileSearchOutlined />} />
          </Tooltip>
        </Link>
      ),
    },
  ];

  const onRequest = useCallback<ProTableRequest>(
    async ({ current, pageSize, topic_gift_quiz_id, dateRange }, sort) => {
      const date_from = dateRange?.[0]
        ? format(new Date(dateRange[0]), DATETIME_FORMAT)
        : undefined;
      const date_to = dateRange?.[1] ? format(new Date(dateRange[1]), DATETIME_FORMAT) : undefined;

      const res = await getQuizAttempts({
        per_page: pageSize,
        page: current,
        course_id: courseId,
        topic_gift_quiz_id,
        date_from,
        date_to,
        ...createTableOrderObject(sort, 'id'),
      });

      if (!res.success) {
        return { data: [], total: 0, success: false };
      }

      return {
        data: res.data,
        total: res.meta.total,
        success: true,
      };
    },
    [courseId],
  );

  return (
    <ProTable<API.QuizAttempt, API.QuizAttemptsParams>
      headerTitle={intl.formatMessage({
        id: 'quiz_reports',
        defaultMessage: 'Quiz Reports',
      })}
      search={{
        layout: 'vertical',
      }}
      actionRef={actionRef}
      rowKey="id"
      request={onRequest}
      columns={columns}
    />
  );
};

export default CourseQuizReports;
