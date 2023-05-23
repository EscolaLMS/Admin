import { PlusOutlined } from '@ant-design/icons';
import { Button, message, Tag, Tooltip, Popconfirm } from 'antd';
import React, { useState, useRef } from 'react';
import { useIntl, FormattedMessage } from 'umi';
import type { IntlShape } from 'react-intl';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { useModel } from 'umi';

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

const handleUpdate = async (intl: IntlShape, fields: API.Setting, id?: number) => {
  const hide = message.loading(
    intl.formatMessage({
      id: 'loading',
    }),
  );
  try {
    await (id && id !== -1 ? updateSettings(id, { ...fields }) : createSettings({ ...fields }));
    hide();
    message.success(
      intl.formatMessage({
        id: 'success',
      }),
    );

    return true;
  } catch (error) {
    hide();
    message.error(
      intl.formatMessage({
        id: 'error',
      }),
    );
    return false;
  }
};

const handleRemove = async (intl: IntlShape, id: number) => {
  const hide = message.loading(
    intl.formatMessage({
      id: 'loading',
    }),
  );
  try {
    await deleteSettings(id);
    hide();
    message.success(
      intl.formatMessage({
        id: 'success',
      }),
    );
    return true;
  } catch (error) {
    hide();
    message.error(
      intl.formatMessage({
        id: 'error',
      }),
    );
    return false;
  }
};

const TableList: React.FC = () => {
  const [modalVisible, setModalVisible] = useState<number | false>(false);

  const [groups, setGroups] = useState<string[]>([]);

  const actionRef = useRef<ActionType>();
  const intl = useIntl();

  const { setInitialState } = useModel('@@initialState');

  useEffect(() => {
    settingGroups().then((response) => {
      if (response.success) {
        setGroups(response.data.filter((group) => group !== 'global'));
      }
    });
  }, []);

  const columns: ProColumns<API.Setting>[] = [
    {
      title: <FormattedMessage id="group" defaultMessage="group" />,
      dataIndex: 'group',
      hideInSearch: false,
      key: 'group',
      valueType: 'select',
      width: 100,
      valueEnum: groups.sort().reduce((acc, group) => ({ ...acc, [group]: group }), {}),
    },
    {
      title: <FormattedMessage id="key" defaultMessage="key" />,
      dataIndex: 'key',
      hideInSearch: true,
    },
    {
      title: <FormattedMessage id="type" defaultMessage="type" />,
      dataIndex: 'type',
      hideInSearch: true,
    },

    {
      title: <FormattedMessage id="enumerable" defaultMessage="enumerable" />,
      dataIndex: 'enumerable',
      hideInForm: true,
      hideInSearch: true,
      render: (_, record) => (
        <Tag color={record.enumerable ? 'success' : 'error'}>
          <FormattedMessage
            id={record.enumerable ? 'true' : 'false'}
            defaultMessage={record.enumerable ? 'true' : 'false'}
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
      hideInSearch: true,
      title: <FormattedMessage id="pages.searchTable.titleOption" defaultMessage="操作" />,
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => [
        <Tooltip key="edit" title={<FormattedMessage id="edit" defaultMessage="edit" />}>
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={() => setModalVisible(record.id)}
          />
        </Tooltip>,

        <Popconfirm
          key="delete"
          title={
            <FormattedMessage
              id="deleteQuestion"
              defaultMessage="Are you sure to delete this record?"
            />
          }
          onConfirm={async () => {
            const success = await handleRemove(intl, record.id);
            if (success) {
              setModalVisible(false);
              if (actionRef.current) {
                actionRef.current.reload();
              }
            }
          }}
          okText={<FormattedMessage id="yes" defaultMessage="Yes" />}
          cancelText={<FormattedMessage id="no" defaultMessage="No" />}
        >
          <Tooltip title={<FormattedMessage id="delete" defaultMessage="delete" />}>
            <Button type="primary" icon={<DeleteOutlined />} danger />
          </Tooltip>
        </Popconfirm>,
      ],
    },
  ];

  return (
    <React.Fragment>
      <ProTable<API.Setting, API.PageParams & { group: string }>
        headerTitle={intl.formatMessage({
          id: 'menu.settings',
        })}
        actionRef={actionRef}
        rowKey="id"
        search={{
          layout: 'vertical',
        }}
        toolBarRender={() => [
          <Button
            type="primary"
            key="primary"
            onClick={() => {
              setModalVisible(-1);
            }}
          >
            <PlusOutlined /> <FormattedMessage id="pages.searchTable.new" />
          </Button>,
        ]}
        request={({ pageSize, current, group }) => {
          return settings({
            per_page: pageSize,
            current,
            group,
          }).then((response) => {
            if (response.success) {
              return {
                data: response.data.filter((item) => item.group !== 'global'),
                total: response.meta.total,
                success: true,
              };
            }
            return [];
          });
        }}
        columns={columns}
      />

      <SettingsModalForm
        groups={groups}
        id={modalVisible}
        visible={Number.isInteger(modalVisible)}
        onVisibleChange={(value) => {
          return !value && setModalVisible(false);
        }}
        onFinish={async (value) => {
          const fields = value as API.Setting;
          const success = await handleUpdate(intl, fields, Number(modalVisible));
          if (success) {
            setModalVisible(false);
            if (actionRef.current) {
              actionRef.current.reload();
            }
            if (fields.group === 'global') {
              const config = await settings({ current: 1, per_page: 100, group: 'global' });
              setInitialState((prevState) => ({
                ...prevState,
                config: config.success ? config.data : prevState?.config,
              }));
            }
          }
        }}
      />
    </React.Fragment>
  );
};

export default TableList;
