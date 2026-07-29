import ProTable, { type ProColumns } from '@ant-design/pro-table';
import { Alert, Empty, Space, Spin, Tag, Typography } from 'antd';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { FormattedMessage } from 'umi';

import type { StudentGradeRow } from './types';
import { buildGradeRows, getGradeDisplay, mergeExpandedKeys } from './utils';

const formatScore = (score?: number | null, maxScore?: number | null): string =>
  score === null || score === undefined ? '-' : `${score} / ${maxScore ?? '-'}`;

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

const GRADE_CELL_BG = '#f5f5f5';
const GRADE_HEADER_BG = '#ebebeb';
const MIN_TABLE_WIDTH = 986;

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
  error?: boolean;
  /** tutor's percentage thresholds — the grades are derived from them, see buildGradeRows */
  gradeScales?: API.GradeScale[];
}

export const StudentCourseGrades: React.FC<Props> = ({ data, loading, error, gradeScales }) => {
  const rows = useMemo(() => buildGradeRows(data ?? [], gradeScales ?? []), [data, gradeScales]);
  const [expandedKeys, setExpandedKeys] = useState<React.Key[]>([]);
  const seenCourseKeysRef = useRef<Set<string>>(new Set());
  useEffect(() => {
    const courseKeys = rows.map((row) => row.key);
    const seen = seenCourseKeysRef.current;
    setExpandedKeys((prev) => mergeExpandedKeys(prev, courseKeys, seen));
    seenCourseKeysRef.current = new Set([...seen, ...courseKeys]);
  }, [rows]);

  if (loading && !data) {
    return <Spin />;
  }

  // Ahead of the data check: a failed reload must not keep rendering the previous result.
  if (error) {
    return (
      <Alert
        type="error"
        showIcon
        message={
          <FormattedMessage
            id="gradebook.course_grades_error"
            defaultMessage="Could not load quiz and project grades."
          />
        }
      />
    );
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
