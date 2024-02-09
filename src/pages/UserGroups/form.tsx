import {
  addUserToGroup,
  createUserGroup,
  userGroup as fetchUserGroup,
  removeUserFromGroup,
  updateUserGroup,
} from '@/services/escola-lms/user_groups';
import ProCard from '@ant-design/pro-card';
import ProForm, { ProFormSwitch, ProFormText } from '@ant-design/pro-form';
import { PageContainer } from '@ant-design/pro-layout';
import { Button, Divider, List, Spin, Typography, message } from 'antd';
import React, { useEffect, useMemo, useState } from 'react';

import { useCallback } from 'react';
import { FormattedMessage, history, useIntl, useParams } from 'umi';

import UserSelect from '@/components/UserSelect';
import { DeleteOutlined } from '@ant-design/icons';
import UserGroupSelect from '../../components/UserGroupSelect';

export default () => {
  const intl = useIntl();
  const params = useParams<{ group?: string }>();
  const { group } = params;
  const isNew = group === 'new';

  const [data, setData] = useState<Partial<API.UserGroup>>();

  const fetchData = useCallback(async () => {
    const response = await fetchUserGroup(Number(group));
    if (response.success) {
      setData({
        ...response.data,
      });
    }
  }, [group]);

  const handleDelete = useCallback(
    (user_id: number) => {
      setData((prevState) => ({
        ...prevState,
        users: prevState ? prevState?.users?.filter((user) => user.id !== user_id) : [],
      }));

      removeUserFromGroup(Number(group), user_id).then((response) => {
        if (response.success) {
          setData((prevState) => ({
            ...prevState,
            users: response.data,
          }));
        }
      });
    },
    [group],
  );

  const handleAdd = useCallback(
    (user_id: number) => {
      if (!user_id || data?.users?.find((user) => user.id === user_id)) {
        return;
      }
      addUserToGroup(Number(group), user_id).then((response) => {
        if (response.success) {
          setData((prevState) => ({
            ...prevState,
            users: response.data,
          }));
        }
      });
    },
    [data, group],
  );

  useEffect(() => {
    if (group === 'new') {
      setData({});
      return;
    }

    fetchData();
  }, [group, fetchData]);

  const formProps = useMemo(
    () => ({
      onFinish: async (values: Partial<API.UserGroup>) => {
        let response: API.DefaultResponse<API.UserGroup>;
        const postData: Partial<API.UserGroup> = {
          ...values,
        };

        if (group === 'new') {
          response = await createUserGroup(postData);
          if (response.success) {
            history.push(`/users/groups/${response.data.id}`);
          }
        } else {
          response = await updateUserGroup(Number(group), postData);
        }

        message.success(response.message);
      },
      initialValues: data,
    }),
    [data, group],
  );

  if (!data) {
    return <Spin />;
  }

  return (
    <PageContainer
      title={
        isNew ? <FormattedMessage id="new_user_group" /> : <FormattedMessage id="edit_user_group" />
      }
    >
      <ProCard>
        <ProForm {...formProps}>
          <ProForm.Group>
            <ProFormText
              width="md"
              name="name"
              label={<FormattedMessage id="name" />}
              tooltip={<FormattedMessage id="name" />}
              placeholder={intl.formatMessage({
                id: 'name',
              })}
              required
            />
            <ProForm.Item
              style={{ minWidth: '300px' }}
              name="parent_id"
              label={<FormattedMessage id="parent_id_group" defaultMessage="parent_id_group" />}
              valuePropName="value"
            >
              <UserGroupSelect />
            </ProForm.Item>
            <ProFormSwitch name="registerable" label={<FormattedMessage id="registerable" />} />
          </ProForm.Group>

          {group !== 'new' && (
            <React.Fragment>
              <ProForm.Group>
                <Typography>
                  <FormattedMessage id="add_person_to_group" defaultMessage="Add User to group" />
                </Typography>
                <UserSelect onChange={(user_id) => handleAdd(Number(user_id))} />
              </ProForm.Group>

              <Divider />

              <List
                size="small"
                itemLayout="horizontal"
                dataSource={data.users}
                renderItem={(item) => (
                  <List.Item
                    actions={[
                      <Button
                        key={'delete'}
                        onClick={() => handleDelete(item.id)}
                        type="primary"
                        icon={<DeleteOutlined />}
                        size="small"
                        danger
                      >
                        {' '}
                        <FormattedMessage id="delete" />
                      </Button>,
                    ]}
                  >
                    {item.first_name} {item.last_name} <small>{item.email}</small>
                  </List.Item>
                )}
              />
            </React.Fragment>
          )}

          <Divider />
        </ProForm>
      </ProCard>
    </PageContainer>
  );
};
