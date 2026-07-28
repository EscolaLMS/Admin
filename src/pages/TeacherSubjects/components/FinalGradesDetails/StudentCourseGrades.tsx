import ProTable, { type ProColumns } from '@ant-design/pro-table';
import { Empty, Space, Spin, Tag, Typography } from 'antd';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { FormattedMessage } from 'umi';

import type { StudentGradeRow } from './types';
import { buildGradeRows, getGradeDisplay, mergeExpandedKeys } from './utils';

/**
 * AW-23 — "Final grades" grades table for a single student.
 *
 * A single tree table: one parent row per course (name + completion tag), whose
 * children are that course's flagged quiz/project results. Data comes from
 * GET .../groups/{group_id}/users/{student_id}/courses-grades (counts_to_grade only).
 */

const formatScore = (score?: number | null, maxScore?: number | null): string =>
  score === null || score === undefined ? '-' : `${score} / ${maxScore ?? '-'}`;

// Pass/fail is co-located with the grade. Renders nothing until the backend computes it
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

// Tint for the grade column, the point of the table. Opaque rather than translucent: the
// column is `fixed: 'right'`, so it overlays the cells scrolling beneath it and any
// transparency would let them bleed through. These are the composited equivalents of 4% /
// 8% black over the white table background.
const GRADE_CELL_BG = '#f5f5f5';
const GRADE_HEADER_BG = '#ebebeb';

// Below this the three fixed columns (3 × 180) would squeeze the flexible name column past
// readability, so the table scrolls horizontally instead of compressing further.
const MIN_TABLE_WIDTH = 986;

// The last column: whichever value we have leads, rendered prominently — the grade when the
// backend sends one, otherwise the percentage (the `grade` field is not live yet). The
// percentage is only demoted to muted context when there is a grade to outrank it.
const GradeCell: React.FC<{ row: StudentGradeRow }> = ({ row }) => {
  const { grade, percent } = getGradeDisplay(row.grade, row.result_percent);
  const primary = grade ?? percent;

  return (
    <Space size={4}>
      {primary ? (
        <Typography.Text strong style={{ fontSize: 16 }}>
          {primary}
        </Typography.Text>
      ) : (
        '-'
      )}
      {grade && percent && <Typography.Text type="secondary">({percent})</Typography.Text>}
      <PassFailTag passed={row.is_passed} />
    </Space>
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
    width: 180,
    render: (_n, row) =>
      row.kind === 'course' ? (
        ''
      ) : (
        <FormattedMessage id={`gradebook.type.${row.kind === 'quiz' ? 'GiftQuiz' : 'Project'}`} />
      ),
  },
  {
    title: <FormattedMessage id="gradebook.score" defaultMessage="Score" />,
    width: 180,
    render: (_n, row) => (row.kind === 'course' ? '' : formatScore(row.score, row.max_score)),
  },
  {
    title: (
      <Typography.Text strong>
        <FormattedMessage id="grade" defaultMessage="Grade" />
      </Typography.Text>
    ),
    dataIndex: 'grade',
    width: 180,
    // Stays pinned once the table starts scrolling horizontally (below MIN_TABLE_WIDTH).
    fixed: 'right',
    onHeaderCell: () => ({ style: { background: GRADE_HEADER_BG } }),
    onCell: () => ({ style: { background: GRADE_CELL_BG } }),
    render: (_n, row) => (row.kind === 'course' ? '' : <GradeCell row={row} />),
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
      scroll={{ x: MIN_TABLE_WIDTH }}
      cardProps={{ bodyStyle: { padding: 0 } }}
      expandable={{
        expandedRowKeys: expandedKeys,
        onExpandedRowsChange: (keys) => setExpandedKeys([...keys]),
      }}
    />
  );
};

export default StudentCourseGrades;
