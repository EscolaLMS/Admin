import { userHistory } from '@/services/escola-lms/user_history';
import { EyeOutlined } from '@ant-design/icons';
import ProTable, { type ProColumns } from '@ant-design/pro-table';
import { Button, Empty, Tooltip } from 'antd';
import React, { useState } from 'react';
import { FormattedMessage } from 'umi';

import { safeDate } from './formatDate';
import HistoryDetailsDrawer from './HistoryDetailsDrawer';
import { displayText, formatCount, formatFinalGrades } from './utils';

// 403 (viewer lacks the permission) / 404 (endpoint not deployed) render as empty history, not an error.
const GRACEFUL_EMPTY_STATUSES = [403, 404];

const UserHistory: React.FC<{ userId: number }> = ({ userId }) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [loadError, setLoadError] = useState(false);

  const openDetails = (id: number) => {
    setSelectedId(id);
    setDrawerOpen(true);
  };

  const columns: ProColumns<API.StudentHistoryItem>[] = [
    {
      title: <FormattedMessage id="date" defaultMessage="Date" />,
      dataIndex: 'left_at',
      width: 160,
      render: (_v, record) => safeDate(record.left_at),
    },
    {
      title: <FormattedMessage id="group" defaultMessage="Group" />,
      dataIndex: 'group_name',
      render: (_v, record) => displayText(record.group_name),
    },
    {
      title: <FormattedMessage id="subject" defaultMessage="Subject" />,
      dataIndex: 'subject_name',
      render: (_v, record) => displayText(record.subject_name),
    },
    {
      title: <FormattedMessage id="attendances" defaultMessage="Attendances" />,
      dataIndex: 'attendances_count',
      width: 120,
      render: (_v, record) => formatCount(record.attendances_count),
    },
    {
      title: <FormattedMessage id="exams" defaultMessage="Exams (partial grades)" />,
      dataIndex: 'exams_count',
      width: 160,
      render: (_v, record) => formatCount(record.exams_count),
    },
    {
      title: <FormattedMessage id="grades" defaultMessage="Grades" />,
      dataIndex: 'final_grades',
      width: 140,
      render: (_v, record) => formatFinalGrades(record.final_grades),
    },
    {
      title: <FormattedMessage id="pages.searchTable.titleOption" defaultMessage="Options" />,
      dataIndex: 'option',
      valueType: 'option',
      fixed: 'right',
      width: 80,
      render: (_v, record) => [
        <Tooltip key="details" title={<FormattedMessage id="details" defaultMessage="Details" />}>
          <Button type="primary" icon={<EyeOutlined />} onClick={() => openDetails(record.id)} />
        </Tooltip>,
      ],
    },
  ];

  return (
    <>
      <ProTable<API.StudentHistoryItem, { userId: number }>
        rowKey="id"
        search={false}
        options={false}
        columns={columns}
        scroll={{ x: true }}
        params={{ userId }}
        locale={{
          emptyText: (
            <Empty
              image={Empty.PRESENTED_IMAGE_SIMPLE}
              description={
                <FormattedMessage
                  id={loadError ? 'user_history.error' : 'user_history.empty'}
                  defaultMessage={
                    loadError ? 'Could not load history.' : 'This user has no history yet.'
                  }
                />
              }
            />
          ),
        }}
        request={async (params) => {
          try {
            const response = await userHistory(userId, {
              page: params.current,
              per_page: params.pageSize,
            });
            if (response.success) {
              setLoadError(false);
              return {
                data: response.data,
                total: response.meta.total,
                success: true,
              };
            }
            setLoadError(true);
          } catch (error) {
            const status = (error as { response?: { status?: number } })?.response?.status;
            setLoadError(status === undefined || !GRACEFUL_EMPTY_STATUSES.includes(status));
          }
          return { data: [], total: 0, success: true };
        }}
      />
      <HistoryDetailsDrawer
        userId={userId}
        historyId={selectedId}
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
    </>
  );
};

export default UserHistory;
