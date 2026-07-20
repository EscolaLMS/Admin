import AutoSearchProTable from '@/components/AutoSearchProTable';
import SemesterSelect from '@/components/SemesterSelect';
import { semesterSubjects } from '@/services/escola-lms/semester_subject';
import { EditOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-layout';
import type { ActionType, ProColumns } from '@ant-design/pro-table';
import { Button, Tooltip } from 'antd';
import React, { useRef, useState } from 'react';
import { FormattedMessage, Link, history, useIntl, useLocation } from 'umi';
import { TEACHER_SUBJECTS_PAGE_SIZE } from './components/consts';
import { buildSemesterSearch, parseSemesterId } from './helpers';

export const TableColumns: ProColumns<API.Subjects>[] = [
  {
    hideInSearch: false,
    hideInTable: true,
    colSize: 2,
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
  const location = useLocation();
  // Read the selected semester from the URL once so the filter is restored on
  // browser-back, refresh, or when opening a link that already carries the param.
  const [initialSemesterId] = useState(() => parseSemesterId(location.search));

  return (
    <PageContainer>
      <AutoSearchProTable<API.Subjects, API.SubjectParams>
        headerTitle={intl.formatMessage({
          id: 'menu.Teacher.Subjects',
          defaultMessage: 'Subjects',
        })}
        actionRef={actionRef}
        rowKey="id"
        search={{
          layout: 'vertical',
        }}
        form={{ initialValues: { semester_id: initialSemesterId } }}
        pagination={{ defaultPageSize: TEACHER_SUBJECTS_PAGE_SIZE }}
        request={({ pageSize, current, semester_id }) => {
          // Mirror the applied filter into the URL query so it survives navigation.
          history.replace({
            pathname: history.location.pathname,
            search: buildSemesterSearch(history.location.search, semester_id),
          });

          return semesterSubjects({ per_page: pageSize, page: current, semester_id }).then(
            (response) => {
              if (response.success) {
                return {
                  data: response.data,
                  total: response.meta.total,
                  success: true,
                };
              }
              return { data: [], total: 0, success: false };
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
