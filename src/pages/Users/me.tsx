import React, { useMemo, useState, useEffect } from 'react';
import { message, Spin } from 'antd';
import ProForm, { ProFormText } from '@ant-design/pro-form';
import ProCard from '@ant-design/pro-card';
import { profile, updateProfile } from '@/services/escola-lms/user';
import WysiwygMarkdown from '@/components/WysiwygMarkdown';
import { PageContainer } from '@ant-design/pro-layout';
import SecureUpload from '@/components/SecureUpload';
import ResponsiveImage from '@/components/ResponsiveImage';

export default () => {
  // const params = useParams<{ course?: string; tab?: string }>();
  // const { course, tab = 'attributes' } = params;
  // const isNew = course === 'new';

  const [data, setData] = useState<API.UserItem>();

  useEffect(() => {
    /*
    if (course === 'new') {
      setData({});
      return;
    }
    */
    const fetch = async () => {
      const response = await profile();
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
        // let response: API.DefaultResponse<API.UserItem>;
        const response: API.DefaultResponse<API.UserItem> = await updateProfile(values);
        message.success(response.message);
        /*
        if (course === 'new') {
          response = await createCourse(values);
          if (response.success) {
            history.push(`/courses/${response.data.id}/attributes`);
          }
        } else {
          response = await updateCourse(Number(course), values);
        }
        */
        // message.success(response.message);
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
              label="first_name"
              tooltip="first_name"
              placeholder="first_name"
              required
            />
            <ProFormText
              width="md"
              name="last_name"
              label="last_name"
              tooltip="last_name"
              placeholder="last_name"
              required
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
