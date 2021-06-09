import React, { useMemo } from 'react';
import { message, Divider, Card } from 'antd';
import ProForm, { ProFormText, ProFormDigit } from '@ant-design/pro-form';
import ProCard from '@ant-design/pro-card';

import { useParams } from 'umi';
import { getCourse, updateCourse } from '@/services/escola-lms/course';
import ProFormImageUpload from '@/components/ProFormImageUpload';
import ProFormVideoUpload from '@/components/ProFormVideoUpload';
import { history } from 'umi';

import UserSelect from '@/components/UserSelect';
import WysiwygMarkdown from '@/components/WysiwygMarkdown';

export default () => {
  const params = useParams<{ course?: string; tab?: string }>();
  const { course, tab } = params;

  const formProps = useMemo(
    () => ({
      // @ts-ignore
      onFinish: async (values) => {
        await updateCourse(Number(course), values);
        message.success('Saved');
      },
      request: async () => {
        const response = await getCourse(Number(course));
        if (response.success) {
          return response.data;
        }
        return {};
      },
    }),
    [course],
  );

  return (
    <ProCard
      title="Course Form"
      tabs={{
        type: 'card',
        activeKey: tab || 'attributes',
        onChange: (key) => history.push(`/courses/${course}/${key}`),
      }}
    >
      <ProCard.TabPane key="attributes" tab="Attributes">
        <ProForm {...formProps}>
          <ProForm.Group>
            <ProFormText
              width="md"
              name="title"
              label="Title"
              tooltip="Title"
              placeholder="Title"
            />
            <ProFormText
              width="md"
              name="duration"
              label="Duration"
              tooltip="duration"
              placeholder="duration"
            />
          </ProForm.Group>

          <ProForm.Group>
            <ProFormDigit
              width="md"
              name="base_price"
              label="Base Price"
              tooltip="Base Price. Use 0 for free course"
              placeholder="Base Price"
              min={0}
              max={9999}
              fieldProps={{ step: 0.01, defaultValue: 0 }}
            />
            <ProForm.Item name="author_id" label="Author/Tutor" valuePropName="value">
              <UserSelect />
            </ProForm.Item>
          </ProForm.Group>

          <ProForm.Item
            name="summary"
            label="Summary"
            tooltip="The editor is WYSIWYG and includes formatting tools whilst retaining the ability to write markdown shortcuts inline and output plain Markdown."
            valuePropName="value"
          >
            <WysiwygMarkdown />
          </ProForm.Item>
        </ProForm>
      </ProCard.TabPane>
      <ProCard.TabPane key="media" tab="Media">
        <ProForm {...formProps}>
          <ProFormImageUpload
            action={`/api/courses/${course}`}
            src_name="image_url"
            form_name="image"
            getUploadedSrcField={(info) => info.file.response.data.image_url}
          />
          <Divider />
          <ProFormVideoUpload
            action={`/api/courses/${course}`}
            src_name="video_url"
            form_name="video"
            getUploadedSrcField={(info) => info.file.response.data.video_url}
          />
        </ProForm>
      </ProCard.TabPane>
      <ProCard.TabPane key="categories" tab="Categories & Tags">
        media
      </ProCard.TabPane>
      <ProCard.TabPane key="program" tab="Program">
        program
      </ProCard.TabPane>
    </ProCard>
  );

  return <Card></Card>;
};
