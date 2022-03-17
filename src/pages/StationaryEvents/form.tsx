import { useMemo, useState, useEffect } from 'react';
import { message, Spin, Row, Col } from 'antd';
import ProForm, { ProFormText, ProFormDigit, ProFormDatePicker } from '@ant-design/pro-form';
import ProCard from '@ant-design/pro-card';

import WysiwygMarkdown from '@/components/WysiwygMarkdown';
import { PageContainer } from '@ant-design/pro-layout';

import { useParams, history, useIntl, FormattedMessage } from 'umi';
import { useCallback } from 'react';
import UserSelect from '@/components/UserSelect';

import {
  getStationaryEvent,
  createStationaryEvent,
  updateStationaryEvent,
} from '@/services/escola-lms/stationary_events';

import ProFormImageUpload from '@/components/ProFormImageUpload';

import CategoryCheckboxTree from '@/components/CategoryCheckboxTree';
import { categoriesArrToIds } from '@/utils/utils';
import './index.css';
import ProductWidget from '@/components/ProductWidget';
import UnsavedPrompt from '@/components/UnsavedPrompt';
import UserSubmissions from '@/components/UsersSubmissions';

const StationaryEventForm = () => {
  const intl = useIntl();
  const params = useParams<{ id?: string; tab?: string }>();
  const { id, tab = 'attributes' } = params;
  const isNew = id === 'new';
  const [unsavedChanges, setUnsavedChanges] = useState(false);
  const [data, setData] = useState<Partial<EscolaLms.StationaryEvents.Models.StationaryEvent>>();
  const [form] = ProForm.useForm();

  const fetchData = useCallback(async () => {
    const response = await getStationaryEvent(Number(id));
    if (response.success) {
      setData({
        ...response.data,
        categories: response?.data?.categories.map(categoriesArrToIds),
      });
    }
  }, [id]);

  useEffect(() => {
    if (isNew) {
      setData({
        name: '...',
      });
      return;
    }

    fetchData();
  }, [id]);

  const formProps = useMemo(
    () => ({
      onFinish: async (values: Partial<EscolaLms.StationaryEvents.Models.StationaryEvent>) => {
        const postData = {
          ...values,
          categories:
            values.categories &&
            values.categories.map((category) =>
              typeof category !== 'number' ? category.id : category,
            ),
          /*
          image_url: data && data.image_url,
          image_path: data && data.image_url && splitImagePath(data.image_url),
          */
        };
        let response: API.DefaultResponse<EscolaLms.StationaryEvents.Models.StationaryEvent>;
        if (isNew) {
          response = await createStationaryEvent(postData);
          if (response.success) {
            setUnsavedChanges(false);
            history.push(`/stationary-events/${response.data.id}`);
          }
        } else {
          response = await updateStationaryEvent(Number(id), postData);
          if (response.success) {
            setUnsavedChanges(false);
            history.push(`/stationary-events/${response.data.id}/${tab}`);
          }
        }
        message.success(response.message);
      },
      initialValues: data,
    }),
    [data, id, tab],
  );

  if (!data) {
    return <Spin />;
  }

  return (
    <PageContainer
      title={
        isNew ? (
          <FormattedMessage id="stationary_event" />
        ) : (
          <FormattedMessage id="stationary_event.edit" />
        )
      }
      header={{
        breadcrumb: {
          routes: [
            {
              path: 'stationary-events',
              breadcrumbName: intl.formatMessage({
                id: 'menu.StationaryEvents',
              }),
            },
            {
              path: String(id),
              breadcrumbName: intl.formatMessage({
                id: 'form',
              }),
            },
            {
              path: '/',
              breadcrumbName: intl.formatMessage({
                id: id === 'new' ? 'new' : 'edit',
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
          onChange: (key) => history.push(`/stationary-events/${id}/${key}`),
        }}
      >
        <ProCard.TabPane key="attributes" tab={<FormattedMessage id="attributes" />}>
          <UnsavedPrompt show={unsavedChanges} />{' '}
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
                tooltip={<FormattedMessage id="name_tooltip" />}
                placeholder={intl.formatMessage({
                  id: 'name',
                  defaultMessage: 'name',
                })}
                required
              />
              <ProFormText
                width="md"
                name="place"
                label={<FormattedMessage id="place" />}
                tooltip={<FormattedMessage id="place_tooltip" />}
                placeholder={intl.formatMessage({
                  id: 'place',
                  defaultMessage: 'place',
                })}
                required
              />
              <ProForm.Item
                name="authors"
                label={<FormattedMessage id="tutor" />}
                valuePropName="value"
              >
                <UserSelect multiple role="tutor" />
              </ProForm.Item>
              <ProFormDigit
                width="xs"
                name="max_participants"
                label={<FormattedMessage id="max_participants" />}
                tooltip={<FormattedMessage id="max_participants_tooltip" />}
                placeholder={intl.formatMessage({
                  id: 'max_participants',
                  defaultMessage: 'max_participants',
                })}
                min={0}
                max={9999}
                fieldProps={{ step: 1 }}
              />
            </ProForm.Group>

            <ProForm.Group>
              <ProFormDatePicker
                width="sm"
                name="started_at"
                label={<FormattedMessage id="started_at" />}
                tooltip={<FormattedMessage id="started_at_tooltip" />}
                placeholder={intl.formatMessage({
                  id: 'started_at',
                  defaultMessage: 'started_at',
                })}
              />
              <ProFormDatePicker
                width="sm"
                name="finished_at"
                label={<FormattedMessage id="finished_at" />}
                tooltip={<FormattedMessage id="finished_att_tooltip" />}
                placeholder={intl.formatMessage({
                  id: 'finished_at',
                  defaultMessage: 'finished_at',
                })}
              />
            </ProForm.Group>

            <ProForm.Item
              name="program"
              label={<FormattedMessage id="program" />}
              tooltip={<FormattedMessage id="program_tooltip" />}
              valuePropName="value"
            >
              <WysiwygMarkdown directory={`stationary_events/${id}/wysiwyg`} />
            </ProForm.Item>

            <ProForm.Item
              name="description"
              label={<FormattedMessage id="description" />}
              tooltip={<FormattedMessage id="description_tooltip" />}
              valuePropName="value"
            >
              <WysiwygMarkdown directory={`stationary_events/${id}/wysiwyg`} />
            </ProForm.Item>
          </ProForm>
        </ProCard.TabPane>{' '}
        {!isNew && (
          <ProCard.TabPane key="prices" tab={<FormattedMessage id="prices" />}>
            {id && (
              <ProductWidget
                productable={{
                  class_type: 'App\\Models\\StationaryEvent',
                  class_id: id,
                  name: String(data.name),
                }}
              />
            )}
          </ProCard.TabPane>
        )}
        {!isNew && (
          <ProCard.TabPane key="media" tab={<FormattedMessage id="media" />}>
            <ProForm {...formProps}>
              <ProFormImageUpload
                title="image"
                action={`/api/admin/stationary-events/${id}/?_method=PUT`}
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
                    <CategoryCheckboxTree multiple={false} />
                  </ProForm.Item>
                </ProForm>
              </Col>
            </Row>
          </ProCard.TabPane>
        )}
        {!isNew && (
          <ProCard.TabPane key="user_submission" tab={<FormattedMessage id="user_submission" />}>
            <Row>
              <Col span={12}>
                {id && <UserSubmissions id={Number(id)} type="App\Models\StationaryEvent" />}
              </Col>
            </Row>
          </ProCard.TabPane>
        )}
      </ProCard>
    </PageContainer>
  );
};

export default StationaryEventForm;
