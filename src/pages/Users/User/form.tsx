import React, { useMemo, useState, useEffect } from 'react';
import { message, Spin, Form, Button, Space, Typography, Divider } from 'antd';
import ProForm, { ProFormText, ProFormSwitch, ProFormCheckbox } from '@ant-design/pro-form';
import { updateUser, createUser, resendEmail } from '@/services/escola-lms/user';
import SecureUploadBrowser from '@/components/SecureUpload/browser';
import ResponsiveImage from '@/components/ResponsiveImage';
import { useParams, history } from 'umi';
import { useCallback } from 'react';
import { useIntl, FormattedMessage } from 'umi';
import { roles as getRoles } from '@/services/escola-lms/roles';
import { deleteUserAvatar } from '@/services/escola-lms/user';
import useModelFields from '@/hooks/useModelFields';
import AdditionalField from './components/AdditionalField';
declare const REACT_APP_MULTIPLE_ROLES: string;

export default ({
  isNew,
  data,
  setData,
}: {
  isNew: boolean;
  data: Partial<API.UserItem> | undefined;
  setData: (data: Partial<API.UserItem>) => void;
}) => {
  const intl = useIntl();
  const params = useParams<{ user?: string }>();
  const { user } = params;
  const additionalFields = useModelFields('EscolaLms\\Auth\\Models\\User');
  const [roles, setRoles] = useState<API.Role[]>();

  const fetchRoles = useCallback(async () => {
    const request = await getRoles();
    const response = await request;

    if (response.success) {
      setRoles(response.data);
    }
  }, [user]);

  const onDeleteAvatar = () => {
    deleteUserAvatar(Number(user))
      .then((response) => {
        if (response.success) {
          message.success(response.message);
          // @ts-ignore
          setData((prevState) => ({
            ...prevState,
            avatar: '',
            path_avatar: '',
          }));
        }
      })
      .catch((error: any) => {
        message.error(error.data.message);
      });
  };

  useEffect(() => {
    fetchRoles();
  }, [user]);

  const formProps = useMemo(
    () => ({
      onFinish: async (values: Partial<API.UserItem>) => {
        let response: API.DefaultResponse<API.UserItem>;

        const postData: Partial<API.UserItem> = {
          ...values,
        };

        if (isNew) {
          response = await createUser(postData);
          if (response.success) {
            history.push(`/users/${response.data.id}/user_info`);
          }
        } else {
          response = await updateUser(Number(user), postData);

          if (response.success) {
            setData(response.data);
          }
        }

        message.success(response.message);
      },
      initialValues: data,
    }),
    [data, user],
  );

  if (!data) {
    return <Spin />;
  }

  return (
    <ProForm {...formProps}>
      <ProForm.Group>
        <ProFormText
          width="md"
          name="first_name"
          label={<FormattedMessage id="first_name" />}
          tooltip={<FormattedMessage id="first_name" />}
          placeholder={intl.formatMessage({
            id: 'first_name',
          })}
          required
        />
        <ProFormText
          width="md"
          name="last_name"
          label={<FormattedMessage id="last_name" />}
          tooltip={<FormattedMessage id="last_name" />}
          placeholder={intl.formatMessage({
            id: 'last_name',
          })}
          required
        />
        <ProFormText
          width="md"
          name="email"
          label={<FormattedMessage id="email" />}
          tooltip={<FormattedMessage id="email" />}
          placeholder={intl.formatMessage({
            id: 'email',
          })}
          required
        />
        <ProFormText.Password
          width="md"
          name="password"
          label={<FormattedMessage id="password" />}
          tooltip={<FormattedMessage id="password" />}
          placeholder={intl.formatMessage({
            id: 'password',
          })}
          required={isNew}
        />
        {additionalFields.state === 'loaded' &&
          additionalFields.list.map((field: API.ModelField) => (
            <AdditionalField key={field.id} field={field} />
          ))}
      </ProForm.Group>
      <ProForm.Group>
        {!isNew && (
          <Space direction="vertical">
            {/* if he is an admin, do not display the switch */}
            {!data.roles?.includes('admin') && (
              <ProFormSwitch
                initialValue={data.is_active}
                name="email_verified"
                label={<FormattedMessage id="is_email_verified" />}
              />
            )}

            <Form.Item noStyle shouldUpdate>
              {(form) => {
                return form.getFieldValue('email_verified') ? (
                  <React.Fragment />
                ) : (
                  <Button
                    size="small"
                    onClick={() => {
                      resendEmail(form.getFieldValue('email')).then(() => {
                        message.success(
                          intl.formatMessage({
                            id: 'email_resend',
                          }),
                        );
                      });
                    }}
                  >
                    <FormattedMessage id="resend" />
                  </Button>
                );
              }}
            </Form.Item>
          </Space>
        )}

        <ProFormSwitch name="is_active" label={<FormattedMessage id="is_active" />} />

        {roles && (
          <ProFormCheckbox.Group
            name="roles"
            layout="horizontal"
            label={<FormattedMessage id="roles" />}
            options={roles
              .filter((role: API.Role) => role.guard_name !== 'web')
              .map((role: API.Role) => ({
                label: role.name,
                value: role.name,
                ...(REACT_APP_MULTIPLE_ROLES === 'false' && {
                  disabled: data.roles && data.roles?.length > 0 && data.roles[0] !== role.name,
                }),
              }))}
          />
        )}
      </ProForm.Group>
      <Divider />
      {!isNew && (
        <ProForm.Group>
          <ProForm.Item name="avatar" label={<FormattedMessage id="avatar" />}>
            {data.path_avatar ? (
              <ResponsiveImage path={data.path_avatar} size={600} width={200} />
            ) : (
              <Typography>
                <FormattedMessage id="avatar_placeholder" />
              </Typography>
            )}
          </ProForm.Item>
          <Form.Item noStyle shouldUpdate>
            {() => (
              <>
                <SecureUploadBrowser
                  folder={`avatars/${user}`}
                  wrapInForm={false}
                  url={`/api/admin/users/${user}/avatar`}
                  name="avatar"
                  accept="image/*"
                  onChange={(info) => {
                    if (info.file.status === 'done') {
                      if (info.file.response && info.file.response.success) {
                        setData(info.file.response.data);
                      }
                    }
                  }}
                />
                <Button danger onClick={onDeleteAvatar}>
                  <FormattedMessage id="delete" />
                </Button>
              </>
            )}
          </Form.Item>
        </ProForm.Group>
      )}
    </ProForm>
  );
};
