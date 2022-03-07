import { useMemo, useState, useEffect, useCallback } from 'react';
import { message, Spin, Row, Col } from 'antd';
import ProForm, {
  ProFormText,
  ProFormDigit,
  ProFormDatePicker,
  ProFormCheckbox,
  ProFormSelect,
} from '@ant-design/pro-form';
import ProCard from '@ant-design/pro-card';
import { useParams, history } from 'umi';
import { getCourse, updateCourse, createCourse, CourseStatus } from '@/services/escola-lms/course';
import ProFormImageUpload from '@/components/ProFormImageUpload';
import ProFormVideoUpload from '@/components/ProFormVideoUpload';
import UserSelect from '@/components/UserSelect';
import WysiwygMarkdown from '@/components/WysiwygMarkdown';
import CategoryCheckboxTree from '@/components/CategoryCheckboxTree';
import TagsInput from '@/components/TagsInput';
import { PageContainer } from '@ant-design/pro-layout';
import ProgramForm from '@/components/ProgramForm/';
import ScormSelector from '@/components/Scorm';
import { useIntl, FormattedMessage } from 'umi';
import CourseAccess from './components/CourseAccess';
import CourseCertificateForm from './components/CourseCertificateForm';
import CourseStatistics from '@/components/CourseStatistics';
import AssignQuestionnary from '@/components/AssignQuestionnary';

const categoriesArrToIds = (category: API.Category | string | number) =>
  typeof category === 'object' ? category.id : category;

const tagsArrToIds = (tag: API.Tag | string) => (typeof tag === 'object' ? tag.title : tag);

export default () => {
  const params = useParams<{ course?: string; tab?: string }>();
  const intl = useIntl();
  const { course, tab = 'attributes' } = params;
  const isNew = course === 'new';

  const [data, setData] = useState<Partial<API.Course>>();

  useEffect(() => {
    if (course === 'new') {
      setData({
        active: true,
      });
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

  const splitPath = useCallback(
    (path: string) => {
      return path?.split('storage')[1];
    },
    [data],
  );

  const formProps = useMemo(
    () => ({
      onFinish: async (values: API.Course) => {
        const postData = {
          ...values,
          scorm_sco_id: values.scorm_sco_id ? values.scorm_sco_id : null,
          image_url: data && data.image_url,
          image_path: data && data.image_url && splitPath(data.image_url),
          video_url: data && data.video_url,
          video_path: data && data.video_url && splitPath(data.video_url),
          poster_url: data && data.poster_url,
          poster_path: data && data.poster_url && splitPath(data.poster_url),
        };
        let response: API.DefaultResponse<API.Course>;
        if (course === 'new') {
          response = await createCourse(postData);
          if (response.success) {
            history.push(`/courses/${response.data.id}/attributes`);
          }
        } else {
          response = await updateCourse(Number(course), postData);
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
      title={
        <>
          <FormattedMessage id={data.title ? 'course' : 'new_course'} />
          {', '}
          <FormattedMessage id={tab} />
        </>
      }
      header={{
        breadcrumb: {
          routes: [
            {
              path: 'courses',
              breadcrumbName: intl.formatMessage({
                id: 'menu.Courses',
              }),
            },
            {
              path: String(course),
              breadcrumbName: intl.formatMessage({
                id: 'form',
              }),
            },
            {
              path: '/',
              breadcrumbName: intl.formatMessage({
                id: String(data.title),
              }),
            },
            {
              path: String(tab),
              breadcrumbName: intl.formatMessage({
                id: String(tab),
              }),
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
        <ProCard.TabPane key="attributes" tab={<FormattedMessage id="attributes" />}>
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
                label={<FormattedMessage id="title" />}
                tooltip={<FormattedMessage id="title" />}
                placeholder={intl.formatMessage({
                  id: 'title',
                  defaultMessage: 'title',
                })}
                required
              />
              <ProFormText
                width="md"
                name="subtitle"
                label={<FormattedMessage id="subtitle" />}
                tooltip={<FormattedMessage id="subtitle" />}
                placeholder={intl.formatMessage({
                  id: 'subtitle',
                  defaultMessage: 'subtitle',
                })}
              />
              <ProFormText
                width="sm"
                name="language"
                label={<FormattedMessage id="language" />}
                tooltip={<FormattedMessage id="language" />}
                placeholder={intl.formatMessage({
                  id: 'language',
                  defaultMessage: 'language',
                })}
              />
              <ProFormSelect
                name="status"
                width="xs"
                label={<FormattedMessage id="status" />}
                valueEnum={CourseStatus}
                placeholder={intl.formatMessage({
                  id: 'status',
                })}
                rules={[{ required: true, message: <FormattedMessage id="select" /> }]}
              />
            </ProForm.Group>

            <ProForm.Group>
              <ProFormText
                width="md"
                name="duration"
                label={<FormattedMessage id="duration" />}
                tooltip={<FormattedMessage id="duration" />}
                placeholder={intl.formatMessage({
                  id: 'duration',
                  defaultMessage: 'duration',
                })}
              />
              <ProFormDigit
                width="md"
                name="base_price"
                label={<FormattedMessage id="base_price" />}
                tooltip={<FormattedMessage id="base_price_tooltip" />}
                placeholder={intl.formatMessage({
                  id: 'base_price',
                  defaultMessage: 'base_price',
                })}
                min={0}
                max={9999}
                fieldProps={{ step: 1 }}
              />

              <ProFormText
                width="xs"
                name="level"
                label={<FormattedMessage id="level" />}
                tooltip={<FormattedMessage id="level" />}
                placeholder={intl.formatMessage({
                  id: 'level',
                  defaultMessage: 'level',
                })}
              />

              <ProForm.Item
                name="authors"
                label={<FormattedMessage id="author_tutor" />}
                valuePropName="value"
              >
                <UserSelect multiple />
              </ProForm.Item>
            </ProForm.Group>
            <ProForm.Group>
              <ProFormDatePicker
                width="sm"
                name="active_from"
                label={<FormattedMessage id="active_from" />}
                tooltip={<FormattedMessage id="active_from" />}
                placeholder={intl.formatMessage({
                  id: 'active_from',
                  defaultMessage: 'active_from',
                })}
              />
              <ProFormDatePicker
                width="sm"
                name="active_to"
                label={<FormattedMessage id="active_to" />}
                tooltip={<FormattedMessage id="active_to" />}
                placeholder={intl.formatMessage({
                  id: 'active_to',
                  defaultMessage: 'active_to',
                })}
              />
              <ProFormDigit
                width="sm"
                name="hours_to_complete"
                label={<FormattedMessage id="hours_to_complete" />}
                tooltip={<FormattedMessage id="hours_to_complete" />}
                placeholder={intl.formatMessage({
                  id: 'hours_to_complete',
                  defaultMessage: 'hours_to_complete',
                })}
              />
              <ProFormCheckbox
                width="sm"
                name="purchasable"
                label={<FormattedMessage id="purchasable" />}
                tooltip={<FormattedMessage id="purchasable" />}
                placeholder={intl.formatMessage({
                  id: 'purchasable',
                  defaultMessage: 'purchasable',
                })}
              />
              <ProFormCheckbox
                width="sm"
                name="findable"
                label={<FormattedMessage id="findable" />}
                tooltip={<FormattedMessage id="findable" />}
                placeholder={intl.formatMessage({
                  id: 'findable',
                  defaultMessage: 'findable',
                })}
              />
            </ProForm.Group>

            <ProForm.Group>
              <ProFormText
                width="sm"
                name="target_group"
                label={<FormattedMessage id="target_group" />}
                tooltip={<FormattedMessage id="target_group" />}
                placeholder={intl.formatMessage({
                  id: 'target_group',
                  defaultMessage: 'target_group',
                })}
              />
            </ProForm.Group>
            <ProForm.Item
              name="summary"
              label={<FormattedMessage id="summary" />}
              tooltip={<FormattedMessage id="summary_tooltip" />}
              valuePropName="value"
            >
              <WysiwygMarkdown directory={`course/${course}/wysiwyg`} />
            </ProForm.Item>

            <ProForm.Item
              name="description"
              label={<FormattedMessage id="description" />}
              tooltip={<FormattedMessage id="description_tooltip" />}
              valuePropName="value"
            >
              <WysiwygMarkdown directory={`course/${course}/wysiwyg`} />
            </ProForm.Item>
          </ProForm>
        </ProCard.TabPane>
        {!isNew && (
          <ProCard.TabPane key="media" tab={<FormattedMessage id="media" />}>
            <ProForm {...formProps}>
              <Row>
                <Col>
                  <ProFormImageUpload
                    title="image"
                    action={`/api/admin/courses/${course}`}
                    src_name="image_url"
                    form_name="image"
                    getUploadedSrcField={(info) => info.file.response.data.image_url}
                    setPath={(removedPath) =>
                      setData((prevState) => ({
                        ...prevState,
                        ...removedPath,
                      }))
                    }
                  />
                </Col>
                <Col>
                  <ProFormVideoUpload
                    action={`/api/admin/courses/${course}`}
                    src_name="video_url"
                    form_name="video"
                    getUploadedSrcField={(info) => info.file.response.data.video_url}
                    setPath={(removedPath) =>
                      setData((prevState) => ({
                        ...prevState,
                        ...removedPath,
                      }))
                    }
                  />
                </Col>
                <Col>
                  <ProFormImageUpload
                    title="poster"
                    action={`/api/admin/courses/${course}`}
                    src_name="poster_url"
                    form_name="poster"
                    getUploadedSrcField={(info) => info.file.response.data.poster_url}
                    setPath={(removedPath) =>
                      setData((prevState) => ({
                        ...prevState,
                        ...removedPath,
                      }))
                    }
                  />
                </Col>
              </Row>
            </ProForm>
          </ProCard.TabPane>
        )}
        {!isNew && (
          <ProCard.TabPane key="categories" tab={<FormattedMessage id="categories_tags" />}>
            <Row>
              <Col span={12}>
                <ProForm {...formProps}>
                  <ProForm.Item
                    label={<FormattedMessage id="categories" />}
                    name="categories"
                    valuePropName="value"
                  >
                    <CategoryCheckboxTree />
                  </ProForm.Item>
                </ProForm>
              </Col>
              <Col span={12}>
                <ProForm {...formProps}>
                  <ProForm.Item
                    label={<FormattedMessage id="tags" />}
                    name="tags"
                    valuePropName="value"
                  >
                    <TagsInput />
                  </ProForm.Item>
                </ProForm>
              </Col>
            </Row>
          </ProCard.TabPane>
        )}
        {!isNew && (
          <ProCard.TabPane key="program" tab={<FormattedMessage id="program" />}>
            {course && <ProgramForm id={course} />}
          </ProCard.TabPane>
        )}
        {!isNew && (
          <ProCard.TabPane key="scorm" tab={<FormattedMessage id="scorm" />}>
            <ProForm {...formProps}>
              <ProForm.Item label="Scorm" name="scorm_sco_id" valuePropName="value">
                <ScormSelector />
              </ProForm.Item>
            </ProForm>
          </ProCard.TabPane>
        )}
        {!isNew && (
          <ProCard.TabPane key="access" tab={<FormattedMessage id="access" />}>
            {course && <CourseAccess id={course} />}
          </ProCard.TabPane>
        )}
        {!isNew && (
          <ProCard.TabPane key="certificates" tab={<FormattedMessage id="certificates" />}>
            {course && <CourseCertificateForm id={course} />}
          </ProCard.TabPane>
        )}

        {!isNew && (
          <ProCard.TabPane key="questionnaires" tab={<FormattedMessage id="questionnaires" />}>
            {course && <AssignQuestionnary modelType={ModelTypes.course} id={Number(course)} />}
          </ProCard.TabPane>
        )}

        {!isNew && (
          <ProCard.TabPane key="statistics" tab={<FormattedMessage id="statistics" />}>
            {course && <CourseStatistics courseId={course} />}
          </ProCard.TabPane>
        )}
      </ProCard>
    </PageContainer>
  );
};
