import React, { useMemo, useState, useEffect } from 'react';
import { message, Spin, Form, Button, Space, Typography } from 'antd';
import ProForm, { ProFormText, ProFormSwitch, ProFormCheckbox } from '@ant-design/pro-form';
import { user as fetchUser, updateUser, createUser, resendEmail } from '@/services/escola-lms/user';
import SecureUpload from '@/components/SecureUpload';
import ResponsiveImage from '@/components/ResponsiveImage';
import { useParams, history } from 'umi';
import { useCallback } from 'react';
import { useIntl, FormattedMessage } from 'umi';
import { roles as getRoles } from '@/services/escola-lms/roles';
import { configs as getConfig } from '@/services/escola-lms/settings';
import { deleteUserAvatar } from '@/services/escola-lms/user';

export default ({ isNew }: { isNew: boolean }) => {
  const intl = useIntl();
  const params = useParams<{ user?: string }>();
  const { user } = params;

  const [data, setData] = useState<Partial<API.UserItem>>();

  const [roles, setRoles] = useState<API.Role[]>();
  const [additionalRequiredFields, setAdditionalRequiredFields] = useState<string[]>([]);
  const [additionalFields, setAdditionalFields] = useState<string[]>([]);

  const fetchData = useCallback(async () => {
    const response = await fetchUser(Number(user));
    if (response.success) {
      setData({
        ...response.data,
        bio: response.data.bio || '',
      });
    }
  }, [user]);

  const fetchRoles = useCallback(async () => {
    const request = await getRoles();
    const response = await request;

    if (response.success) {
      setRoles(response.data);
    }
  }, [user]);

  const fetchFields = useCallback(async () => {
    const request = await getConfig();
    if (request.success) {
      setAdditionalRequiredFields(
        request.data.escola_auth.additional_fields_required.value as string[],
      );

      setAdditionalFields(request.data.escola_auth.additional_fields.value as string[]);
    }
  }, []);

  const onDeleteAvatar = () => {
    deleteUserAvatar(Number(user))
      .then((response) => {
        if (response.success) {
          message.success(response.message);
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
    fetchFields();
    if (isNew) {
      setData({});
      return;
    }

    fetchData();
  }, [user, fetchData]);

  const formProps = useMemo(
    () => ({
      // @ts-ignore
      onFinish: async (values) => {
        let response: API.DefaultResponse<API.UserItem>;
        const postData: Partial<API.UserItem> = {
          ...values,
          bio: values.bio ? values.bio : undefined,
        };

        if (isNew) {
          response = await createUser(postData);
          if (response.success) {
            history.push(`/users/${response.data.id}/user_info`);
          }
        } else {
          response = await updateUser(Number(user), postData);
        }

        message.success(response.message);
      },
      initialValues: data,
      /*
      request: async () => {
        const response = await getCourse(Number(course));
        if (response.success) {
          return response.data;
        }
        return {};
      },
      */
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
              .map((role: API.Role) => role.name)}
          />
        )}
      </ProForm.Group>
      <ProForm.Group>
        {additionalFields &&
          additionalFields.map((field) => {
            return (
              <ProFormText
                required={additionalRequiredFields.includes(field)}
                width="md"
                name={field}
                label={<FormattedMessage id={field} />}
                tooltip={<FormattedMessage id={field} />}
                placeholder={intl.formatMessage({
                  id: field,
                })}
              />
            );
          })}
      </ProForm.Group>

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
                <SecureUpload
                  wrapInForm={false}
                  url={`/api/admin/users/${user}/avatar`}
                  name="avatar"
                  accept="image/*"
                  onChange={(info) => {
                    if (info.file.status === 'done') {
                      if (info.file.response.success) {
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
