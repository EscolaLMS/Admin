import AssignQuestionnary, { ModelTypes } from '@/components/AssignQuestionnary';
import CategoryCheckboxTree from '@/components/CategoryCheckboxTree';
import ConfirmModal from '@/components/ConfirmModal';
import CourseStatistics from '@/components/CourseStatistics';
import EditValidateModal from '@/components/EditValidateModal';
import JsonEditor from '@/components/JsonEditor';
import ProFormImageUpload from '@/components/ProFormImageUpload';
import ProFormVideoUpload from '@/components/ProFormVideoUpload';
import ProductWidget from '@/components/ProductWidget';
import ProgramForm from '@/components/ProgramForm/';
import { ProjectsList } from '@/components/ProjectsList';
import ScormSelector from '@/components/Scorm';
import TagsInput from '@/components/TagsInput';
import UserSelect from '@/components/UserSelect';
import UserSubmissions from '@/components/UsersSubmissions';
import WysiwygMarkdown from '@/components/WysiwygMarkdown';
import { useShowNotification } from '@/hooks/useMessage';
import useValidateFormEdit from '@/hooks/useValidateFormEdit';
import { CourseSuccessModal } from '@/pages/Courses/components/CourseSuccessModal';
import { createCourse, getCourse, updateCourse } from '@/services/escola-lms/course';
import { categoriesArrToIds, splitImagePath, tagsArrToIds } from '@/utils/utils';
import ProCard from '@ant-design/pro-card';
import ProForm, {
  ProFormDatePicker,
  ProFormDigit,
  ProFormSelect,
  ProFormSwitch,
  ProFormText,
} from '@ant-design/pro-form';
import { PageContainer } from '@ant-design/pro-layout';
import { Alert, Button, Col, Row, Spin } from 'antd';
import { isAfter, isBefore } from 'date-fns';
import { useEffect, useMemo, useState } from 'react';
import {
  FormattedMessage,
  getAllLocales,
  getLocale,
  history,
  useAccess,
  useIntl,
  useModel,
  useParams,
} from 'umi';
import CourseAccess from './components/CourseAccess';
import CourseCertificateForm from './components/CourseCertificateForm';

enum TabNames {
  ATTRIBUTES = 'attributes',
  PRODUCT = 'product',
  MEDIA = 'media',
  USER_SUBMISSION = 'user_submission',
  CATEGORIES = 'categories',
  PROGRAM = 'program',
  SCORM = 'scorm',
  ACCESS = 'access',
  CERTIFICATES = 'certificates',
  QUESTIONNAIRES = 'questionnaires',
  STATISTICS = 'statistics',
  USER_PROJECTS = 'user_projects',
}

export default () => {
  const params = useParams<{ course?: string; tab?: string }>();
  const intl = useIntl();
  const { course, tab = TabNames.ATTRIBUTES } = params;
  const isNew = course === 'new';
  const access = useAccess();
  const [data, setData] = useState<Partial<API.Course>>();
  const { manageCourseEdit, setManageCourseEdit, validateCourseEdit } = useValidateFormEdit();
  const [fromDateValidation, setFromDateValidation] = useState<Date | undefined | null>(null);
  const [toDateValidation, setToDateValidation] = useState<Date | undefined | null>(null);
  const [manageSuccessModal, setManageSuccessModal] = useState({
    showModal: false,
    courseId: 0,
  });
  const [isFirstTimeEdit, setIsFirstTimeEdit] = useState(true);
  const { showNotification } = useShowNotification();
  const locales: string[] = getAllLocales() || [];

  const { setInitialState, initialState } = useModel('@@initialState');
  const [form] = ProForm.useForm();

  const showPublicSwitch =
    initialState?.config?.find((item) => item.key === 'showInCourseAdditionalSettings-public')
      ?.data ?? false;

  const tabsToHide: Record<string, boolean> =
    initialState?.config
      ?.filter((item) => item.key.includes('hideInCourseTabs'))
      ?.reduce((acc: Record<string, boolean>, { key, data: settingValue }) => {
        acc[key.split('-')[1]] = settingValue;
        return acc;
      }, {}) ?? {};

  useEffect(() => {
    if (tab === TabNames.ATTRIBUTES && data && isFirstTimeEdit) {
      validateCourseEdit(data);
      setIsFirstTimeEdit(false);
    }
  }, [data, tab, isFirstTimeEdit]);

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
        setData({
          ...response.data,
          categories: response.data.categories?.map(categoriesArrToIds),
          tags: response.data.tags?.map(tagsArrToIds),
          summary: response.data.summary || '',
        });

        setFromDateValidation(response.data.active_from);
        setToDateValidation(response.data.active_to);
      }
    };
    fetch();
  }, [course]);

  const formProps = useMemo(
    () => ({
      onValuesChange: (values: API.Course) => {
        setManageCourseEdit({
          ...manageCourseEdit,
          valuesChanged: true,
        });

        if (values.active_from) {
          setFromDateValidation(values.active_from);
        }

        if (values.active_to) {
          setToDateValidation(values.active_to);
        }
        return values.title && setData({ title: values.title });
      },
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
          active_from: values.active_from || data?.active_from || null,
          active_to: values.active_to || data?.active_to || null,
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
          hours_to_complete: values.hours_to_complete || null,
        };

        let response: API.DefaultResponse<API.Course>;
        if (course === 'new') {
          response = await createCourse(postData);
          if (response.success && response.data.id) {
            setManageSuccessModal({
              showModal: true,
              courseId: response.data.id,
            });
          }
        } else {
          response = await updateCourse(Number(course), postData);
        }

        showNotification(response);

        setManageCourseEdit({
          ...manageCourseEdit,
          showConfirmModal: false,
          loading: false,
          valuesChanged: false,
        });
      },
      initialValues: data,
      validate: true,
      form,
    }),
    [course, data, manageCourseEdit, form],
  );

  const currentLocales = useMemo(() => {
    const l = locales
      .map((locale) => locale.split('-')[0])
      .reduce((a, v) => ({ ...a, [v]: v }), {});

    const additionalLocales = JSON.parse(
      initialState?.config?.find((e) => e.key === 'locales')?.value || '{}',
    );

    if (additionalLocales) {
      return { ...l, ...additionalLocales };
    }
    return l;
  }, [locales]);

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
              breadcrumbName: intl.formatMessage({ id: tab, defaultMessage: String(tab) }),
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
          onChange: (key) => {
            setInitialState({
              ...initialState,
              collapsed: key === 'program',
            });
            if (key !== TabNames.ATTRIBUTES && manageCourseEdit.valuesChanged) {
              setManageCourseEdit({
                ...manageCourseEdit,
                showConfirmModal: true,
              });
            } else {
              history.push(`/courses/list/${course}/${key}`);
            }
          },
        }}
      >
        <ProCard.TabPane key={TabNames.ATTRIBUTES} tab={<FormattedMessage id="attributes" />}>
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
          <ProForm {...formProps}>
            <ProForm.Group label={<FormattedMessage id="description" />}>
              <ProFormText
                width="xl"
                name="title"
                label={<FormattedMessage id="title" />}
                tooltip={<FormattedMessage id="courses.tooltips.title" />}
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
                tooltip={<FormattedMessage id="courses.tooltips.subtitle" />}
                placeholder={intl.formatMessage({
                  id: 'subtitle',
                  defaultMessage: 'subtitle',
                })}
                disabled={manageCourseEdit.disableEdit}
              />
              <ProForm.Item
                name="summary"
                label={<FormattedMessage id="summary" />}
                tooltip={<FormattedMessage id="courses.tooltips.summary" />}
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
                tooltip={<FormattedMessage id="courses.tooltips.description" />}
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
                tooltip={<FormattedMessage id="courses.tooltips.active_from" />}
                placeholder={intl.formatMessage({
                  id: 'active_from',
                  defaultMessage: 'active_from',
                })}
                rules={[
                  {
                    validator: (_, value) => {
                      if (
                        value &&
                        toDateValidation &&
                        isAfter(new Date(value), new Date(toDateValidation))
                      ) {
                        return Promise.reject(new Error(intl.formatMessage({ id: 'invalidDate' })));
                      }

                      return Promise.resolve();
                    },
                  },
                ]}
                disabled={manageCourseEdit.disableEdit}
              />
              <ProFormDatePicker
                width="md"
                name="active_to"
                label={<FormattedMessage id="active_to" />}
                tooltip={<FormattedMessage id="courses.tooltips.active_to" />}
                placeholder={intl.formatMessage({
                  id: 'active_to',
                  defaultMessage: 'active_to',
                })}
                disabled={manageCourseEdit.disableEdit || !fromDateValidation}
                rules={[
                  {
                    validator(_, value) {
                      if (
                        value &&
                        fromDateValidation &&
                        isBefore(new Date(value), new Date(fromDateValidation))
                      ) {
                        return Promise.reject(new Error(intl.formatMessage({ id: 'invalidDate' })));
                      }

                      return Promise.resolve();
                    },
                  },
                ]}
              />
              <ProFormText
                width="md"
                name="duration"
                label={<FormattedMessage id="duration" />}
                tooltip={<FormattedMessage id="courses.tooltips.duration" />}
                placeholder={intl.formatMessage({
                  id: 'duration',
                  defaultMessage: 'duration',
                })}
                disabled={manageCourseEdit.disableEdit}
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
              {showPublicSwitch && (
                <ProFormSwitch
                  width="xs"
                  name="public"
                  label={<FormattedMessage id="public_label" />}
                  tooltip={<FormattedMessage id="public_tooltip" />}
                  placeholder={intl.formatMessage({
                    id: 'public',
                    defaultMessage: 'public',
                  })}
                />
              )}
              <ProFormText
                width="xs"
                name="level"
                label={<FormattedMessage id="level" />}
                tooltip={<FormattedMessage id="courses.tooltips.level" />}
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
                valueEnum={currentLocales}
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
                placeholder={intl.formatMessage({
                  id: 'status',
                })}
                disabled={manageCourseEdit.disableEdit}
                rules={[
                  {
                    required: true,
                    message: <FormattedMessage id="select" />,
                    validator: (_, value) => {
                      if (!value) {
                        return Promise.reject(new Error(intl.formatMessage({ id: 'select' })));
                      }
                      return Promise.resolve();
                    },
                  },
                ]}
              />
              <ProFormText
                width="sm"
                name="target_group"
                label={<FormattedMessage id="target_group" />}
                tooltip={<FormattedMessage id="courses.tooltips.target_group" />}
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
              {/* TODO: #1032 remove it if you are sure it is not needed on the backend */}
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
              {/* TODO: #1033 remove it if you are sure it is not needed on the backend */}
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
            <ProForm.Item
              name="fields"
              label={<FormattedMessage id="course_fields" />}
              valuePropName="value"
            >
              <JsonEditor />
            </ProForm.Item>
          </ProForm>
        </ProCard.TabPane>
        {!isNew && access.salesPermission && (
          <ProCard.TabPane
            key={TabNames.PRODUCT}
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
            key={TabNames.MEDIA}
            tab={<FormattedMessage id="media" />}
            disabled={manageCourseEdit.disableEdit}
          >
            <ProForm {...formProps} layout="horizontal">
              <Row>
                <Col span={24}>
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
                    hideLabel
                  />
                </Col>
                <Col span={24}>
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
                    hideLabel
                  />
                </Col>
                <Col span={24}>
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
                    hideLabel
                  />
                </Col>
              </Row>
            </ProForm>
          </ProCard.TabPane>
        )}
        {!isNew && (
          <ProCard.TabPane
            key={TabNames.CATEGORIES}
            tab={<FormattedMessage id="categories_tags" />}
            disabled={manageCourseEdit.disableEdit}
          >
            <ProForm {...formProps}>
              <Row>
                <Col span={12}>
                  <ProForm.Item
                    label={<FormattedMessage id="categories" />}
                    name="categories"
                    valuePropName="value"
                  >
                    <CategoryCheckboxTree />
                  </ProForm.Item>
                </Col>
                <Col span={12}>
                  <ProForm.Item
                    label={<FormattedMessage id="tags" />}
                    name="tags"
                    valuePropName="value"
                  >
                    <TagsInput />
                  </ProForm.Item>
                </Col>
              </Row>
            </ProForm>
          </ProCard.TabPane>
        )}
        {!isNew && (
          <ProCard.TabPane
            className="program"
            key={TabNames.PROGRAM}
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
            key={TabNames.SCORM}
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
            key={TabNames.ACCESS}
            tab={<FormattedMessage id="access" />}
            disabled={manageCourseEdit.disableEdit}
          >
            {course && <CourseAccess id={course} />}
          </ProCard.TabPane>
        )}
        {!isNew && access.certificatesPermission && (
          <ProCard.TabPane
            key={TabNames.CERTIFICATES}
            tab={<FormattedMessage id="certificates" />}
            disabled={manageCourseEdit.disableEdit}
          >
            {course && <CourseCertificateForm id={course} />}
          </ProCard.TabPane>
        )}

        {!isNew && access.questionnaireListPermission && (
          <ProCard.TabPane
            key={TabNames.QUESTIONNAIRES}
            tab={<FormattedMessage id="questionnaires" />}
            disabled={manageCourseEdit.disableEdit}
          >
            {course && <AssignQuestionnary modelType={ModelTypes.COURSE} id={Number(course)} />}
          </ProCard.TabPane>
        )}

        {!isNew && !tabsToHide.statistics && (
          <ProCard.TabPane
            key={TabNames.STATISTICS}
            tab={<FormattedMessage id="statistics" />}
            disabled={manageCourseEdit.disableEdit}
          >
            {course && <CourseStatistics courseId={course} />}
          </ProCard.TabPane>
        )}
        {!isNew && !tabsToHide.user_submission && (
          <ProCard.TabPane
            key={TabNames.USER_SUBMISSION}
            tab={<FormattedMessage id="user_submission" />}
            disabled={manageCourseEdit.disableEdit}
          >
            {course && <UserSubmissions id={Number(course)} type="App\Models\Course" />}
          </ProCard.TabPane>
        )}

        {!isNew && !tabsToHide.user_projects && (
          <ProCard.TabPane
            key={TabNames.USER_PROJECTS}
            tab={<FormattedMessage id="user_projects" />}
          >
            <ProjectsList courseId={Number(course)} />
          </ProCard.TabPane>
        )}
      </ProCard>
      {/* CONFIRM MODAL COMPONENT */}
      <ConfirmModal
        open={!!manageCourseEdit.showConfirmModal}
        onOk={() => {
          setManageCourseEdit({
            ...manageCourseEdit,
            loading: true,
          });
          form.submit();
        }}
        onCancel={() => {
          setManageCourseEdit({
            ...manageCourseEdit,
            showConfirmModal: false,
          });
        }}
        loading={!!manageCourseEdit.loading}
      />
    </PageContainer>
  );
};
