import React, { useMemo, useState, useEffect } from 'react';
import { message, Card, Spin, Row, Col } from 'antd';
import ProForm, { ProFormText, ProFormDigit } from '@ant-design/pro-form';
import ProCard from '@ant-design/pro-card';
import { useParams, history } from 'umi';
import { getCourse, updateCourse } from '@/services/escola-lms/course';
import ProFormImageUpload from '@/components/ProFormImageUpload';
import ProFormVideoUpload from '@/components/ProFormVideoUpload';
import UserSelect from '@/components/UserSelect';
import WysiwygMarkdown from '@/components/WysiwygMarkdown';
import CategoryCheckboxTree from '@/components/CategoryCheckboxTree';
import TagsInput from '@/components/TagsInput';

const categoriesArrToIds = (category: API.Category | string | number) =>
  typeof category === 'object' ? category.id : category;

const tagsArrToIds = (tag: API.Tag | string) => (typeof tag === 'object' ? tag.title : tag);

export default () => {
  const params = useParams<{ course?: string; tab?: string }>();
  const { course, tab } = params;

  const [data, setData] = useState<API.Course>();

  useEffect(() => {
    const fetch = async () => {
      const response = await getCourse(Number(course));
      if (response.success) {
        setData({
          ...response.data,
          categories: response.data.categories?.map(categoriesArrToIds),
          tags: response.data.tags?.map(tagsArrToIds),
        });
      }
    };
    fetch();
  }, [course]);

  const formProps = useMemo(
    () => ({
      // @ts-ignore
      onFinish: async (values) => {
        await updateCourse(Number(course), values);
        message.success('Saved');
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
    [course, data],
  );

  if (!data) {
    return <Spin />;
  }

  return (
    <ProCard
      title={`Course: ${data.title}`}
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
          <Row>
            <Col span={12}>
              <ProFormImageUpload
                action={`/api/courses/${course}`}
                src_name="image_url"
                form_name="image"
                getUploadedSrcField={(info) => info.file.response.data.image_url}
              />
            </Col>
            <Col span={12}>
              <ProFormVideoUpload
                action={`/api/courses/${course}`}
                src_name="video_url"
                form_name="video"
                getUploadedSrcField={(info) => info.file.response.data.video_url}
              />
            </Col>
          </Row>
        </ProForm>
      </ProCard.TabPane>
      <ProCard.TabPane key="categories" tab="Categories & Tags">
        <Row>
          <Col span={12}>
            <ProForm {...formProps}>
              <ProForm.Item label="Categories" name="categories" valuePropName="value">
                <CategoryCheckboxTree />
              </ProForm.Item>
            </ProForm>
          </Col>
          <Col span={12}>
            <ProForm {...formProps}>
              <ProForm.Item label="Tags" name="tags" valuePropName="value">
                <TagsInput />
              </ProForm.Item>
            </ProForm>
          </Col>
        </Row>
      </ProCard.TabPane>
      <ProCard.TabPane key="program" tab="Program">
        program
      </ProCard.TabPane>
    </ProCard>
  );

  return <Card></Card>;
};
