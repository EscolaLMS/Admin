import { DAY_FORMAT } from '@/consts/dates';
import { AttendanceValue } from '@/services/escola-lms/enums';
import { userHistoryEntry } from '@/services/escola-lms/user_history';
import { Descriptions, Drawer, Empty, Space, Spin, Table, Typography } from 'antd';
import type { TableColumnsType } from 'antd';
import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'umi';

import { safeDate } from './formatDate';
import { displayText, EMPTY_PLACEHOLDER, formatResultPercent } from './utils';

/** Backend attendance status → existing i18n key (see AttendanceValue enum + locale catalogs). */
const ATTENDANCE_STATUS_MESSAGE_ID: Record<string, string> = {
  [AttendanceValue.PRESENT]: 'present',
  [AttendanceValue.PRESENT_NOT_EXERCISING]: 'not_exercising',
  [AttendanceValue.ABSENT]: 'absent',
  [AttendanceValue.EXCUSED_ABSENCE]: 'excused_absence',
};

const attendanceColumns: TableColumnsType<API.StudentHistoryAttendanceEntry> = [
  {
    title: <FormattedMessage id="schedule" defaultMessage="Schedule" />,
    dataIndex: 'schedule_id',
    render: (_v, record) =>
      record.schedule_id != null ? `#${record.schedule_id}` : EMPTY_PLACEHOLDER,
  },
  {
    title: <FormattedMessage id="attendance" defaultMessage="Attendance" />,
    dataIndex: 'value',
    render: (_v, record) => {
      const messageId = record.value ? ATTENDANCE_STATUS_MESSAGE_ID[record.value] : undefined;
      return messageId ? <FormattedMessage id={messageId} /> : displayText(record.value);
    },
  },
];

const examColumns: TableColumnsType<API.StudentHistoryExamEntry> = [
  {
    title: <FormattedMessage id="title" defaultMessage="Title" />,
    dataIndex: 'title',
    render: (_v, record) => displayText(record.title),
  },
  {
    title: <FormattedMessage id="result" defaultMessage="Result" />,
    dataIndex: 'result',
    render: (_v, record) => formatResultPercent(record.result),
  },
];

const gradeColumns: TableColumnsType<API.StudentHistoryFinalGrade> = [
  {
    title: <FormattedMessage id="grade" defaultMessage="Grade" />,
    dataIndex: 'grade_name',
    render: (_v, record) => displayText(record.grade_name),
  },
  {
    title: <FormattedMessage id="value" defaultMessage="Value" />,
    dataIndex: 'grade_value',
    render: (_v, record) =>
      record.grade_value != null ? String(record.grade_value) : EMPTY_PLACEHOLDER,
  },
  {
    title: <FormattedMessage id="date" defaultMessage="Date" />,
    dataIndex: 'grade_date',
    render: (_v, record) => safeDate(record.grade_date, DAY_FORMAT),
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

  const attendances = data?.snapshot?.attendances ?? [];
  const exams = data?.snapshot?.exams ?? [];
  const grades = data?.snapshot?.final_grades ?? [];

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
              {safeDate(data.left_at)}
            </Descriptions.Item>
            <Descriptions.Item label={<FormattedMessage id="group" defaultMessage="Group" />}>
              {displayText(data.group_name)}
            </Descriptions.Item>
            <Descriptions.Item label={<FormattedMessage id="subject" defaultMessage="Subject" />}>
              {displayText(data.subject_name)}
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
                  record.schedule_id != null ? String(record.schedule_id) : `attendance-${index}`
                }
                pagination={false}
                columns={attendanceColumns}
                dataSource={attendances}
              />
            </div>
          )}

          {exams.length > 0 && (
            <div>
              <Typography.Text strong>
                <FormattedMessage id="exams" defaultMessage="Exams (partial grades)" />
              </Typography.Text>
              <Table<API.StudentHistoryExamEntry>
                style={{ marginTop: 8 }}
                size="small"
                rowKey={(_record, index) => `exam-${index}`}
                pagination={false}
                columns={examColumns}
                dataSource={exams}
              />
            </div>
          )}

          {grades.length > 0 && (
            <div>
              <Typography.Text strong>
                <FormattedMessage id="grades" defaultMessage="Grades" />
              </Typography.Text>
              <Table<API.StudentHistoryFinalGrade>
                style={{ marginTop: 8 }}
                size="small"
                rowKey={(_record, index) => `grade-${index}`}
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