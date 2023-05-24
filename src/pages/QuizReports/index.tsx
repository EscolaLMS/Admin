import React, { useRef } from 'react';
import { format } from 'date-fns';
import { useIntl, FormattedMessage, Link } from 'umi';
import { Button, Tag, Tooltip } from 'antd';
import ProTable from '@ant-design/pro-table';
import type { ActionType, ProColumns } from '@ant-design/pro-table';
import { PageContainer } from '@ant-design/pro-layout';
import { FileSearchOutlined } from '@ant-design/icons';

import { DATETIME_FORMAT } from '@/consts/dates';
import { getQuizAttempts } from '@/services/escola-lms/gift_quiz';
import UserSelect from '@/components/UserSelect';
import TypeButtonDrawer from '@/components/TypeButtonDrawer';
import { createTableOrderObject } from '@/utils/utils';

export const TableColumns: ProColumns<API.QuizAttempt>[] = [
  {
    title: <FormattedMessage id="ID" defaultMessage="ID" />,
    dataIndex: 'id',
    hideInSearch: true,
    sorter: true,
  },
  {
    title: <FormattedMessage id="gift_quiz" defaultMessage="GIFT Quiz" />,
    dataIndex: 'topic_gift_quiz_id',
    hideInSearch: true,
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
    },
  },
  {
    title: <FormattedMessage id="student" defaultMessage="Student" />,
    dataIndex: 'user_id',
    renderFormItem: (item, { type, ...rest }, form) => {
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
    render: (_, record) => (
      <TypeButtonDrawer key="student" type="EscolaLms\Core\Models\User" type_id={record.user_id} />
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

const QuizAttempts: React.FC = () => {
  const actionRef = useRef<ActionType>();
  const intl = useIntl();

  return (
    <PageContainer>
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
        request={({ current, pageSize, topic_gift_quiz_id, dateRange }, sort) => {
          const date_from =
            dateRange && dateRange[0] ? format(new Date(dateRange[0]), DATETIME_FORMAT) : undefined;
          const date_to =
            dateRange && dateRange[1] ? format(new Date(dateRange[1]), DATETIME_FORMAT) : undefined;
          return getQuizAttempts({
            per_page: pageSize,
            page: current,
            topic_gift_quiz_id,
            date_from,
            date_to,
            ...createTableOrderObject(sort, 'created_at'),
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
        columns={TableColumns}
      />
    </PageContainer>
  );
};

export default QuizAttempts;
