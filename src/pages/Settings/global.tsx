import { TopicType } from '@/services/escola-lms/enums';
import { PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { Button, message, Popconfirm, Tooltip } from 'antd';
import React, { Fragment, useRef, useState } from 'react';
import type { IntlShape } from 'react-intl';
import { FormattedMessage, useIntl, useModel } from 'umi';

import {
  createSettings,
  deleteSettings,
  settings,
  updateSettings,
} from '@/services/escola-lms/settings';

import { DeleteOutlined, EditOutlined, InfoCircleOutlined } from '@ant-design/icons';
import SettingsModalForm from './components/ModalForm';

import { getRoutes } from '@@/core/route';

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
  'logo' | 'frontURL' | 'maxLessonsNestingInProgram' | 'minTopicNestingInProgram' | string,
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

const courseEditTabsKeys = ['statistics', 'user_submission', 'user_projects'];
const courseEditAdditionalSettingsKeys = ['public'];
const templateTabsKeys = ['email', 'sms'];

export const pathToSettingName = (path: string) =>
  `hideInMenu-${snakeToCamel(path.split('/').join('_'))}`;

export const topicTypeToSettingName = (type: string) => `disableTopicType-${type}`;

const booleanSettings = [
  ...Object.keys(TopicType).map((type) => ({
    key: topicTypeToSettingName(type),
    group: 'global',
    value: 'false',
    public: true,
    enumerable: true,
    sort: 1,
    type: 'boolean',
    data: false,
  })),
  ...flatRoutes(getRoutes())
    .filter((route) => route.path && route.path !== '/')
    .map((route) => ({
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
  ...['ECommerce', 'Certificates'].map((feature) => ({
    key: `disable-${feature}`,
    group: 'global',
    value: 'false',
    public: true,
    enumerable: true,
    sort: 1,
    type: 'boolean',
    data: false,
  })),
  ...courseEditAdditionalSettingsKeys.map((key) => ({
    key: `showInCourseAdditionalSettings-${key}`,
    group: 'global',
    value: 'false',
    public: true,
    enumerable: true,
    sort: 1,
    type: 'boolean',
    data: false,
  })),
  ...courseEditTabsKeys.map((key) => ({
    key: `hideInCourseTabs-${key}`,
    group: 'global',
    value: 'false',
    public: true,
    enumerable: true,
    sort: 1,
    type: 'boolean',
    data: false,
  })),
  ...templateTabsKeys.map((key) => ({
    key: `hideTemplateTab-${key}`,
    group: 'global',
    value: 'false',
    public: true,
    enumerable: true,
    sort: 1,
    type: 'boolean',
    data: false,
  })),
].reduce((acc, curr, index) => {
  acc[curr.key] = { ...curr, id: -100 * index };
  return acc;
}, {});

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

  minTopicNestingInProgram: {
    id: -5,
    key: 'minTopicNestingInProgram',
    group: 'global',
    value: '0',
    public: true,
    enumerable: true,
    sort: 1,
    type: 'number',
    data: 0,
  },

  companyName: {
    id: -6,
    key: 'companyName',
    group: 'global',
    value: 'Wellms',
    public: true,
    enumerable: true,
    sort: 0,
    type: 'text',
    data: 'Wellms',
  },
  companyURL: {
    id: -7,
    key: 'companyURL',
    group: 'global',
    value: 'https://www.wellms.io/',
    public: true,
    enumerable: true,
    sort: 0,
    type: 'text',
    data: 'https://www.wellms.io/',
  },

  logoLogin: {
    id: -8,
    key: 'logoLogin',
    group: 'global',
    value: '',
    public: true,
    enumerable: true,
    sort: 0,
    type: 'image',
    data: 'EscolaLMS',
  },
  logoFooter: {
    id: -9,
    key: 'logoFooter',
    group: 'global',
    value: '',
    public: true,
    enumerable: true,
    sort: 0,
    type: 'image',
    data: 'EscolaLMS',
  },
  footerFontColor: {
    id: -10,
    key: 'footerFontColor',
    group: 'global',
    value: '#00000072',
    public: true,
    enumerable: true,
    sort: 0,
    type: 'text',
    data: 'EscolaLMS',
  },
  showLoginBackgroundImage: {
    id: -11,
    key: 'showLoginBackgroundImage',
    group: 'global',
    value: 'true',
    public: true,
    enumerable: true,
    sort: 0,
    type: 'boolean',
    data: 'EscolaLMS',
  },
  loginHeaderBackgroundColor: {
    id: -12,
    key: 'loginHeaderBackgroundColor',
    group: 'global',
    value: '#f0f2f5',
    public: true,
    enumerable: true,
    sort: 0,
    type: 'text',
    data: 'EscolaLMS',
  },
  loginHeaderFontColor: {
    id: -13,
    key: 'loginHeaderFontColor',
    group: 'global',
    value: '#000000D8',
    public: true,
    enumerable: true,
    sort: 0,
    type: 'text',
    data: 'EscolaLMS',
  },
  loginFormBackgroundColor: {
    id: -14,
    key: 'loginFormBackgroundColor',
    group: 'global',
    value: '#f0f2f5',
    public: true,
    enumerable: true,
    sort: 0,
    type: 'text',
    data: 'EscolaLMS',
  },
  contentBackgroundColor: {
    id: -15,
    key: 'contentBackgroundColor',
    group: 'global',
    value: '#f0f2f5',
    public: true,
    enumerable: true,
    sort: 0,
    type: 'text',
    data: 'EscolaLMS',
  },
  technicalMaintenance: {
    id: -16,
    key: 'technicalMaintenance',
    group: 'global',
    value: 'false',
    public: true,
    enumerable: true,
    sort: 0,
    type: 'boolean',
    data: 'EscolaLMS',
  },
  technicalMaintenanceText: {
    id: -17,
    key: 'technicalMaintenanceText',
    group: 'global',
    value: '',
    public: true,
    enumerable: true,
    sort: 0,
    type: 'text',
    data: 'EscolaLMS',
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
      render: (_, record) => (
        <Fragment>
          <Tooltip title={<FormattedMessage id={`Settings.tooltip.${record.key}`} />}>
            {record.key} <InfoCircleOutlined />
          </Tooltip>
        </Fragment>
      ),
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
            per_page: pageSize,
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

          if (fields.type === 'array') {
            fields = { ...fields, value: JSON.parse(fields.value) };
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
