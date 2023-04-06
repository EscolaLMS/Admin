import { PlusOutlined } from '@ant-design/icons';
import { Button, message, Tooltip, Popconfirm } from 'antd';
import React, { useState, useRef } from 'react';
import { useIntl, FormattedMessage, useModel } from 'umi';
import type { IntlShape } from 'react-intl';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';

import {
  settings,
  createSettings,
  updateSettings,
  deleteSettings,
} from '@/services/escola-lms/settings';

import SettingsModalForm from './components/ModalForm';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

import { getRoutes } from '@@/core/routes';

const handleUpdate = async (intl: IntlShape, fields: API.Setting, id?: number) => {
  const hide = message.loading(
    intl.formatMessage({
      id: 'loading',
    }),
  );
  try {
    const updatedSettings = await (id && id !== -1
      ? updateSettings(id, { ...fields })
      : createSettings({ ...fields }));

    hide();
    message.success(
      intl.formatMessage({
        id: 'success',
      }),
    );

    return {
      success: true,
      updatedSettings,
    };
  } catch (error) {
    hide();
    message.error(
      intl.formatMessage({
        id: 'error',
      }),
    );
    return { success: false, updateSettings: null };
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

type InitialDataRecords = Record<
  'logo' | 'frontURL' | 'showProjectTypeInProgram' | 'maxLessonsNestingInProgram' | string,
  API.Setting
>;

type Route = {
  path: string;
  layout: boolean;
  hideInMenu: boolean;
  routes: Route[];
} & any;

const snakeToCamel = (str: string) =>
  str.toLowerCase().replace(/(_\w)/g, (m) => m.toUpperCase().substr(1));

const flatRoutes = (routes: Route[]): Route[] => {
  return (
    routes.reduce((acc, curr) => {
      return [...acc, ...(curr.routes ? flatRoutes(curr.routes) : []), curr];
    }, [] as Route[]) as Route[]
  ).filter((route) => route.layout !== false && route.hideInMenu !== true);
};

export const pathToSettingName = (path: string) =>
  `hideInMenu-${snakeToCamel(path.split('/').join('_'))}`;

const booleanSettings = [
  ...flatRoutes(getRoutes())
    .filter((route) => route.path && route.path !== '/')
    .map((route, i) => ({
      id: -1 * (i + 100),
      path: route.path,
      key: pathToSettingName(route.path),
      group: 'global',
      value: 'false',
      public: true,
      enumerable: true,
      sort: 1,
      type: 'boolean',
      data: false,
    })),
].reduce((acc, curr) => ({ ...acc, [curr.key]: curr }), {});

const initialData: InitialDataRecords = {
  logo: {
    id: -1,
    key: 'logo',
    group: 'global',
    value: '',
    public: true,
    enumerable: true,
    sort: 0,
    type: 'image',
    data: 'EscolaLMS',
  },
  frontURL: {
    id: -2,
    key: 'frontURL',
    group: 'global',
    value: '',
    public: true,
    enumerable: true,
    sort: 0,
    type: 'text',
    data: 'EscolaLMS',
  },
  showProjectTypeInProgram: {
    id: -3,
    key: 'showProjectTypeInProgram',
    group: 'global',
    value: 'false',
    public: true,
    enumerable: true,
    sort: 1,
    type: 'boolean',
    data: false,
  },
  maxLessonsNestingInProgram: {
    id: -4,
    key: 'maxLessonsNestingInProgram',
    group: 'global',
    value: '0',
    public: true,
    enumerable: true,
    sort: 1,
    type: 'number',
    data: 0,
  },

  ...booleanSettings,
};

const TableList: React.FC = () => {
  const [modalVisible, setModalVisible] = useState<number | Partial<API.Setting> | false>(false);
  const actionRef = useRef<ActionType>();
  const intl = useIntl();

  const { setInitialState, initialState } = useModel('@@initialState');

  const columns: ProColumns<API.Setting>[] = [
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
      title: <FormattedMessage id="value" defaultMessage="value" />,
      dataIndex: 'value',
      hideInForm: true,
      hideInSearch: true,
      render: (_, record) => record.value,
    },
    {
      hideInSearch: true,
      title: <FormattedMessage id="pages.searchTable.titleOption" defaultMessage="操作" />,
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => [
        record.id > 0 ? (
          <Tooltip key="edit" title={<FormattedMessage id="edit" defaultMessage="edit" />}>
            <Button
              type="primary"
              icon={<EditOutlined />}
              onClick={() => setModalVisible(record.id)}
            />
          </Tooltip>
        ) : (
          <Tooltip key="create" title={<FormattedMessage id="create" defaultMessage="create" />}>
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={() => {
                setModalVisible(initialData[record.key] || -1);
              }}
            />
          </Tooltip>
        ),

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
          {record.id > 0 ? (
            <Tooltip title={<FormattedMessage id="delete" defaultMessage="delete" />}>
              <Button type="primary" icon={<DeleteOutlined />} danger />
            </Tooltip>
          ) : null}
        </Popconfirm>,
      ],
    },
  ];

  const updateConfigDynamically = (value: API.Setting) => {
    if (!value) return;
    if (!initialState?.config?.length && value) {
      setInitialState({ ...initialState, config: [value] });
    }
    if (!initialState?.config) return;
    const config = initialState?.config.map((setting) => {
      if (setting.key === value.key) {
        return {
          ...setting,
          ...value,
        };
      }
      return setting;
    });
    setInitialState({ ...initialState, config });
  };

  return (
    <React.Fragment>
      <ProTable<API.Setting, API.PageParams & { group: string }>
        headerTitle={intl.formatMessage({
          id: 'menu.settings',
        })}
        search={false}
        toolBarRender={false}
        actionRef={actionRef}
        rowKey="id"
        request={({ pageSize, current }) => {
          return settings({
            pageSize,
            current,
            group: 'global',
          }).then((response) => {
            if (response.success) {
              const rows: API.Setting[] = [
                ...Object.keys(initialData).map(
                  (key) => response.data.find((item) => item.key === key) || initialData[key],
                ),
                ...response.data.filter((item) => !Object.keys(initialData).includes(item.key)),
              ];

              return {
                data: rows,
                total: rows.length,
                success: true,
              };
            }
            return [];
          });
        }}
        columns={columns}
      />

      <SettingsModalForm
        groups={[]}
        id={modalVisible}
        visible={modalVisible}
        initialData={initialData}
        onVisibleChange={(value) => {
          return !value && setModalVisible(false);
        }}
        onFinish={async (value) => {
          let fields = value as API.Setting;

          if (fields.type === 'number') {
            fields = { ...fields, value: String(fields.data) };
          }

          if (fields.type === 'boolean') {
            fields = { ...fields, value: fields.data };
          }

          const { success, updatedSettings } = await handleUpdate(
            intl,
            fields,
            Number(modalVisible),
          );
          if (success) {
            if (updatedSettings?.success) updateConfigDynamically(updatedSettings.data);
            setModalVisible(false);
            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
        }}
      />
    </React.Fragment>
  );
};

export default TableList;
