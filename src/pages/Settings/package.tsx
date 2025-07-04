import { sortArrayByKey } from '@/utils/utils';
import { EditOutlined } from '@ant-design/icons';
import type { ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { Button, Modal, Tag, Tooltip } from 'antd';
import React, { useMemo, useState } from 'react';
import { FormattedMessage, useIntl } from 'umi';
import PackageModalForm from './components/PackageModalForm';

const findNestedFields = (obj: object, searchKey: string, results: object[] = []) => {
  if (!obj || typeof obj !== 'object') {
    return false;
  } else {
    Object.keys(obj).forEach((key) => {
      const value = obj[key as keyof typeof obj];

      if (key === searchKey) {
        results.push(obj);
      } else if (typeof value === 'object') {
        findNestedFields(value, searchKey, results);
      }
    });
  }

  return results;
};

const TableList: React.FC<{
  packageName: keyof API.Configs;
  values: API.Configs;
  onValueUpdated: () => void;
}> = ({ packageName, values, onValueUpdated }) => {
  const intl = useIntl();
  const [selectedEntry, setSelectedEntry] = useState<API.ConfigEntry>();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState<string>('');

  const entries = useMemo(() => {
    const data: Record<string, API.Config> = values[packageName];
    return findNestedFields(data, 'rules');
  }, [values, packageName]);

  const columns: ProColumns<API.ConfigEntry>[] = [
    {
      title: <FormattedMessage id="key" defaultMessage="key" />,
      dataIndex: 'key',
      hideInSearch: false,
      sorter: true,
    },
    {
      title: <FormattedMessage id="readonly" defaultMessage="readonly" />,
      dataIndex: 'readonly',
      hideInForm: true,
      hideInSearch: true,
      sorter: true,
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
      sorter: true,
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
      render: (_, record) => {
        let displayValue = '';
        if (typeof record.value === 'boolean') {
          return (
            <Tag color={record.value ? 'success' : 'error'}>
              <FormattedMessage
                id={record.value ? 'true' : 'false'}
                defaultMessage={record.value ? 'true' : 'false'}
              />
            </Tag>
          );
        } else if (Array.isArray(record.value) || typeof record.value === 'object') {
          displayValue = JSON.stringify(record.value, null, 2);
        } else {
          displayValue = String(record.value);
        }

        const truncated =
          displayValue.length > 400 ? displayValue.slice(0, 400) + '...' : displayValue;

        return (
          <>
            <span style={{ wordBreak: 'break-all' }}>{truncated}</span>
            {displayValue.length > 400 && (
              <Button
                type="link"
                size="small"
                onClick={() => {
                  setModalContent(displayValue);
                  setModalVisible(true);
                }}
              >
                Show more
              </Button>
            )}
          </>
        );
      },
    },
  ];

  return (
    <React.Fragment>
      <ProTable<API.ConfigEntry>
        headerTitle={intl.formatMessage({
          id: 'menu.settings',
        })}
        rowKey="key"
        search={{
          layout: 'vertical',
        }}
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
                />
              </Tooltip>,
            ],
          },
        ]}
        request={({ key }, sort) => {
          const sortArr = sort && Object.entries(sort)[0];
          return new Promise((resolve) => {
            let newArray = entries ? [...(entries as API.ConfigEntry[])] : [];
            if (key) {
              newArray = newArray.filter((item) =>
                item.key.toLowerCase().includes(key.toLowerCase()),
              );
            }
            if (sortArr) {
              newArray = sortArrayByKey<API.ConfigEntry>(
                newArray,
                sortArr[0],
                sortArr[1] === 'ascend' ? false : true,
              );
            }
            resolve({
              data: newArray,
              success: true,
              total: newArray.length,
            });
          });
        }}
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
      <Modal
        open={modalVisible}
        title="Full Value"
        footer={null}
        onCancel={() => setModalVisible(false)}
        width={1200}
      >
        <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>{modalContent}</pre>
      </Modal>
    </React.Fragment>
  );
};

export default TableList;
