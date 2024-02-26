import { DeleteOutlined, EditOutlined, LineChartOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { Button, Popconfirm, Tooltip } from 'antd';
import { format } from 'date-fns';
import React, { useRef } from 'react';
import { FormattedMessage, Link, useLocation } from 'umi';

import TypeButtonDrawer from '@/components/TypeButtonDrawer';
import { DAY_FORMAT } from '@/consts/dates';
import { deleteExam, getExams } from '@/services/escola-lms/exams';
import { useTeacherSubject } from '../context';
import { ExamForm } from './ExamForm';
import { ExamResults } from './ExamResults';
import { TEACHER_SUBJECTS_PAGE_SIZE } from './consts';

const staticColumns: ProColumns<API.Exam>[] = [
  {
    title: <FormattedMessage id="ID" defaultMessage="ID" />,
    dataIndex: 'id',
    sorter: true,
    width: '80px',
  },
  {
    title: <FormattedMessage id="title" defaultMessage="title" />,
    dataIndex: 'title',
    hideInSearch: true,
    sorter: true,
  },
  {
    title: <FormattedMessage id="type" defaultMessage="type" />,
    dataIndex: 'type',
    sorter: true,
    render: (_, record) => <FormattedMessage id={`ExamGradeType.${record.type}`} />,
  },
  {
    title: <FormattedMessage id="TeacherSubjects.Exams.exam_date" defaultMessage="Exam date" />,
    dataIndex: 'passed_at',
    sorter: true,
    render: (_, record) => record.passed_at && format(new Date(record.passed_at), DAY_FORMAT),
  },
  {
    title: <FormattedMessage id="TeacherSubjects.Exams.grade_weight" defaultMessage="Weight" />,
    dataIndex: 'weight',
    sorter: true,
    render: (_, record) => (record.weight ? record.weight + '%' : ''),
  },
  {
    title: <FormattedMessage id="created_at" defaultMessage="Created at" />,
    dataIndex: 'created_at',
    sorter: true,
    render: (_, record) => record.created_at && format(new Date(record.created_at), DAY_FORMAT),
  },
  {
    title: <FormattedMessage id="semester" defaultMessage="Semester" />,
    dataIndex: 'semester',
    sorter: true,
    render: (_, record) => (
      <FormattedMessage
        id={`SemesterType.${record.semester.type}`}
        values={{ year: record.semester.year }}
      />
    ),
  },
  {
    title: <FormattedMessage id="group" defaultMessage="Group" />,
    dataIndex: 'group_id',
    sorter: true,
    render: (_, record) => (
      <TypeButtonDrawer key={record.group_id} type="Students" type_id={record.group_id} />
    ),
  },
];

export const Exams: React.FC = () => {
  const actionRef = useRef<ActionType>();
  const { semester_subject_id } = useTeacherSubject();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const exam_id = searchParams.get('exam_id') ?? null;
  const results = searchParams.get('results');

  if (results !== null && !Number.isNaN(Number(results))) {
    return <ExamResults exam_id={Number(results)} />;
  }

  if (exam_id !== null) {
    return <ExamForm exam_id={exam_id} />;
  }

  return (
    <ProTable<API.Exam, API.ExamsParams>
      className="table-standalone"
      headerTitle={<FormattedMessage id="exams" />}
      actionRef={actionRef}
      search={false}
      rowKey="id"
      pagination={{ defaultPageSize: TEACHER_SUBJECTS_PAGE_SIZE }}
      request={async ({ current, pageSize }, sort) => {
        if (semester_subject_id === null)
          return {
            data: [],
            total: 0,
            success: false,
          };
        const sortArr = sort && Object.entries(sort)[0];

        const response = await getExams({
          per_page: pageSize,
          page: current,
          semester_subject_id: !Number.isNaN(semester_subject_id) ? semester_subject_id : undefined,
          order_by: sortArr && sortArr[0],
          order: sortArr && (sortArr[1] === 'ascend' ? 'ASC' : 'DESC'),
        });

        if (response.success) {
          return {
            data: response.data,
            total: response.meta.total,
            success: true,
          };
        }

        return {
          data: [],
          total: 0,
          success: false,
        };
      }}
      columns={[
        ...staticColumns,
        {
          title: <FormattedMessage id="pages.searchTable.titleOption" />,
          dataIndex: 'option',
          valueType: 'option',
          render: (_, record) => [
            <Link
              to={`/teacher/subjects/${record.semester_subject_id}/exams?exam_id=${record.id}`}
              key="edit"
            >
              <Tooltip title={<FormattedMessage id="edit" defaultMessage="edit" />}>
                <Button type="primary" icon={<EditOutlined />} />
              </Tooltip>
            </Link>,
            <Link
              to={`/teacher/subjects/${record.semester_subject_id}/exams?results=${record.id}`}
              key="results"
            >
              <Tooltip
                title={
                  <FormattedMessage id="TeacherSubjects.Exams.results" defaultMessage="results" />
                }
              >
                <Button icon={<LineChartOutlined />} />
              </Tooltip>
            </Link>,
            <Popconfirm
              key="delete"
              title={
                <FormattedMessage
                  id="deleteQuestion"
                  defaultMessage="Are you sure to delete this record?"
                />
              }
              onConfirm={async () => {
                const response = await deleteExam(record.id);

                if (response.success && actionRef.current) {
                  actionRef.current.reload();
                }
              }}
              okText={<FormattedMessage id="yes" />}
              cancelText={<FormattedMessage id="no" />}
            >
              <Tooltip title={<FormattedMessage id="delete" defaultMessage="delete" />}>
                <Button type="primary" icon={<DeleteOutlined />} danger />
              </Tooltip>
            </Popconfirm>,
          ],
        },
      ]}
    />
  );
};
