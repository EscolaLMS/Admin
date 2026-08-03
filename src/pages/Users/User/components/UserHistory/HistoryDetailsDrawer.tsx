import { DAY_FORMAT } from '@/consts/dates';
import { userHistoryEntry } from '@/services/escola-lms/user_history';
import { Descriptions, Drawer, Empty, Space, Spin, Table, Typography } from 'antd';
import type { TableColumnsType } from 'antd';
import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'umi';

import { safeDate } from './formatDate';
import {
  displayText,
  EMPTY_PLACEHOLDER,
  formatAttendanceSummary,
  formatGradesSummary,
} from './utils';

const attendanceColumns: TableColumnsType<API.StudentHistoryAttendanceEntry> = [
  {
    title: <FormattedMessage id="date" defaultMessage="Date" />,
    dataIndex: 'date',
    render: (_v, record) => safeDate(record.date, DAY_FORMAT),
  },
  {
    title: <FormattedMessage id="subject" defaultMessage="Subject" />,
    dataIndex: 'subject_name',
    render: (_v, record) => displayText(record.subject_name),
  },
  {
    title: <FormattedMessage id="attendance" defaultMessage="Attendance" />,
    dataIndex: 'value',
    render: (_v, record) => displayText(record.value),
  },
];

const gradeColumns: TableColumnsType<API.StudentHistoryGradeEntry> = [
  {
    title: <FormattedMessage id="date" defaultMessage="Date" />,
    dataIndex: 'date',
    render: (_v, record) => safeDate(record.date, DAY_FORMAT),
  },
  {
    title: <FormattedMessage id="subject" defaultMessage="Subject" />,
    dataIndex: 'subject_name',
    render: (_v, record) => displayText(record.subject_name),
  },
  {
    title: <FormattedMessage id="name" defaultMessage="Name" />,
    dataIndex: 'name',
    render: (_v, record) => displayText(record.name),
  },
  {
    title: <FormattedMessage id="grade" defaultMessage="Grade" />,
    dataIndex: 'grade',
    render: (_v, record) =>
      record.grade !== null && record.grade !== undefined && record.grade !== ''
        ? String(record.grade)
        : EMPTY_PLACEHOLDER,
  },
];

interface Props {
  userId: number;
  historyId: number | null;
  open: boolean;
  onClose: () => void;
}

const HistoryDetailsDrawer: React.FC<Props> = ({ userId, historyId, open, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [failed, setFailed] = useState(false);
  const [data, setData] = useState<API.StudentHistoryDetail>();

  useEffect(() => {
    if (!open || historyId === null) return undefined;

    let cancelled = false;
    setLoading(true);
    setFailed(false);
    setData(undefined);

    userHistoryEntry(userId, historyId)
      .then((res) => {
        if (cancelled) return;
        if (res.success) setData(res.data);
        else setFailed(true);
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [open, historyId, userId]);

  const attendances = data?.attendances ?? [];
  const grades = data?.grades ?? [];
  const hasPeriod = Boolean(data?.date_from || data?.date_to);

  return (
    <Drawer
      title={<FormattedMessage id="user_history.details" defaultMessage="History details" />}
      width={640}
      open={open}
      onClose={onClose}
      destroyOnClose
    >
      {loading && <Spin />}

      {!loading && (failed || !data) && (
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description={
            <FormattedMessage
              id="user_history.details_error"
              defaultMessage="Could not load this history record."
            />
          }
        />
      )}

      {!loading && !failed && data && (
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <Descriptions bordered column={1} size="small">
            <Descriptions.Item label={<FormattedMessage id="date" defaultMessage="Date" />}>
              {safeDate(data.created_at)}
            </Descriptions.Item>
            <Descriptions.Item
              label={<FormattedMessage id="user_history.period" defaultMessage="Period" />}
            >
              {hasPeriod
                ? `${safeDate(data.date_from, DAY_FORMAT)} – ${safeDate(data.date_to, DAY_FORMAT)}`
                : EMPTY_PLACEHOLDER}
            </Descriptions.Item>
            <Descriptions.Item label={<FormattedMessage id="group" defaultMessage="Group" />}>
              {displayText(data.group_name)}
            </Descriptions.Item>
            <Descriptions.Item label={<FormattedMessage id="subject" defaultMessage="Subject" />}>
              {displayText(data.subject_name)}
            </Descriptions.Item>
            <Descriptions.Item
              label={<FormattedMessage id="semester" defaultMessage="Semester" />}
            >
              {displayText(data.semester_name)}
            </Descriptions.Item>
            <Descriptions.Item
              label={<FormattedMessage id="attendance" defaultMessage="Attendance" />}
            >
              {formatAttendanceSummary(data.attendance_summary)}
            </Descriptions.Item>
            <Descriptions.Item label={<FormattedMessage id="grades" defaultMessage="Grades" />}>
              {formatGradesSummary(data.grades_summary)}
            </Descriptions.Item>
          </Descriptions>

          {attendances.length > 0 && (
            <div>
              <Typography.Text strong>
                <FormattedMessage id="attendances" defaultMessage="Attendances" />
              </Typography.Text>
              <Table<API.StudentHistoryAttendanceEntry>
                style={{ marginTop: 8 }}
                size="small"
                rowKey={(record, index) =>
                  record.id != null ? String(record.id) : `attendance-${index}`
                }
                pagination={false}
                columns={attendanceColumns}
                dataSource={attendances}
              />
            </div>
          )}

          {grades.length > 0 && (
            <div>
              <Typography.Text strong>
                <FormattedMessage id="grades" defaultMessage="Grades" />
              </Typography.Text>
              <Table<API.StudentHistoryGradeEntry>
                style={{ marginTop: 8 }}
                size="small"
                rowKey={(record, index) =>
                  record.id != null ? String(record.id) : `grade-${index}`
                }
                pagination={false}
                columns={gradeColumns}
                dataSource={grades}
              />
            </div>
          )}
        </Space>
      )}
    </Drawer>
  );
};

export default HistoryDetailsDrawer;