import React, { useMemo } from 'react';
import { format } from 'date-fns';
import { FormattedMessage } from 'umi';
import { Button, Tooltip } from 'antd';
import type { ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { DownloadOutlined } from '@ant-design/icons';

import { DATETIME_FORMAT } from '@/consts/dates';
import { getPCGExportsHistory } from '@/services/escola-lms/pcg-export';
import TypeButtonDrawer from '@/components/TypeButtonDrawer';
import UserSelect from '@/components/UserSelect';
import { useTeacherSubject } from '../context';

const DownloadButton: React.FC<{ url: string }> = ({ url }) => (
  <Tooltip title={<FormattedMessage id="download" />}>
    <Button
      type="primary"
      onClick={() => {
        window.open(url, '_blank', 'noopener noreferrer');
      }}
      icon={<DownloadOutlined />}
    />
  </Tooltip>
);

const staticColumns: ProColumns<API.PCGFileExportsHistoryItem>[] = [
  {
    title: <FormattedMessage id="ID" />,
    dataIndex: 'id',
    hideInSearch: true,
  },
  {
    title: <FormattedMessage id="created_at" />,
    dataIndex: 'created_at',
    hideInSearch: true,
    render: (_n, record) => format(new Date(record.created_at), DATETIME_FORMAT),
  },
  {
    title: <FormattedMessage id="created_by" />,
    dataIndex: 'created_by',
    renderFormItem: (item, { type, defaultRender, ...rest }, form) => {
      if (type === 'form') {
        return null;
      }
      const stateType = form.getFieldValue('state');
      return (
        <UserSelect
          {...rest}
          state={{
            type: stateType,
          }}
        />
      );
    },
    render: (_n, record) => (
      <TypeButtonDrawer
        key={record.created_by.id}
        type="EscolaLms\Core\Models\User"
        type_id={record.created_by.id}
      />
    ),
  },
  {
    title: <FormattedMessage id="exported_at" />,
    dataIndex: 'exported_at',
    hideInSearch: true,
    render: (_n, record) => format(new Date(record.exported_at), DATETIME_FORMAT),
  },
  {
    title: <FormattedMessage id="exported_by" />,
    dataIndex: 'exported_by',
    renderFormItem: (item, { type, defaultRender, ...rest }, form) => {
      if (type === 'form') {
        return null;
      }
      const stateType = form.getFieldValue('state');
      return (
        <UserSelect
          {...rest}
          state={{
            type: stateType,
          }}
        />
      );
    },
    render: (_n, record) => (
      <TypeButtonDrawer
        key={record.exported_by.id}
        type="EscolaLms\Core\Models\User"
        type_id={record.exported_by.id}
      />
    ),
  },
  {
    title: <FormattedMessage id="version" />,
    dataIndex: 'version',
    hideInSearch: true,
  },
  {
    title: <FormattedMessage id="options" />,
    valueType: 'option',
    render: (_n, record) => [<DownloadButton key="download" url={record.url} />],
  },
];

export const FileExportsHistory: React.FC = () => {
  const { teacherSubjectData } = useTeacherSubject();

  const groupOptions = useMemo(
    () => (teacherSubjectData?.groups ?? []).map(({ id, name }) => ({ value: id, label: name })),
    [teacherSubjectData?.groups],
  );

  const columns: ProColumns<API.PCGFileExportsHistoryItem>[] = useMemo(
    () => [
      {
        title: <FormattedMessage id="group" />,
        dataIndex: 'group_id',
        hideInTable: true,
        valueType: 'select',
        fieldProps: {
          options: groupOptions,
          defaultValue: teacherSubjectData?.groups?.[0]?.id,
          allowClear: false,
        },
      },
      ...staticColumns,
    ],
    [teacherSubjectData?.groups?.[0]?.id, groupOptions],
  );

  return (
    <ProTable<API.PCGFileExportsHistoryItem, API.PCGFileExportsHistoryParams>
      className="table-standalone"
      request={async ({
        group_id = teacherSubjectData?.groups?.[0]?.id,
        created_by,
        exported_by,
      }) => {
        const response = await getPCGExportsHistory({ group_id, created_by, exported_by });

        if (!response.success) {
          return { success: false, data: [], total: 0 };
        }

        return { success: true, data: response.data, total: response.data.length };
      }}
      columns={columns}
      search={{ layout: 'vertical' }}
      scroll={{ x: 1500 }}
    />
  );
};
