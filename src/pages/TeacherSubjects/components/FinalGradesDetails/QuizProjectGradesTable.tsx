import ProTable, { type ProColumns } from '@ant-design/pro-table';
import { Alert, Empty, Space, Spin, Tag, Typography } from 'antd';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { FormattedMessage } from 'umi';

import type { StudentGradeRow } from './types';
import { buildGradeRows, formatWeightPercent, getGradeDisplay, mergeExpandedKeys } from './utils';

const GRADE_CELL_BG = '#f5f5f5';
const GRADE_HEADER_BG = '#ebebeb';
const MIN_TABLE_WIDTH = 720;

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
    </Space>
  );
};

const CompletionTag: React.FC<{ completed?: boolean }> = ({ completed }) =>
  completed ? (
    <Tag color="success">
      <FormattedMessage id="gradebook.completed" defaultMessage="Completed" />
    </Tag>
  ) : (
    <Tag>
      <FormattedMessage id="gradebook.not_completed" defaultMessage="Not completed" />
    </Tag>
  );

const columns: ProColumns<StudentGradeRow>[] = [
  {
    title: <FormattedMessage id="name" />,
    dataIndex: 'name',
    render: (_n, row) =>
      row.kind === 'course' ? (
        <>
          <Typography.Text strong>{row.name}</Typography.Text>{' '}
          <CompletionTag completed={row.is_completed} />
        </>
      ) : (
        row.name
      ),
  },
  {
    title: <FormattedMessage id="type" />,
    dataIndex: 'kind',
    width: 160,
    render: (_n, row) =>
      row.kind === 'course' ? (
        ''
      ) : (
        <FormattedMessage id={`gradebook.type.${row.kind === 'quiz' ? 'GiftQuiz' : 'Project'}`} />
      ),
  },
  {
    title: <FormattedMessage id="TeacherSubjects.Exams.grade_weight" defaultMessage="Weight" />,
    dataIndex: 'weight',
    width: 120,
    render: (_n, row) => (row.kind === 'course' ? '' : formatWeightPercent(row.weight)),
  },
  {
    title: (
      <Typography.Text strong>
        <FormattedMessage id="grade" defaultMessage="Grade" />
      </Typography.Text>
    ),
    dataIndex: 'grade',
    width: 180,
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
}

export const QuizProjectGradesTable: React.FC<Props> = ({ data, loading, error }) => {
  const rows = useMemo(() => buildGradeRows(data ?? []), [data]);

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

  if (!rows.length) {
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

export default QuizProjectGradesTable;
