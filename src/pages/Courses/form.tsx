import React, { useMemo, useState, useEffect } from 'react';
import { message, Spin, Row, Col } from 'antd';
import ProForm, { ProFormText, ProFormDigit, ProFormSwitch } from '@ant-design/pro-form';
import ProCard from '@ant-design/pro-card';
import { useParams, history } from 'umi';
import { getCourse, updateCourse, createCourse } from '@/services/escola-lms/course';
import ProFormImageUpload from '@/components/ProFormImageUpload';
import ProFormVideoUpload from '@/components/ProFormVideoUpload';
import UserSelect from '@/components/UserSelect';
import WysiwygMarkdown from '@/components/WysiwygMarkdown';
import CategoryCheckboxTree from '@/components/CategoryCheckboxTree';
import TagsInput from '@/components/TagsInput';
import { PageContainer } from '@ant-design/pro-layout';
import ProgramForm from '@/components/ProgramForm';

const categoriesArrToIds = (category: API.Category | string | number) =>
  typeof category === 'object' ? category.id : category;

const tagsArrToIds = (tag: API.Tag | string) => (typeof tag === 'object' ? tag.title : tag);

export default () => {
  const params = useParams<{ course?: string; tab?: string }>();
  const { course, tab = 'attributes' } = params;
  const isNew = course === 'new';

  const [data, setData] = useState<API.Course>();

  useEffect(() => {
    if (course === 'new') {
      setData({});
      return;
    }
    const fetch = async () => {
      const response = await getCourse(Number(course));
      if (response.success) {
        setData({
          ...response.data,
          categories: response.data.categories?.map(categoriesArrToIds),
          tags: response.data.tags?.map(tagsArrToIds),
          summary: response.data.summary || '',
        });
      }
    };
    fetch();
  }, [course]);

  const formProps = useMemo(
    () => ({
      // @ts-ignore
      onFinish: async (values) => {
        let response: API.DefaultResponse<API.Course>;
        if (course === 'new') {
          response = await createCourse(values);
          if (response.success) {
            history.push(`/courses/${response.data.id}/attributes`);
          }
        } else {
          response = await updateCourse(Number(course), values);
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
    [course, data],
  );

  if (!data) {
    return <Spin />;
  }

  return (
    <PageContainer
      title={`Course ${data.title || 'new'} ${tab}`}
      header={{
        breadcrumb: {
          routes: [
            {
              path: 'courses',
              breadcrumbName: 'Courses',
            },
            {
              path: String(course),
              breadcrumbName: 'Form',
            },
            {
              path: String(tab),
              breadcrumbName: String(tab),
            },
          ],
        },
      }}
    >
      <ProCard
        tabs={{
          type: 'card',
          activeKey: tab,
          onChange: (key) => history.push(`/courses/${course}/${key}`),
        }}
      >
        <ProCard.TabPane key="attributes" tab="Attributes">
          <ProForm
            {...formProps}
            onValuesChange={(values) => {
              return values.title && setData({ title: values.title });
            }}
          >
            <ProForm.Group>
              <ProFormText
                width="md"
                name="title"
                label="Title"
                tooltip="Title"
                placeholder="Title"
                required
              />
              <ProFormText
                width="md"
                name="subtitle"
                label="Subtitle"
                tooltip="Subtitle"
                placeholder="Subtitle"
              />
              <ProFormText
                width="sm"
                name="language"
                label="Language"
                tooltip="Language"
                placeholder="Language"
              />
              <ProFormSwitch name="active" label="Is Active?" />
            </ProForm.Group>

            <ProForm.Group>
              <ProFormText
                width="md"
                name="duration"
                label="Duration"
                tooltip="duration"
                placeholder="duration"
              />
              <ProFormDigit
                width="md"
                name="base_price"
                label="Base Price"
                tooltip="Base Price. Use 0 for free course"
                placeholder="Base Price"
                min={0}
                max={9999}
                fieldProps={{ step: 1 }}
              />

              <ProFormText
                width="sm"
                name="level"
                label="Level"
                tooltip="Level"
                placeholder="Level"
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
              <WysiwygMarkdown directory={`course/${course}/wysiwyg`} />
            </ProForm.Item>

            <ProForm.Item
              name="description"
              label="Description"
              tooltip="The editor is WYSIWYG and includes formatting tools whilst retaining the ability to write markdown shortcuts inline and output plain Markdown."
              valuePropName="value"
            >
              <WysiwygMarkdown directory={`course/${course}/wysiwyg`} />
            </ProForm.Item>
          </ProForm>
        </ProCard.TabPane>
        {!isNew && (
          <ProCard.TabPane key="media" tab="Media">
            <ProForm {...formProps}>
              <Row>
                <Col span={12}>
                  <ProFormImageUpload
                    action={`/api/admin/courses/${course}`}
                    src_name="image_url"
                    form_name="image"
                    getUploadedSrcField={(info) => info.file.response.data.image_url}
                  />
                </Col>
                <Col span={12}>
                  <ProFormVideoUpload
                    action={`/api/admin/courses/${course}`}
                    src_name="video_url"
                    form_name="video"
                    getUploadedSrcField={(info) => info.file.response.data.video_url}
                  />
                </Col>
              </Row>
            </ProForm>
          </ProCard.TabPane>
        )}
        {!isNew && (
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
        )}
        {!isNew && (
          <ProCard.TabPane key="program" tab="Program">
            {course && <ProgramForm id={course} />}
          </ProCard.TabPane>
        )}
        {!isNew && (
          <ProCard.TabPane key="scorm" tab="Scorm">
            SCORM Select form will go here
          </ProCard.TabPane>
        )}
      </ProCard>
    </PageContainer>
  );
};
