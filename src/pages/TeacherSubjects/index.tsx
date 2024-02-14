import SemesterSelect from '@/components/SemesterSelect';
import { semesterSubjects } from '@/services/escola-lms/semester_subject';
import { EditOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-layout';
import type { ActionType, ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { Button, Tooltip } from 'antd';
import React, { useRef } from 'react';
import { FormattedMessage, Link, useIntl } from 'umi';
import { TEACHER_SUBJECTS_PAGE_SIZE } from './components/consts';

export const TableColumns: ProColumns<API.Subjects>[] = [
  {
    hideInSearch: false,
    hideInTable: true,
    title: <FormattedMessage id="semester" defaultMessage="semester" />,
    dataIndex: 'semester_id',
    renderFormItem: (item, { type, defaultRender, ...rest }, form) => {
      if (type === 'form') {
        return null;
      }
      const stateType = form.getFieldValue('state');
      return (
        <SemesterSelect
          {...rest}
          state={{
            type: stateType,
          }}
        />
      );
    },
  },
  {
    title: <FormattedMessage id="ID" defaultMessage="ID" />,
    dataIndex: 'id',
    hideInSearch: true,
    width: '80px',
  },
  {
    title: <FormattedMessage id="subject" defaultMessage="subject" />,
    dataIndex: ['subject', 'name'],
    hideInSearch: true,
  },
  {
    title: <FormattedMessage id="semester" defaultMessage="semester" />,
    dataIndex: ['semester', 'name'],
    hideInSearch: true,
  },
  {
    title: <FormattedMessage id="group" defaultMessage="group" />,
    dataIndex: 'groups',
    render: (_, record) => (
      <span>
        {record.groups.map((group: API.SubjectGroups) => (
          <span key={group.id}>
            {group.name} <br />
          </span>
        ))}
      </span>
    ),
    hideInForm: true,
    hideInSearch: true,
  },
];

const TableList: React.FC = () => {
  const actionRef = useRef<ActionType>();
  const intl = useIntl();

  return (
    <PageContainer>
      <ProTable<API.Subjects, API.SubjectParams>
        headerTitle={intl.formatMessage({
          id: 'menu.Teacher.Subjects',
          defaultMessage: 'Subjects',
        })}
        actionRef={actionRef}
        rowKey="id"
        search={{
          layout: 'vertical',
        }}
        pagination={{ defaultPageSize: TEACHER_SUBJECTS_PAGE_SIZE }}
        request={({ pageSize, current, semester_id }) => {
          return semesterSubjects({ per_page: pageSize, page: current, semester_id }).then(
            (response) => {
              if (response.success) {
                return {
                  data: response.data,
                  total: response.meta.total,
                  success: true,
                };
              }
              return [];
            },
          );
        }}
        columns={[
          ...TableColumns,
          {
            hideInSearch: true,
            title: <FormattedMessage id="pages.searchTable.titleOption" />,
            dataIndex: 'option',
            valueType: 'option',
            render: (_, record) => [
              <Link to={`/teacher/subjects/${record.id}`} key="edit">
                <Tooltip title={<FormattedMessage id="edit" defaultMessage="edit" />}>
                  <Button type="primary" icon={<EditOutlined />} />
                </Tooltip>
              </Link>,
            ],
          },
        ]}
      />
    </PageContainer>
  );
};

export default TableList;
