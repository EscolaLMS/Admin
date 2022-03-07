import { useMemo, useState, useEffect } from 'react';
import { message, Spin, Row, Col } from 'antd';
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
import {
  createWebinar,
  getWebinar,
  updateWebinar,
  WebinarStatus,
} from '@/services/escola-lms/webinars';
import UserSelect from '@/components/UserSelect';
import ProFormImageUpload from '@/components/ProFormImageUpload';
import { splitImagePath } from '@/utils/utils';
import TagsInput from '@/components/TagsInput';
import UnsavedPrompt from '@/components/UnsavedPrompt';

const WebinarForm = () => {
  const intl = useIntl();
  const params = useParams<{ webinar?: string; tab?: string }>();
  const { webinar, tab = 'attributes' } = params;
  const isNew = webinar === 'new';
  const [unsavedChanges, setUnsavedChanges] = useState(false);
  const [data, setData] = useState<Partial<API.Webinar>>();
  const [form] = ProForm.useForm();

  const fetchData = useCallback(async () => {
    const response = await getWebinar(Number(webinar));
    if (response.success) {
      setData({
        ...response.data,
      });
    }
  }, [webinar]);

  useEffect(() => {
    if (isNew) {
      setData({
        name: 'new',
      });
      return;
    }

    fetchData();
  }, [webinar]);

  const formProps = useMemo(
    () => ({
      onFinish: async (values: Partial<API.Webinar>) => {
        const postData = {
          ...values,
          image_url: data && data.image_url,
          image_path: data && data.image_url && splitImagePath(data.image_url),
          authors:
            values.authors &&
            values.authors.map((author) => (typeof author === 'object' ? author.id : author)),
        };
        let response: API.DefaultResponse<API.Webinar>;
        if (isNew) {
          response = await createWebinar(postData);
          if (response.success) {
            setUnsavedChanges(false);
            history.push(`/webinars/${response.data.id}`);
          }
        } else {
          response = await updateWebinar(Number(webinar), postData);
          if (response.success) {
            setUnsavedChanges(false);
            history.push(`/webinars/${response.data.id}/${tab}`);
          }
        }
        message.success(response.message);
      },
      initialValues: data,
    }),
    [data, webinar, tab],
  );

  if (!data) {
    return <Spin />;
  }

  return (
    <PageContainer
      title={
        isNew ? <FormattedMessage id="menu.webinars" /> : <FormattedMessage id="webinar.edit" />
      }
      header={{
        breadcrumb: {
          routes: [
            {
              path: 'webinars',
              breadcrumbName: intl.formatMessage({
                id: 'menu.Webinars',
              }),
            },
            {
              path: String(webinar),
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
          onChange: (key) => history.push(`/webinars/${webinar}/${key}`),
        }}
      >
        <ProCard.TabPane key="attributes" tab={<FormattedMessage id="attributes" />}>
          <UnsavedPrompt show={unsavedChanges} />
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
                valueEnum={WebinarStatus}
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
                name="authors"
                label={<FormattedMessage id="tutor" />}
                valuePropName="value"
              >
                <UserSelect multiple />
              </ProForm.Item>
            </ProForm.Group>
            <ProForm.Group>
              <ProForm.Item
                name="description"
                label={<FormattedMessage id="description" />}
                tooltip={<FormattedMessage id="description_tooltip" />}
                valuePropName="value"
              >
                <WysiwygMarkdown directory={`webinars/${webinar}/wysiwyg`} />
              </ProForm.Item>
            </ProForm.Group>
          </ProForm>
        </ProCard.TabPane>
        {!isNew && (
          <ProCard.TabPane key="media" tab={<FormattedMessage id="media" />}>
            <ProForm {...formProps}>
              <ProFormImageUpload
                title="image"
                action={`/api/admin/webinars/${webinar}`}
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
          <ProCard.TabPane key="tags" tab={<FormattedMessage id="tags" />}>
            <Row>
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
      </ProCard>
    </PageContainer>
  );
};

export default WebinarForm;
