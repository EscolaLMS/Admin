import { useMemo, useState, useEffect } from 'react';
import { message, Spin, Row, Col, Alert, Button } from 'antd';
import ProForm, {
  ProFormText,
  ProFormDigit,
  ProFormDatePicker,
  ProFormSelect,
} from '@ant-design/pro-form';
import ProCard from '@ant-design/pro-card';
import {
  useParams,
  history,
  useIntl,
  FormattedMessage,
  useAccess,
  useModel,
  getLocale,
  getAllLocales,
} from 'umi';
import { getCourse, updateCourse, createCourse } from '@/services/escola-lms/course';
import ProFormImageUpload from '@/components/ProFormImageUpload';
import ProFormVideoUpload from '@/components/ProFormVideoUpload';
import UserSelect from '@/components/UserSelect';
import WysiwygMarkdown from '@/components/WysiwygMarkdown';
import CategoryCheckboxTree from '@/components/CategoryCheckboxTree';
import TagsInput from '@/components/TagsInput';
import { PageContainer } from '@ant-design/pro-layout';
import ProgramForm from '@/components/ProgramForm/';
import ScormSelector from '@/components/Scorm';
import CourseAccess from './components/CourseAccess';
import CourseCertificateForm from './components/CourseCertificateForm';
import CourseStatistics from '@/components/CourseStatistics';
import { categoriesArrToIds, splitImagePath, tagsArrToIds } from '@/utils/utils';
import UnsavedPrompt from '@/components/UnsavedPrompt';
import AssignQuestionnary from '@/components/AssignQuestionnary';
import { ModelTypes } from '../Questionnaire/form';
import useValidateFormEdit from '@/hooks/useValidateFormEdit';
import EditValidateModal from '@/components/EditValidateModal';
import ProductWidget from '@/components/ProductWidget';
import UserSubmissions from '@/components/UsersSubmissions';
import { CourseSuccessModal } from '@/pages/Courses/components/CourseSuccessModal';
import { isAfter } from 'date-fns';

export default () => {
  const params = useParams<{ course?: string; tab?: string }>();
  const intl = useIntl();
  const { course, tab = 'attributes' } = params;
  const isNew = course === 'new';
  const access = useAccess();
  const [data, setData] = useState<Partial<API.Course>>();
  const [unsavedChanges, setUnsavedChanges] = useState(false);
  const { manageCourseEdit, setManageCourseEdit, validateCourseEdit } = useValidateFormEdit();
  const [fromDateValidation, setFromDateValidation] = useState(null);
  const [manageSuccessModal, setManageSuccessModal] = useState({
    showModal: false,
    courseId: 0,
  });

  const locales: string[] = getAllLocales() || [];

  const { setInitialState, initialState } = useModel('@@initialState');

  useEffect(() => {
    setInitialState({
      ...initialState,
      collapsed: true,
    });
  }, []);

  useEffect(() => {
    if (course === 'new') {
      setData({
        title: 'new',
      });
      return;
    }

    const fetch = async () => {
      const response = await getCourse(Number(course));

      if (response.success) {
        if (tab === 'attributes') {
          validateCourseEdit(response.data);
        }

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
      onFinish: async (values: API.Course) => {
        if (manageCourseEdit.disableEdit) {
          setManageCourseEdit({
            showModal: true,
            disableEdit: true,
            clicked: false,
          });
          return;
        }

        const postData = {
          ...values,
          authors:
            values.authors &&
            values.authors.map((author) => (typeof author === 'object' ? author.id : author)),
          scorm_sco_id: values.scorm_sco_id ? values.scorm_sco_id : null,
          image_url: data && data.image_url,
          image_path: data && data.image_url && splitImagePath(data.image_url),
          video_url: data && data.video_url,
          video_path: data && data.video_url && splitImagePath(data.video_url),
          poster_url: data && data.poster_url,
          poster_path: data && data.poster_url && splitImagePath(data.poster_url),
        };

        let response: API.DefaultResponse<API.Course>;
        if (course === 'new') {
          response = await createCourse(postData);
          if (response.success && response.data.id) {
            setUnsavedChanges(false);
            setManageSuccessModal({
              showModal: true,
              courseId: response.data.id,
            });
          }
        } else {
          response = await updateCourse(Number(course), postData);
          if (response.success) {
            setUnsavedChanges(false);
            validateCourseEdit(response.data);
            history.push(`/courses/list/${response.data.id}/attributes`);
          }
        }
        message.success(response.message);
      },
      initialValues: data,
    }),
    [course, data, manageCourseEdit],
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
              path: 'courses/list',
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
              breadcrumbName: String(data.title),
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
        bodyStyle={{ padding: '24px' }}
        tabs={{
          type: 'card',
          activeKey: tab,
          onChange: (key) => history.push(`/courses/list/${course}/${key}`),
        }}
      >
        <ProCard.TabPane key="attributes" tab={<FormattedMessage id="attributes" />}>
          {manageCourseEdit.disableEdit && (
            <Alert
              closable
              style={{ marginBottom: '20px' }}
              type="warning"
              message={
                <FormattedMessage
                  id="course_edit_warning_message"
                  defaultMessage="course_edit_warning_message"
                />
              }
              action={
                <Button
                  onClick={() =>
                    setManageCourseEdit({
                      showModal: true,
                      disableEdit: true,
                      clicked: true,
                    })
                  }
                  type="primary"
                >
                  <FormattedMessage
                    id="questionnaire.submit"
                    defaultMessage="questionnaire.submit"
                  />
                </Button>
              }
            />
          )}
          <UnsavedPrompt show={unsavedChanges} />
          <EditValidateModal visible={manageCourseEdit.showModal} setManage={setManageCourseEdit} />
          <CourseSuccessModal
            visible={manageSuccessModal.showModal}
            handleOk={() => {
              history.push(`/courses/list/${manageSuccessModal.courseId}/program`);
            }}
            handleCancel={() =>
              history.push(`/courses/list/${manageSuccessModal.courseId}/attributes`)
            }
          />
          <ProForm
            {...formProps}
            onValuesChange={(values) => {
              setUnsavedChanges(true);

              if (values.active_from) {
                setFromDateValidation(values.active_from);
              }
              return values.title && setData({ title: values.title });
            }}
          >
            <ProForm.Group label={<FormattedMessage id="description" />}>
              <ProFormText
                width="xl"
                name="title"
                label={<FormattedMessage id="title" />}
                tooltip={<FormattedMessage id="title" />}
                placeholder={intl.formatMessage({
                  id: 'title',
                  defaultMessage: 'title',
                })}
                required
                disabled={manageCourseEdit.disableEdit}
              />
              <ProFormText
                width="xl"
                name="subtitle"
                label={<FormattedMessage id="subtitle" />}
                tooltip={<FormattedMessage id="subtitle" />}
                placeholder={intl.formatMessage({
                  id: 'subtitle',
                  defaultMessage: 'subtitle',
                })}
                disabled={manageCourseEdit.disableEdit}
              />
              <ProForm.Item
                name="summary"
                label={<FormattedMessage id="summary" />}
                tooltip={<FormattedMessage id="summary_tooltip" />}
                valuePropName="value"
                style={{
                  width: 697,
                }}
              >
                <WysiwygMarkdown directory={`course/${course}/wysiwyg`} />
              </ProForm.Item>
              <ProForm.Item
                name="description"
                label={<FormattedMessage id="description" />}
                tooltip={<FormattedMessage id="description_tooltip" />}
                valuePropName="value"
                style={{
                  width: 697,
                }}
              >
                <WysiwygMarkdown directory={`course/${course}/wysiwyg`} />
              </ProForm.Item>
            </ProForm.Group>
            <ProForm.Group label={<FormattedMessage id="duration" />}>
              <ProFormDatePicker
                width="md"
                name="active_from"
                label={<FormattedMessage id="active_from" />}
                tooltip={<FormattedMessage id="active_from" />}
                placeholder={intl.formatMessage({
                  id: 'active_from',
                  defaultMessage: 'active_from',
                })}
                disabled={manageCourseEdit.disableEdit}
                extra={<FormattedMessage id="active_from_extra" />}
                rules={[
                  {
                    required: true,
                    message: <FormattedMessage id="templates.this_required" />,
                  },
                ]}
              />
              <ProFormDatePicker
                width="md"
                name="active_to"
                label={<FormattedMessage id="active_to" />}
                tooltip={<FormattedMessage id="active_to" />}
                placeholder={intl.formatMessage({
                  id: 'active_to',
                  defaultMessage: 'active_to',
                })}
                disabled={manageCourseEdit.disableEdit || !fromDateValidation}
                extra={<FormattedMessage id="active_to_extra" />}
                rules={[
                  {
                    required: true,
                    message: <FormattedMessage id="templates.this_required" />,
                  },
                  {
                    validator(_, value) {
                      if (value) {
                        if (
                          fromDateValidation &&
                          isAfter(new Date(value), new Date(fromDateValidation))
                        ) {
                          return Promise.resolve();
                        } else {
                          return Promise.reject(
                            new Error(intl.formatMessage({ id: 'invalidDate' })),
                          );
                        }
                      } else {
                        return Promise.reject();
                      }
                    },
                  },
                ]}
              />
              <ProFormText
                width="md"
                name="duration"
                label={<FormattedMessage id="duration" />}
                tooltip={<FormattedMessage id="duration" />}
                placeholder={intl.formatMessage({
                  id: 'duration',
                  defaultMessage: 'duration',
                })}
                disabled={manageCourseEdit.disableEdit}
                extra={<FormattedMessage id="duration_extra" />}
              />

              <ProFormDigit
                width="md"
                name="hours_to_complete"
                label={<FormattedMessage id="hours_to_complete" />}
                tooltip={<FormattedMessage id="hours_to_complete" />}
                placeholder={intl.formatMessage({
                  id: 'hours_to_complete',
                  defaultMessage: 'hours_to_complete',
                })}
                disabled={manageCourseEdit.disableEdit}
              />
            </ProForm.Group>
            <ProForm.Group label={<FormattedMessage id="additional" />}>
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

              <ProFormSelect
                name="language"
                width="xs"
                label={<FormattedMessage id="language" />}
                placeholder={intl.formatMessage({
                  id: 'language',
                  defaultMessage: 'language',
                })}
                valueEnum={locales
                  .map((locale) => locale.split('-')[0])
                  .reduce((a, v) => ({ ...a, [v]: v }), {})}
                initialValue={getLocale().split('-')[0]}
                disabled={manageCourseEdit.disableEdit}
              />

              <ProFormSelect
                name="status"
                width="md"
                label={<FormattedMessage id="status" />}
                valueEnum={{
                  draft: intl.formatMessage({
                    id: 'draft',
                    defaultMessage: 'draft',
                  }),
                  published: intl.formatMessage({
                    id: 'published',
                    defaultMessage: 'published',
                  }),
                  archived: intl.formatMessage({
                    id: 'archived',
                    defaultMessage: 'archived',
                  }),
                  published_unactivated: intl.formatMessage({
                    id: 'published_unactivated',
                    defaultMessage: 'published_unactivated',
                  }),
                }}
                initialValue={{
                  draft: intl.formatMessage({
                    id: 'draft',
                    defaultMessage: 'draft',
                  }),
                }}
                placeholder={intl.formatMessage({
                  id: 'status',
                })}
                disabled={manageCourseEdit.disableEdit}
                rules={[{ required: true, message: <FormattedMessage id="select" /> }]}
              />
              <ProFormText
                width="sm"
                name="target_group"
                label={<FormattedMessage id="target_group" />}
                tooltip={<FormattedMessage id="target_group" />}
                placeholder={intl.formatMessage({
                  id: 'target_group',
                  defaultMessage: 'target_group',
                })}
                disabled={manageCourseEdit.disableEdit}
              />
              <ProForm.Item
                name="authors"
                label={<FormattedMessage id="author_tutor" />}
                valuePropName="value"
              >
                <UserSelect multiple />
              </ProForm.Item>
              {/* TODO: remove it if you are sure it is not needed on the backend */}
              {/* <ProFormCheckbox
                width="sm"
                name="purchasable"
                label={<FormattedMessage id="purchasable" />}
                tooltip={<FormattedMessage id="purchasable" />}
                placeholder={intl.formatMessage({
                  id: 'purchasable',
                  defaultMessage: 'purchasable',
                })}
                disabled={manageCourseEdit.disableEdit}
              /> */}
              {/* TODO: remove it if you are sure it is not needed on the backend */}
              {/* <ProFormCheckbox
                width="sm"
                name="findable"
                label={<FormattedMessage id="findable" />}
                tooltip={<FormattedMessage id="findable" />}
                placeholder={intl.formatMessage({
                  id: 'findable',
                  defaultMessage: 'findable',
                })}
                disabled={manageCourseEdit.disableEdit}
              /> */}
            </ProForm.Group>
          </ProForm>
        </ProCard.TabPane>
        {!isNew && (
          <ProCard.TabPane
            key="product"
            tab={<FormattedMessage id="product" />}
            disabled={manageCourseEdit.disableEdit}
          >
            {course && (
              <ProductWidget
                productable={{
                  class_type: 'App\\Models\\Course',
                  class_id: course,
                  name: String(data.title),
                  quantity: 1,
                }}
              />
            )}
          </ProCard.TabPane>
        )}
        {!isNew && (
          <ProCard.TabPane
            key="media"
            tab={<FormattedMessage id="media" />}
            disabled={manageCourseEdit.disableEdit}
          >
            <ProForm {...formProps}>
              <Row>
                <Col>
                  <ProFormImageUpload
                    folder={`course/${course}`}
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
                    folder={`course/${course}`}
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
                    folder={`course/${course}`}
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
          <ProCard.TabPane
            key="categories"
            tab={<FormattedMessage id="categories_tags" />}
            disabled={manageCourseEdit.disableEdit}
          >
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
          <ProCard.TabPane
            className="program"
            key="program"
            tab={<FormattedMessage id="program" />}
            disabled={manageCourseEdit.disableEdit}
            cardProps={{
              bodyStyle: {
                padding: 0,
              },
            }}
          >
            {course && <ProgramForm id={course} />}
          </ProCard.TabPane>
        )}
        {!isNew && access.scormListPermission && (
          <ProCard.TabPane
            key="scorm"
            tab={<FormattedMessage id="scorm" />}
            disabled={manageCourseEdit.disableEdit}
          >
            <ProForm {...formProps}>
              <ProForm.Item label="Scorm" name="scorm_sco_id" valuePropName="value">
                <ScormSelector />
              </ProForm.Item>
            </ProForm>
          </ProCard.TabPane>
        )}
        {!isNew && (
          <ProCard.TabPane
            key="access"
            tab={<FormattedMessage id="access" />}
            disabled={manageCourseEdit.disableEdit}
          >
            {course && <CourseAccess id={course} />}
          </ProCard.TabPane>
        )}
        {!isNew && (
          <ProCard.TabPane
            key="certificates"
            tab={<FormattedMessage id="certificates" />}
            disabled={manageCourseEdit.disableEdit}
          >
            {course && <CourseCertificateForm id={course} />}
          </ProCard.TabPane>
        )}

        {!isNew && (
          <ProCard.TabPane
            key="questionnaires"
            tab={<FormattedMessage id="questionnaires" />}
            disabled={manageCourseEdit.disableEdit}
          >
            {course && <AssignQuestionnary modelType={ModelTypes.course} id={Number(course)} />}
          </ProCard.TabPane>
        )}

        {!isNew && (
          <ProCard.TabPane
            key="statistics"
            tab={<FormattedMessage id="statistics" />}
            disabled={manageCourseEdit.disableEdit}
          >
            {course && <CourseStatistics courseId={course} />}
          </ProCard.TabPane>
        )}
        {!isNew && (
          <ProCard.TabPane
            key="user_submission"
            tab={<FormattedMessage id="user_submission" />}
            disabled={manageCourseEdit.disableEdit}
          >
            <Row>
              <Col span={12}>
                {course && <UserSubmissions id={Number(course)} type="App\Models\Course" />}
              </Col>
            </Row>
          </ProCard.TabPane>
        )}
      </ProCard>
    </PageContainer>
  );
};
