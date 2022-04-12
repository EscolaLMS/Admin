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
import UnsavedPrompt from '@/components/UnsavedPrompt';
import { ModelStatus } from '@/consts/status';
import useValidateFormEdit from '@/hooks/useValidateFormEdit';
import EditValidateModal from '@/components/EditValidateModal';
import ConsultationCalendar from './components/Calendar';
import './index.css';
import ProductWidget from '@/components/ProductWidget';
import UserSubmissions from '@/components/UsersSubmissions';

const ConsultationForm = () => {
  const intl = useIntl();
  const params = useParams<{ consultation?: string; tab?: string }>();
  const { consultation, tab = 'attributes' } = params;
  const isNew = consultation === 'new';
  const [unsavedChanges, setUnsavedChanges] = useState(false);
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
        };
        let response: API.DefaultResponse<API.Consultation>;
        if (isNew) {
          response = await createConsultation(postData);
          if (response.success) {
            setUnsavedChanges(false);
            history.push(`/consultations/${response.data.id}`);
          }
        } else {
          response = await updateConsultation(Number(consultation), postData);
          if (response.success) {
            setUnsavedChanges(false);
            validateCourseEdit(response.data);
            history.push(`/consultations/${response.data.id}/${tab}`);
          }
        }
        message.success(response.message);
      },
      initialValues: data,
    }),
    [data, consultation, tab, manageCourseEdit],
  );

  // const onPanelChange = (value: any, mode: any) => {
  //   console.log(value.format('YYYY-MM-DD'), mode);
  // };

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
              path: 'consultations',
              breadcrumbName: intl.formatMessage({
                id: 'menu.Consultations',
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
              breadcrumbName: intl.formatMessage({
                id: String(data.name),
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
          onChange: (key) => history.push(`/consultations/${consultation}/${key}`),
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
          <UnsavedPrompt show={unsavedChanges} />{' '}
          <EditValidateModal visible={manageCourseEdit.showModal} setManage={setManageCourseEdit} />
          <ProForm
            {...formProps}
            form={form}
            onValuesChange={() => {
              setUnsavedChanges(true);
            }}
          >
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
                width="xs"
                label={<FormattedMessage id="status" />}
                tooltip={<FormattedMessage id="status_consultation_tooltip" />}
                valueEnum={ModelStatus}
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
            key="product"
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
              <ProFormImageUpload
                folder={`consultations/${consultation}`}
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
            key="categories"
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
        )}
        {!isNew && (
          <ProCard.TabPane
            key="user_submission"
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
          <ProCard.TabPane key="calendar" tab={<FormattedMessage id="consultations.calendar" />}>
            <ConsultationCalendar consultation={Number(consultation)} />
          </ProCard.TabPane>
        )}
      </ProCard>
    </PageContainer>
  );
};

export default ConsultationForm;
