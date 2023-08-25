import React, { useCallback, useRef } from 'react';
import { useIntl, FormattedMessage, Link } from 'umi';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { PageContainer } from '@ant-design/pro-layout';
import { questionnaire, deleteQuestionnaire } from '@/services/escola-lms/questionnaire';
import { Button, Tooltip, Popconfirm, message } from 'antd';
import { PlusOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { createTableOrderObject } from '@/utils/utils';

export const TableColumns: ProColumns<API.Questionnaire>[] = [
  {
    title: <FormattedMessage id="ID" defaultMessage="ID" />,
    dataIndex: 'id',
    hideInSearch: true,
    sorter: true,
    width: '80px',
  },
  {
    title: <FormattedMessage id="title" defaultMessage="title" />,
    dataIndex: 'title',
    hideInSearch: false,
    sorter: true,
    width: '80%',
  },
];

const Questionnaire: React.FC = () => {
  const actionRef = useRef<ActionType>();

  const intl = useIntl();

  const handleRemove = useCallback(
    async (id: number) => {
      const hide = message.loading(
        intl.formatMessage({
          id: 'loading',
        }),
      );
      try {
        await deleteQuestionnaire(id);
        hide();
        message.success(<FormattedMessage id="success" defaultMessage="success" />);

        actionRef.current?.reload();
        return true;
      } catch (error) {
        hide();
        message.error(<FormattedMessage id="error" defaultMessage="error" />);

        return false;
      }
    },
    [actionRef, intl],
  );

  return (
    <PageContainer>
      <ProTable<API.Questionnaire>
        headerTitle={intl.formatMessage({
          id: 'questionnaires',
          defaultMessage: 'questionnaires',
        })}
        actionRef={actionRef}
        rowKey="id"
        search={{
          layout: 'vertical',
        }}
        toolBarRender={() => [
          <Link to="/other/questionnaire/new" key="addnew">
            <Button type="primary" key="primary">
              <PlusOutlined /> <FormattedMessage id="new" defaultMessage="new" />
            </Button>
          </Link>,
        ]}
        request={async ({ pageSize, current, title }, sort) => {
          const response = await questionnaire({
            per_page: pageSize,
            page: current,
            title: title || undefined,
            ...createTableOrderObject(sort, 'created_at'),
          });
          if (!response.success) {
            return [];
          }

          return {
            data: response.data,
            total: response.meta.total,
            success: true,
          };
        }}
        columns={[
          ...TableColumns,
          {
            title: <FormattedMessage id="options" defaultMessage="options" />,
            dataIndex: 'option',
            valueType: 'option',

            render: (_, record) => [
              <Link to={`/other/questionnaire/${record.id}`} key="editlink">
                <Button type="primary" icon={<EditOutlined />} />
              </Link>,
              <Popconfirm
                key="delete"
                title={
                  <FormattedMessage
                    id="deleteQuestion"
                    defaultMessage="Are you sure to delete this record?"
                  />
                }
                onConfirm={() => record.id && handleRemove(record.id)}
                okText={<FormattedMessage id="yes" />}
                cancelText={<FormattedMessage id="no" />}
              >
                <Tooltip title={<FormattedMessage id="delete" defaultMessage="delete" />}>
                  <Button type="primary" icon={<DeleteOutlined />} danger />
                </Tooltip>
              </Popconfirm>,
            ],
          },
        ]}
      />
    </PageContainer>
  );
};

export default Questionnaire;
