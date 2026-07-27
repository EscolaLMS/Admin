import ProTable, { type ProColumns } from '@ant-design/pro-table';
import { Empty, Space, Spin, Tag, Typography } from 'antd';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { FormattedMessage } from 'umi';

import type { StudentGradeRow } from './types';
import { buildGradeRows, formatPercent, mergeExpandedKeys } from './utils';

/**
 * AW-23 — "Final grades" grades table for a single student.
 *
 * A single tree table: one parent row per course (name + completion tag), whose
 * children are that course's flagged quiz/project results. Data comes from
 * GET .../groups/{group_id}/users/{student_id}/courses-grades (counts_to_grade only).
 */

const formatScore = (score?: number | null, maxScore?: number | null): string =>
  score === null || score === undefined ? '-' : `${score} / ${maxScore ?? '-'}`;

// Pass/fail is co-located with the result. Renders nothing until the backend computes it
// (is_passed is null for projects and currently for quizzes too).
const PassFailTag: React.FC<{ passed?: boolean | null }> = ({ passed }) => {
  if (passed === null || passed === undefined) {
    return null;
  }
  return passed ? (
    <Tag color="success">
      <FormattedMessage id="gradebook.passed" defaultMessage="Passed" />
    </Tag>
  ) : (
    <Tag color="error">
      <FormattedMessage id="gradebook.failed" defaultMessage="Failed" />
    </Tag>
  );
};

const columns: ProColumns<StudentGradeRow>[] = [
  {
    title: <FormattedMessage id="name" />,
    dataIndex: 'name',
    render: (_n, row) =>
      row.kind === 'course' ? (
        <>
          <Typography.Text strong>{row.name}</Typography.Text>{' '}
          {row.is_completed ? (
            <Tag color="success">
              <FormattedMessage id="gradebook.completed" defaultMessage="Course passed" />
            </Tag>
          ) : (
            <Tag>
              <FormattedMessage id="gradebook.not_completed" defaultMessage="Not completed" />
            </Tag>
          )}
        </>
      ) : (
        row.name
      ),
  },
  {
    title: <FormattedMessage id="type" />,
    dataIndex: 'kind',
    width: 120,
    render: (_n, row) =>
      row.kind === 'course' ? (
        ''
      ) : (
        <FormattedMessage id={`gradebook.type.${row.kind === 'quiz' ? 'GiftQuiz' : 'Project'}`} />
      ),
  },
  {
    title: <FormattedMessage id="gradebook.result_percent" defaultMessage="Result" />,
    dataIndex: 'result_percent',
    width: 160,
    render: (_n, row) =>
      row.kind === 'course' ? (
        ''
      ) : (
        <Space size={4}>
          {formatPercent(row.result_percent)}
          <PassFailTag passed={row.is_passed} />
        </Space>
      ),
  },
  {
    title: <FormattedMessage id="gradebook.score" defaultMessage="Score" />,
    width: 120,
    render: (_n, row) => (row.kind === 'course' ? '' : formatScore(row.score, row.max_score)),
  },
  {
    title: <FormattedMessage id="gradebook.attempts" defaultMessage="Attempts" />,
    dataIndex: 'attempts',
    width: 110,
    render: (_n, row) => (row.kind === 'quiz' ? row.attempts ?? '-' : ''),
  },
];

interface Props {
  data?: API.StudentCourseGrades[];
  loading: boolean;
}

export const StudentCourseGrades: React.FC<Props> = ({ data, loading }) => {
  const rows = useMemo(() => buildGradeRows(data ?? []), [data]);
  const [expandedKeys, setExpandedKeys] = useState<React.Key[]>([]);
  const seenCourseKeysRef = useRef<Set<string>>(new Set());

  // Expand every course on first load, then preserve the user's expand/collapse choices
  // across data changes (only newly-appearing courses auto-expand).
  useEffect(() => {
    const courseKeys = rows.map((row) => row.key);
    const seen = seenCourseKeysRef.current;
    setExpandedKeys((prev) => mergeExpandedKeys(prev, courseKeys, seen));
    seenCourseKeysRef.current = new Set([...seen, ...courseKeys]);
  }, [rows]);

  if (loading && !data) {
    return <Spin />;
  }

  if (!data || data.length === 0) {
    return (
      <Empty
        description={
          <FormattedMessage
            id="gradebook.no_course_grades"
            defaultMessage="No quiz or project grades yet."
          />
        }
      />
    );
  }

  return (
    <ProTable<StudentGradeRow>
      rowKey="key"
      search={false}
      options={false}
      pagination={false}
      dataSource={rows}
      columns={columns}
      cardProps={{ bodyStyle: { padding: 0 } }}
      expandable={{
        expandedRowKeys: expandedKeys,
        onExpandedRowsChange: (keys) => setExpandedKeys([...keys]),
      }}
    />
  );
};

export default StudentCourseGrades;
