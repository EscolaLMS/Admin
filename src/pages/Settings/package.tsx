import { Button, Tag, Tooltip } from 'antd';
import React, { useState, useMemo } from 'react';
import { useIntl, FormattedMessage } from 'umi';
import type { ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { EditOutlined } from '@ant-design/icons';
import PackageModalForm from './components/PackageModalForm';

const columns: ProColumns<API.ConfigEntry>[] = [
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
  onValueUpdated: () => void;
}> = ({ packageName, values, onValueUpdated }) => {
  const intl = useIntl();
  const [selectedEntry, setSelectedEntry] = useState<API.ConfigEntry>();

  const entries = useMemo(() => {
    const data: Record<string, API.Config> = values[packageName];

    const arr: API.ConfigEntry[] = Object.entries(data).map((entry) => ({
      key: entry[0],
      full_key: `${packageName}.${entry[0]}`,
      ...entry[1],
    }));
    return arr;
  }, [values, packageName]);

  return (
    <React.Fragment>
      <ProTable<API.ConfigEntry>
        headerTitle={intl.formatMessage({
          id: 'menu.settings',
        })}
        rowKey="key"
        search={false}
        request={() => Promise.resolve({ data: entries, success: true })}
        columns={[
          ...columns,
          {
            hideInSearch: true,
            title: <FormattedMessage id="pages.searchTable.titleOption" defaultMessage="操作" />,
            dataIndex: 'option',
            valueType: 'option',
            render: (_, record) => [
              <Tooltip key="edit" title={<FormattedMessage id="edit" defaultMessage="edit" />}>
                <Button
                  type="primary"
                  icon={<EditOutlined />}
                  onClick={() => setSelectedEntry(record)}
                ></Button>
              </Tooltip>,
            ],
          },
        ]}
      />
      {selectedEntry && (
        <PackageModalForm
          value={selectedEntry}
          visible={selectedEntry !== undefined}
          onVisibleChange={(value) => {
            return value === false && setSelectedEntry(undefined);
          }}
          onFinish={async () => {
            onValueUpdated();
          }}
        />
      )}
    </React.Fragment>
  );
};

export default TableList;
