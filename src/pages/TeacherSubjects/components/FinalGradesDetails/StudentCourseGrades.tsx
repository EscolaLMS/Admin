import ProTable, { type ProColumns } from '@ant-design/pro-table';
import { Empty, Spin, Tag, Typography } from 'antd';
import React from 'react';
import { FormattedMessage } from 'umi';

/**
 * AN-8 — "Final grades" per-course tables for a single student.
 *
 * Renders one table per course listing that course's quiz/project grades plus
 * pass/fail. This is a distinct component from the gradebook (ClassRegister),
 * although both consume the same backend gradebook data.
 */

const PassFailTag: React.FC<{ passed: boolean | null }> = ({ passed }) => {
  if (passed === null || passed === undefined) {
    return <Tag>-</Tag>;
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

const columns: ProColumns<API.StudentCourseGrade>[] = [
  {
    title: <FormattedMessage id="name" />,
    dataIndex: 'topic_title',
  },
  {
    title: <FormattedMessage id="type" />,
    dataIndex: 'topicable_type',
    render: (_n, row) => (
      <FormattedMessage
        id={`gradebook.type.${row.topicable_type}`}
        defaultMessage={row.topicable_type}
      />
    ),
  },
  {
    title: <FormattedMessage id="grade" />,
    dataIndex: 'grade',
    render: (_n, row) => (row.grade === null || row.grade === undefined ? '-' : row.grade),
  },
  {
    title: <FormattedMessage id="gradebook.pass_fail" defaultMessage="Pass / fail" />,
    dataIndex: 'passed',
    render: (_n, row) => <PassFailTag passed={row.passed} />,
  },
];

const TABLE_PAGE_SIZE = 6;

interface Props {
  data?: API.StudentCourseGrades[];
  loading: boolean;
}

export const StudentCourseGrades: React.FC<Props> = ({ data, loading }) => {
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
    <>
      {data.map((course) => (
        <div key={course.course_id} style={{ marginBottom: '24px' }}>
          <Typography.Text style={{ fontSize: '16px', fontWeight: 500 }}>
            {course.course_title}
          </Typography.Text>
          <ProTable<API.StudentCourseGrade>
            rowKey="topic_id"
            search={false}
            options={false}
            pagination={{ pageSize: TABLE_PAGE_SIZE }}
            dataSource={course.grades}
            columns={columns}
            cardProps={{ bodyStyle: { padding: 0 } }}
            locale={{
              emptyText: (
                <Empty
                  description={
                    <FormattedMessage
                      id="gradebook.no_course_grades"
                      defaultMessage="No quiz or project grades yet."
                    />
                  }
                />
              ),
            }}
          />
        </div>
      ))}
    </>
  );
};

export default StudentCourseGrades;
