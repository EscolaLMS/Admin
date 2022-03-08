import React, { useCallback, useRef, useState } from 'react';
import { useIntl, FormattedMessage, Link } from 'umi';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { PageContainer } from '@ant-design/pro-layout';
import { deleteConsultation } from '@/services/escola-lms/consultations';
import { stationaryEvents } from '@/services/escola-lms/stationary_events';
import { PlusOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Tooltip, Popconfirm, message } from 'antd';

export const TableColumns: ProColumns<EscolaLms.StationaryEvents.Models.StationaryEvent>[] = [
  {
    title: <FormattedMessage id="id" defaultMessage="id" />,
    dataIndex: 'id',
    hideInSearch: true,
  },

  /*
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
  */
  {
    title: <FormattedMessage id="name" defaultMessage="name" />,
    dataIndex: 'name',
    sorter: true,
  },

  {
    title: <FormattedMessage id="started_at" defaultMessage="started at" />,
    dataIndex: 'started_at',
    hideInSearch: true,
    hideInForm: true,
    sorter: true,
  },

  {
    title: <FormattedMessage id="finished_at" defaultMessage="started at" />,
    dataIndex: 'finished_at',
    hideInSearch: true,
    hideInForm: true,
    sorter: true,
  },
];

const StationaryEvents: React.FC = () => {
  const actionRef = useRef<ActionType>();
  const [loading, setLoading] = useState(false);
  const intl = useIntl();

  const handleRemove = useCallback(
    async (id: number) => {
      setLoading(true);
      const hide = message.loading(<FormattedMessage id="loading" defaultMessage="loading" />);
      try {
        await deleteConsultation(id).then((response) => {
          setLoading(false);
          if (response.success) {
            message.success(response.message);
          }
        });
        hide();
        setLoading(false);
        actionRef.current?.reload();
        return true;
      } catch (error) {
        hide();
        message.error(<FormattedMessage id="error" defaultMessage="error" />);
        setLoading(false);
        return false;
      }
    },
    [actionRef],
  );

  return (
    <PageContainer>
      <ProTable<
        EscolaLms.StationaryEvents.Models.StationaryEvent,
        API.PageParams & API.PaginationParams & { name: string }
      >
        headerTitle={intl.formatMessage({
          id: 'StationaryEvents',
          defaultMessage: 'StationaryEvents',
        })}
        loading={loading}
        actionRef={actionRef}
        rowKey="id"
        search={{
          labelWidth: 120,
        }}
        toolBarRender={() => [
          <Link key="addnew" to="/stationary-events/new">
            <Button type="primary" key="primary">
              <PlusOutlined /> <FormattedMessage id="new" defaultMessage="new" />
            </Button>
          </Link>,
        ]}
        request={({ name, pageSize, current }, sort) => {
          const sortArr = sort && Object.entries(sort)[0];
          setLoading(true);

          return stationaryEvents({
            pageSize,
            current,
            name,
            order_by: sortArr && sortArr[0], // i like nested ternary
            /* eslint-disable */ order: sortArr
              ? sortArr[1] === 'ascend'
                ? 'ASC'
                : 'DESC'
              : undefined,
          }).then((response) => {
            setLoading(false);
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
        columns={[
          ...TableColumns,
          {
            title: <FormattedMessage id="options" defaultMessage="options" />,
            dataIndex: 'option',
            valueType: 'option',
            width: '10%',
            render: (_, record) => [
              <Link key="edit" to={`/stationary-events/${record.id}`}>
                <Tooltip title={<FormattedMessage id="edit" defaultMessage="edit" />}>
                  <Button type="primary" icon={<EditOutlined />} />
                </Tooltip>
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
                okText={<FormattedMessage id="yes" defaultMessage="Yes" />}
                cancelText={<FormattedMessage id="no" defaultMessage="No" />}
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

export default StationaryEvents;
