import { userHistory } from '@/services/escola-lms/user_history';
import { EyeOutlined } from '@ant-design/icons';
import ProTable, { type ProColumns } from '@ant-design/pro-table';
import { Button, Empty, Tooltip } from 'antd';
import React, { useState } from 'react';
import { FormattedMessage } from 'umi';

import { safeDate } from './formatDate';
import HistoryDetailsDrawer from './HistoryDetailsDrawer';
import { displayText, formatCount, formatFinalGrades } from './utils';

/** HTTP statuses that mean "no history to show" rather than a real failure. */
const GRACEFUL_EMPTY_STATUSES = [403, 404];

const UserHistory: React.FC<{ userId: number }> = ({ userId }) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  // Distinguishes a genuine load failure (5xx / network) from an empty result. 403/404 stay
  // graceful (the FE/BE split + the placeholder backend that isn't shipped yet).
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
            setLoadError(false);
            if (response.success) {
              return {
                data: response.data,
                total: response.meta.total,
                success: true,
              };
            }
          } catch (error) {
            const status = (error as { response?: { status?: number } })?.response?.status;
            // Only surface genuine failures; a missing/forbidden endpoint stays an empty state.
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