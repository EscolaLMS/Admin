import React from 'react';
import { format } from 'date-fns';
import { FormattedMessage, Link } from 'umi';
import { Button, Popconfirm, Tag, Tooltip } from 'antd';
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable, { type ProColumns } from '@ant-design/pro-table';

import { createTableOrderObject } from '@/utils/utils';
import { DATETIME_FORMAT } from '@/consts/dates';
import {
  deleteCompetencyChallenge,
  getCompetencyChallenges,
} from '@/services/escola-lms/competency-challenges';
import TypeButtonDrawer from '@/components/TypeButtonDrawer';

const staticColumns: ProColumns<API.CompetencyChallenge>[] = [
  { dataIndex: 'id', title: <FormattedMessage id="ID" />, hideInSearch: true, sorter: true },
  { dataIndex: 'name', title: <FormattedMessage id="name" />, sorter: true },
  {
    dataIndex: 'created_at',
    title: <FormattedMessage id="created_at" />,
    render: (_n, record) => format(new Date(record.created_at), DATETIME_FORMAT),
    hideInSearch: true,
    sorter: true,
  },
  {
    dataIndex: 'updated_at',
    title: <FormattedMessage id="updated_at" />,
    render: (_n, record) => format(new Date(record.updated_at), DATETIME_FORMAT),
    hideInSearch: true,
  },
  {
    dataIndex: 'is_active',
    title: <FormattedMessage id="is_active" />,
    valueType: 'select',
    fieldProps: {
      options: [
        {
          value: true,
          label: (
            <Tag color="green">
              <FormattedMessage id="Active" defaultMessage="Active" />
            </Tag>
          ),
        },
        {
          value: false,
          label: (
            <Tag color="red">
              <FormattedMessage id="Inactive" defaultMessage="Inactive" />
            </Tag>
          ),
        },
      ],
    },
    render: (_n, record) => (
      <Tag key="is_active" color={record.is_active ? 'green' : 'red'}>
        <FormattedMessage id={record.is_active ? 'Active' : 'Inactive'} />
      </Tag>
    ),
  },
  {
    dataIndex: 'quiz_id',
    title: <FormattedMessage id="gift_quiz" />,
    render: (_n, record) => (
      <TypeButtonDrawer type="EscolaLms\TopicTypeGift\Models\GiftQuiz" type_id={record.quiz_id} />
    ),
    hideInSearch: true,
  },
  {
    valueType: 'option',
    title: <FormattedMessage id="options" />,
    render: (_n, record, _i, action) => [
      <Tooltip key="edit" title={<FormattedMessage id="edit" defaultMessage="edit" />}>
        <Link to={`/competency-challenges/${record.id}`}>
          <Button type="primary" icon={<EditOutlined />} />
        </Link>
      </Tooltip>,
      <Popconfirm
        key="delete"
        title={
          <FormattedMessage
            id="deleteQuestion"
            defaultMessage="Are you sure to delete this record?"
          />
        }
        onConfirm={async () => {
          const response = await deleteCompetencyChallenge(record.id);
          if (response.success) {
            action?.reload();
          }
        }}
        okText={<FormattedMessage id="yes" defaultMessage="Yes" />}
        cancelText={<FormattedMessage id="no" defaultMessage="No" />}
      >
        <Tooltip title={<FormattedMessage id="delete" defaultMessage="delete" />}>
          <Button type="primary" icon={<DeleteOutlined />} danger />
        </Tooltip>
      </Popconfirm>,
    ],
  },
];

const CompetencyChallenges: React.FC = () => (
  <PageContainer>
    <ProTable<API.CompetencyChallenge, API.CompetencyChallengesParams>
      rowKey="id"
      search={{ layout: 'vertical' }}
      toolBarRender={() => [
        <Link key="addnew" to="/competency-challenges/new">
          <Button type="primary" key="primary">
            <PlusOutlined /> <FormattedMessage id="new" defaultMessage="new" />
          </Button>
        </Link>,
      ]}
      request={async ({ per_page, page, is_active, name }, sort) => {
        const response = await getCompetencyChallenges({
          page,
          per_page,
          name,
          is_active,
          ...createTableOrderObject(sort, 'created_at'),
        });

        if (!response.success) {
          return { data: [], total: 0, success: false };
        }

        return { data: response.data, total: response.data.length, success: true };
      }}
      columns={staticColumns}
    />
  </PageContainer>
);

export default CompetencyChallenges;
