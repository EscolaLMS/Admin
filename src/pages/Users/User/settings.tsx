import { getUserSettings, setUserSettings } from '@/services/escola-lms/user';
import { InteractionOutlined, PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { Button } from 'antd';
import React, { useCallback, useRef, useState } from 'react';
import { FormattedMessage, useIntl } from 'umi';
import UserSettingForm from './components/SettingModal';

const TableList: React.FC<{ user: string; isProfile: boolean }> = ({ user, isProfile = false }) => {
  const actionRef = useRef<ActionType>();
  const intl = useIntl();
  const [modalVisible, setModalVisible] = useState<number | false>(false);
  const [method, setMetod] = useState('PATCH');
  const columns: ProColumns<API.UserSetting>[] = [
    {
      title: <FormattedMessage id="key" defaultMessage="key" />,
      dataIndex: 'key',
      hideInSearch: true,
    },
    {
      title: <FormattedMessage id="value" defaultMessage="value" />,
      dataIndex: 'value',
      hideInSearch: true,
    },
  ];

  const createEntries = useCallback(
    (data: API.UserSetting) => {
      const arr =
        data &&
        Object.entries(data).map((entry) => {
          return {
            key: entry[0],
            value: entry[1],
          };
        });
      return arr;
    },
    [user],
  );

  return (
    <React.Fragment>
      <ProTable<API.UserSetting, API.PageParams>
        headerTitle={intl.formatMessage({
          id: 'menu.settings',
        })}
        actionRef={actionRef}
        rowKey="id"
        search={false}
        toolBarRender={
          isProfile
            ? () => [
                <Button
                  type="primary"
                  key="primary"
                  onClick={() => {
                    setModalVisible(-1);
                    setMetod('PATCH');
                  }}
                >
                  <PlusOutlined /> <FormattedMessage id="pages.searchTable.new" />
                </Button>,
                <Button
                  color="yellow"
                  type="primary"
                  key="primary"
                  onClick={() => {
                    setModalVisible(-1);
                    setMetod('PUT');
                  }}
                >
                  <InteractionOutlined /> <FormattedMessage id="user.settings.overwrite" />
                </Button>,
              ]
            : false
        }
        request={() => {
          return getUserSettings(Number(user)).then((response) => {
            if (response.success) {
              return {
                data: createEntries(response.data),
              };
            }
            return [];
          });
        }}
        columns={columns}
      />
      <UserSettingForm
        id={modalVisible}
        visible={Number.isInteger(modalVisible)}
        onVisibleChange={(value) => {
          return value === false && setModalVisible(false);
        }}
        onFinish={async (value) => {
          const request = await setUserSettings(Number(user), method, value);

          if (request.success) {
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
