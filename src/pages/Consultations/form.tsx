import { useMemo, useState, useEffect } from 'react';
import { message, Spin, Row, Col, Calendar } from 'antd';
import ProForm, {
  ProFormText,
  ProFormDigit,
  ProFormDatePicker,
  ProFormSelect,
} from '@ant-design/pro-form';
import ProCard from '@ant-design/pro-card';

import WysiwygMarkdown from '@/components/WysiwygMarkdown';
import { PageContainer } from '@ant-design/pro-layout';

import { useParams, history, useIntl, FormattedMessage } from 'umi';
import { useCallback } from 'react';
import UserSelect from '@/components/UserSelect';
import CategoryCheckboxTree from '@/components/CategoryCheckboxTree';
import {
  ConsultationStatus,
  createConsultation,
  getConsultation,
  updateConsultation,
} from '@/services/escola-lms/consultations';
import MultipleDatePicker from '@/components/MultipleDatePicker';
import { categoriesArrToIds, splitImagePath } from '@/utils/utils';
import ProFormImageUpload from '@/components/ProFormImageUpload';
import './index.css';

const ConsultationForm = () => {
  const intl = useIntl();
  const params = useParams<{ consultation?: string; tab?: string }>();
  const { consultation, tab = 'attributes' } = params;
  const isNew = consultation === 'new';

  const [data, setData] = useState<Partial<API.Consultation>>();
  const [form] = ProForm.useForm();

  const fetchData = useCallback(async () => {
    const response = await getConsultation(Number(consultation));
    if (response.success) {
      setData({
        ...response.data,
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
        let response: API.DefaultResponse<API.Consultation>;
        if (isNew) {
          response = await createConsultation(values);
          if (response.success) {
            history.push(`/consultations/${response.data.id}`);
          }
        } else {
          response = await updateConsultation(Number(consultation), {
            ...values,
            image_url: data && data.image_url,
            image_path: data && data.image_url && splitImagePath(data.image_url),
          });
          if (response.success) {
            history.push(`/consultations/${response.data.id}/${tab}`);
          }
        }
        message.success(response.message);
      },
      initialValues: data,
    }),
    [data, consultation, tab],
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
                width="sm"
                name="duration"
                label={<FormattedMessage id="duration" />}
                tooltip={<FormattedMessage id="duration" />}
                placeholder={intl.formatMessage({
                  id: 'duration',
                  defaultMessage: 'duration',
                })}
              />
              <ProFormSelect
                name="status"
                width="xs"
                label={<FormattedMessage id="status" />}
                valueEnum={ConsultationStatus}
                placeholder={intl.formatMessage({
                  id: 'status',
                })}
                rules={[{ required: true, message: <FormattedMessage id="select" /> }]}
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
              <ProForm.Item
                name="author_id"
                label={<FormattedMessage id="tutor" />}
                valuePropName="value"
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
              >
                <WysiwygMarkdown directory={`consultation/${consultation}/wysiwyg`} />
              </ProForm.Item>
            </ProForm.Group>
            <ProForm.Group>
              <ProForm.Item
                valuePropName="value"
                name="proposed_terms"
                label={<FormattedMessage id="consultations.proposed_terms" />}
              >
                <MultipleDatePicker />
              </ProForm.Item>
            </ProForm.Group>
          </ProForm>
        </ProCard.TabPane>{' '}
        {!isNew && (
          <ProCard.TabPane key="media" tab={<FormattedMessage id="media" />}>
            <ProForm {...formProps}>
              <ProFormImageUpload
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
          <ProCard.TabPane key="categories" tab={<FormattedMessage id="categories" />}>
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
          <ProCard.TabPane key="calendar" tab={<FormattedMessage id="consultations.calendar" />}>
            <Calendar />
          </ProCard.TabPane>
        )}
      </ProCard>
    </PageContainer>
  );
};

export default ConsultationForm;
