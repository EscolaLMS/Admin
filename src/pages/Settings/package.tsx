import { PlusOutlined } from '@ant-design/icons';
import { Button, message, Tag, Tooltip, Popconfirm } from 'antd';
import React, { useState, useRef, useMemo } from 'react';
import { useIntl, FormattedMessage } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
import type { IntlShape } from 'react-intl';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';

import {
  settings,
  createSettings,
  updateSettings,
  deleteSettings,
  settingGroups,
} from '@/services/escola-lms/settings';

import SettingsModalForm from './components/ModalForm';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useEffect } from 'react';

type ConfigEntry = {
  key: keyof API.Configs;
} & API.Config;

const columns: ProColumns<ConfigEntry>[] = [
  {
    title: <FormattedMessage id="key" defaultMessage="key" />,
    dataIndex: 'key',
    hideInSearch: true,
  },

  {
    title: <FormattedMessage id="readonly" defaultMessage="readonly" />,
    dataIndex: 'readonly',
    hideInForm: true,
    hideInSearch: true,
    render: (_, record) => (
      <Tag color={record.readonly ? 'success' : 'error'}>
        <FormattedMessage
          id={record.readonly ? 'true' : 'false'}
          defaultMessage={record.readonly ? 'true' : 'false'}
        />
      </Tag>
    ),
  },

  {
    title: <FormattedMessage id="public" defaultMessage="public" />,
    dataIndex: 'public',
    hideInForm: true,
    hideInSearch: true,
    render: (_, record) => (
      <Tag color={record.public ? 'success' : 'error'}>
        <FormattedMessage
          id={record.public ? 'true' : 'false'}
          defaultMessage={record.public ? 'true' : 'false'}
        />
      </Tag>
    ),
  },

  {
    title: <FormattedMessage id="value" defaultMessage="value" />,
    dataIndex: 'value',
    hideInForm: true,
    hideInSearch: true,
  },
];

const TableList: React.FC<{
  packageName: keyof API.Configs;
  values: API.Configs;
}> = ({ packageName, values }) => {
  const intl = useIntl();

  const entries = useMemo(() => {
    const data: Record<string, API.Config> = values[packageName];

    const arr: ConfigEntry[] = Object.entries(data).map((entry) => ({
      key: entry[0],
      ...entry[1],
    }));
    return arr;
  }, [values, packageName]);

  return (
    <React.Fragment>
      <ProTable<ConfigEntry>
        headerTitle={intl.formatMessage({
          id: 'menu.settings',
        })}
        // actionRef={actionRef}
        rowKey="id"
        search={{
          labelWidth: 120,
        }}
        request={() => Promise.resolve({ data: entries, success: true })}
        columns={columns}
      />
    </React.Fragment>
  );
};

export default TableList;
