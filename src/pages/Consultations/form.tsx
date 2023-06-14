import { useMemo, useState, useEffect } from 'react';
import { message, Spin, Row, Col, Alert, Button } from 'antd';
import ProForm, { ProFormText, ProFormDatePicker, ProFormSelect } from '@ant-design/pro-form';
import ProCard from '@ant-design/pro-card';

import WysiwygMarkdown from '@/components/WysiwygMarkdown';
import { PageContainer } from '@ant-design/pro-layout';

import { useParams, history, useIntl, FormattedMessage } from 'umi';
import { useCallback } from 'react';
import UserSelect from '@/components/UserSelect';
import CategoryCheckboxTree from '@/components/CategoryCheckboxTree';
import {
  createConsultation,
  getConsultation,
  updateConsultation,
} from '@/services/escola-lms/consultations';
import MultipleDatePicker from '@/components/MultipleDatePicker';
import { categoriesArrToIds, splitImagePath } from '@/utils/utils';
import ProFormImageUpload from '@/components/ProFormImageUpload';
import { ModelStatus } from '@/consts/status';
import useValidateFormEdit from '@/hooks/useValidateFormEdit';
import EditValidateModal from '@/components/EditValidateModal';
import ConsultationCalendar from './components/Calendar';
import ProductWidget from '@/components/ProductWidget';
import UserSubmissions from '@/components/UsersSubmissions';
import ConfirmModal from '@/components/ConfirmModal';
import './index.css';

enum TabNames {
  ATTRIBUTES = 'attributes',
  PRODUCT = 'product',
  MEDIA = 'media',
  CATEGORIES = 'categories',
  BRANDING = 'branding',
  USER_SUBMISSION = 'user_submission',
  CALENDAR = 'calendar',
}

const ConsultationForm = () => {
  const intl = useIntl();
  const params = useParams<{ consultation?: string; tab?: string }>();
  const { consultation, tab = 'attributes' } = params;
  const isNew = consultation === 'new';
  const [data, setData] = useState<Partial<API.Consultation>>();
  const { manageCourseEdit, setManageCourseEdit, validateCourseEdit } = useValidateFormEdit();
  const [form] = ProForm.useForm();

  const fetchData = useCallback(async () => {
    const response = await getConsultation(Number(consultation));
    if (response.success) {
      if (tab === 'attributes') {
        validateCourseEdit(response.data);
      }

      setData({
        ...response.data,
        author_id: response.data.author && response.data.author.id,
        categories: response.data.categories?.map(categoriesArrToIds),
      });
    }
  }, [consultation]);

  useEffect(() => {
    if (isNew) {
      setData({
        name: 'new',
      });
      return;
    }

    fetchData();
  }, [consultation]);

  const formProps = useMemo(
    () => ({
      onValuesChange: () => {
        setManageCourseEdit({
          ...manageCourseEdit,
          valuesChanged: true,
        });
      },
      onFinish: async (values: Partial<API.Consultation>) => {
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
          image_url: data && data.image_url,
          image_path: data && data.image_url && splitImagePath(data.image_url),
          logotype_url: data && data.logotype_url,
          logotype_path: data && data.logotype_path && splitImagePath(data.logotype_path),
        };
        let response: API.DefaultResponse<API.Consultation>;
        if (isNew) {
          response = await createConsultation(postData);
          if (response.success) {
            history.push(`/other/consultations/${response.data.id}`);
          }
        } else {
          response = await updateConsultation(Number(consultation), postData);
          if (response.success) {
            validateCourseEdit(response.data);
            history.push(`/other/consultations/${response.data.id}/${tab}`);
          }
        }
        message.success(response.message);
        setManageCourseEdit({
          ...manageCourseEdit,
          showConfirmModal: false,
          loading: false,
          valuesChanged: false,
        });
      },
      initialValues: data,
    }),
    [data, consultation, tab, manageCourseEdit],
  );

  if (!data) {
    return <Spin />;
  }

  return (
    <PageContainer
      title={
        isNew ? (
          <FormattedMessage id="consultation" />
        ) : (
          <FormattedMessage id="consultations.edit" />
        )
      }
      header={{
        breadcrumb: {
          routes: [
            {
              path: 'other/consultations',
              breadcrumbName: intl.formatMessage({
                id: 'menu.Other activities.Consultations',
              }),
            },
            {
              path: String(consultation),
              breadcrumbName: intl.formatMessage({
                id: 'form',
              }),
            },
            {
              path: '/',
              breadcrumbName: String(data.name),
            },
            {
              path: String(tab),
              breadcrumbName: String(data.name),
            },
          ],
        },
      }}
    >
      <ProCard
        tabs={{
          type: 'card',
          activeKey: tab,
          onChange: (key) => {
            if (key !== TabNames.ATTRIBUTES && manageCourseEdit.valuesChanged) {
              setManageCourseEdit({
                ...manageCourseEdit,
                showConfirmModal: true,
              });
            } else {
              history.push(`/other/consultations/${consultation}/${key}`);
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
          <ProForm {...formProps} form={form}>
            <ProForm.Group>
              <ProFormText
                width="md"
                name="name"
                label={<FormattedMessage id="name" />}
                tooltip={<FormattedMessage id="name" />}
                placeholder={intl.formatMessage({
                  id: 'name',
                  defaultMessage: 'name',
                })}
                required
                disabled={manageCourseEdit.disableEdit}
              />

              <ProFormText
                width="sm"
                name="duration"
                label={<FormattedMessage id="duration" />}
                tooltip={<FormattedMessage id="duration" />}
                placeholder={intl.formatMessage({
                  id: 'duration',
                  defaultMessage: 'duration',
                })}
                disabled={manageCourseEdit.disableEdit}
              />
              <ProFormSelect
                name="status"
                width="sm"
                label={<FormattedMessage id="status" />}
                tooltip={<FormattedMessage id="status_consultation_tooltip" />}
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
                }}
                initialValue={ModelStatus.draft}
                placeholder={intl.formatMessage({
                  id: 'status',
                })}
                rules={[{ required: true, message: <FormattedMessage id="select" /> }]}
                disabled={manageCourseEdit.disableEdit}
              />
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
                disabled={manageCourseEdit.disableEdit}
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
                disabled={manageCourseEdit.disableEdit}
              />
              <ProForm.Item
                name="author_id"
                label={<FormattedMessage id="tutor" />}
                tooltip={<FormattedMessage id="tutor_consultation_tooltip" />}
                valuePropName="value"
                required
              >
                <UserSelect />
              </ProForm.Item>
            </ProForm.Group>
            <ProForm.Group>
              <ProForm.Item
                name="description"
                label={<FormattedMessage id="description" />}
                tooltip={<FormattedMessage id="description_tooltip" />}
                valuePropName="value"
                required
              >
                <WysiwygMarkdown directory={`consultation/${consultation}/wysiwyg`} />
              </ProForm.Item>
            </ProForm.Group>
            <ProForm.Group>
              <ProForm.Item
                valuePropName="value"
                name="proposed_terms"
                tooltip={<FormattedMessage id="proposed_terms_tooltip" />}
                label={<FormattedMessage id="consultations.proposed_terms" />}
              >
                <MultipleDatePicker />
              </ProForm.Item>
            </ProForm.Group>
          </ProForm>
        </ProCard.TabPane>
        {!isNew && (
          <ProCard.TabPane
            key={TabNames.PRODUCT}
            tab={<FormattedMessage id="product" />}
            disabled={manageCourseEdit.disableEdit}
          >
            {consultation && (
              <ProductWidget
                type="line"
                productable={{
                  class_type: 'App\\Models\\Consultation',
                  class_id: consultation,
                  name: String(data.name),
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
            <ProForm {...formProps}>
              <ProFormImageUpload
                folder={`consultation/${consultation}`}
                title="image"
                action={`/api/admin/consultations/${consultation}`}
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
            </ProForm>
          </ProCard.TabPane>
        )}
        {!isNew && (
          <ProCard.TabPane
            key={TabNames.CATEGORIES}
            tab={<FormattedMessage id="categories" />}
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
            </Row>
          </ProCard.TabPane>
        )}{' '}
        {!isNew && (
          <ProCard.TabPane
            key={TabNames.BRANDING}
            tab={<FormattedMessage id="branding" />}
            disabled={manageCourseEdit.disableEdit}
          >
            <ProForm {...formProps}>
              <ProFormImageUpload
                folder={`consultation/${consultation}`}
                title={intl.formatMessage({ id: 'logotype' })}
                action={`/api/admin/consultations/${consultation}`}
                src_name="logotype_url"
                form_name="logotype"
                getUploadedSrcField={(info) => info.file.response.data.logotype_url}
                setPath={(removedPath) =>
                  setData((prevState) => ({
                    ...prevState,
                    ...removedPath,
                  }))
                }
              />
            </ProForm>
          </ProCard.TabPane>
        )}{' '}
        {!isNew && (
          <ProCard.TabPane
            key={TabNames.USER_SUBMISSION}
            tab={<FormattedMessage id="user_submission" />}
            disabled={manageCourseEdit.disableEdit}
          >
            <Row>
              <Col span={12}>
                {consultation && (
                  <UserSubmissions id={Number(consultation)} type="App\Models\Consultation" />
                )}
              </Col>
            </Row>
          </ProCard.TabPane>
        )}
        {!isNew && (
          <ProCard.TabPane
            key={TabNames.CALENDAR}
            tab={<FormattedMessage id="consultations.calendar" />}
          >
            <ConsultationCalendar consultation={Number(consultation)} />
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

export default ConsultationForm;
