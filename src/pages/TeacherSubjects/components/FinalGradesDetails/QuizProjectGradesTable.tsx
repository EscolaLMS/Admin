import ProTable, { type ProColumns } from '@ant-design/pro-table';
import { Empty, Space, Spin, Typography } from 'antd';
import React, { useMemo } from 'react';
import { FormattedMessage } from 'umi';

import type { StudentExam, StudentGradeRow } from './types';
import { buildGeneratedItemRows, getGradeDisplay } from './utils';

const GRADE_CELL_BG = '#f5f5f5';
const GRADE_HEADER_BG = '#ebebeb';
// Below this the fixed columns (type 160 + weight 120 + grade 180) would squeeze the flexible
// name column past readability, so the table scrolls horizontally instead.
const MIN_TABLE_WIDTH = 720;

/**
 * The backend grade, with the percentage as muted context.
 *
 * No pass/fail tag: the quiz's own `is_passed` answers a different question from the subject
 * grade and can contradict it (a 66.67% quiz is is_passed:true yet maps to a 2). See the AW-44
 * history — it is deliberately not part of this table.
 */
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

const columns: ProColumns<StudentGradeRow>[] = [
  {
    title: <FormattedMessage id="name" />,
    dataIndex: 'name',
  },
  {
    title: <FormattedMessage id="type" />,
    dataIndex: 'kind',
    width: 160,
    render: (_n, row) => (
      <FormattedMessage id={`gradebook.type.${row.kind === 'quiz' ? 'GiftQuiz' : 'Project'}`} />
    ),
  },
  {
    title: <FormattedMessage id="TeacherSubjects.Exams.grade_weight" defaultMessage="Weight" />,
    dataIndex: 'weight',
    width: 120,
    // Rendered by hand rather than with `valueType: 'percent'`, which pads to "100.00%" —
    // matching the Exams list and the Oceny cząstkowe table, which show the same field.
    render: (_n, row) => (row.weight == null ? '' : `${row.weight}%`),
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
    render: (_n, row) => <GradeCell row={row} />,
  },
];

interface Props {
  /** the student's exams — the quiz/project grades are the generated rows among them */
  studentExams?: StudentExam[];
  loading: boolean;
}

export const QuizProjectGradesTable: React.FC<Props> = ({ studentExams, loading }) => {
  const rows = useMemo(() => buildGeneratedItemRows(studentExams ?? []), [studentExams]);

  if (loading && !studentExams) {
    return <Spin />;
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
    />
  );
};

export default QuizProjectGradesTable;
