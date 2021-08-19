import React, { useMemo, useState, useEffect } from 'react';
import { message, Spin } from 'antd';
import ProForm, { ProFormText, ProFormSwitch, ProFormCheckbox } from '@ant-design/pro-form';
import ProCard from '@ant-design/pro-card';
import { user as fetchUser, updateUser, createUser } from '@/services/escola-lms/user';
import WysiwygMarkdown from '@/components/WysiwygMarkdown';
import { PageContainer } from '@ant-design/pro-layout';
import SecureUpload from '@/components/SecureUpload';
import ResponsiveImage from '@/components/ResponsiveImage';
import { useParams, history } from 'umi';

export default () => {
  const params = useParams<{ user?: string }>();
  const { user } = params;

  const [data, setData] = useState<Partial<API.UserItem>>();

  useEffect(() => {
    if (user === 'new') {
      setData({});
      return;
    }

    const fetch = async () => {
      const response = await fetchUser(Number(user));
      if (response.success) {
        setData({
          ...response.data,
          bio: response.data.bio || '',
        });
      }
    };
    fetch();
  }, []);

  const formProps = useMemo(
    () => ({
      // @ts-ignore
      onFinish: async (values) => {
        let response: API.DefaultResponse<API.UserItem>;
        const postData: Partial<API.UserItem> = {
          ...values,
          bio: values.bio ? values.bio : undefined,
        };

        if (user === 'new') {
          response = await createUser(postData);
          if (response.success) {
            history.push(`/users/${response.data.id}`);
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
    [data],
  );

  if (!data) {
    return <Spin />;
  }

  return (
    <PageContainer title={`User form`}>
      <ProCard>
        <ProForm {...formProps}>
          <ProForm.Group>
            <ProFormText
              width="md"
              name="first_name"
              label="First name"
              tooltip="First name"
              placeholder="First name"
              required
            />
            <ProFormText
              width="md"
              name="last_name"
              label="Last name"
              tooltip="Last name"
              placeholder="Last name"
              required
            />
            <ProFormText
              width="md"
              name="email"
              label="email"
              tooltip="email"
              placeholder="email"
              required
            />
            <ProFormSwitch name="email_verified" label="Email verified?" />
            <ProFormSwitch name="is_active" label="Is Active?" />

            <ProFormCheckbox.Group
              name="roles"
              layout="horizontal"
              label="Role"
              options={['student', 'tutor', 'admin']}
            />
          </ProForm.Group>

          <ProForm.Item
            name="bio"
            label="bio"
            tooltip="The editor is WYSIWYG and includes formatting tools whilst retaining the ability to write markdown shortcuts inline and output plain Markdown."
            valuePropName="value"
          >
            <WysiwygMarkdown directory={`users/wysiwyg`} />
          </ProForm.Item>

          <ProForm.Group>
            <ProForm.Item name="avatar" label="avatar">
              {data.path_avatar && (
                <ResponsiveImage path={data.path_avatar} size={600} width={200} />
              )}

              <SecureUpload
                wrapInForm={false}
                url="/api/profile/upload-avatar"
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
            </ProForm.Item>
          </ProForm.Group>
        </ProForm>
      </ProCard>
    </PageContainer>
  );
};
