import { useMemo, useState, useEffect } from 'react';
import { message, Spin, Row, Col } from 'antd';
import ProForm, {
  ProFormText,
  ProFormDigit,
  ProFormDatePicker,
  ProFormTextArea,
  ProFormSelect,
} from '@ant-design/pro-form';
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
import { categoriesArrToIds, splitImagePath, mapper } from '@/utils/utils';
import './index.css';
import ProductWidget from '@/components/ProductWidget';
import UnsavedPrompt from '@/components/UnsavedPrompt';
import UserSubmissions from '@/components/UsersSubmissions';
import Agenda from '@/components/Agenda';

export type StationaryEventType = Omit<
  EscolaLms.StationaryEvents.Models.StationaryEvent,
  'categories'
> & {
  image_url: string;
  categories: (number | string)[];
  agenda: AgendaType[] | undefined;
};

export interface AgendaType {
  id: number;
  title: string;
  subtitle: string;
  hour: string;
  tutors: number[];
  description?: string;
  asCandidate?: boolean;
}

const StationaryEventForm = () => {
  const intl = useIntl();
  const params = useParams<{ id?: string; tab?: string }>();
  const { id, tab = 'attributes' } = params;
  const isNew = id === 'new';
  const [agendaData, setAgendaData] = useState<string | null>(null);
  const [unsavedChanges, setUnsavedChanges] = useState(false);
  const [data, setData] = useState<Partial<StationaryEventType>>();
  const [form] = ProForm.useForm();

  //  Promise<API.DefaultResponse<EscolaLms.StationaryEvents.Models.StationaryEvent>>
  //  Promise<API.DefaultResponse<EscolaLms.StationaryEvents.Models.StationaryEvent>>

  const fetchData = useCallback(async () => {
    const response = await getStationaryEvent(Number(id));
    if (response.success) {
      setData({
        ...response.data,
        categories: response?.data?.categories?.map(mapper),
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
      onFinish: async (
        values: Partial<
          EscolaLms.StationaryEvents.Models.StationaryEvent & {
            image_url: string;
            agenda: AgendaType;
          }
        >,
      ) => {
        const postData = {
          ...values,
          agenda: agendaData,
          authors: values.authors && values.authors.map(categoriesArrToIds),
          categories: values.categories && values.categories.map(categoriesArrToIds),
          image_url: data && data.image_url,
          image_path: data && data.image_path && splitImagePath(data.image_path),
        };
        let response: API.DefaultResponse<EscolaLms.StationaryEvents.Models.StationaryEvent>;
        if (isNew) {
          response = await createStationaryEvent(postData);
          if (response.success) {
            setUnsavedChanges(false);
            history.push(`/other/stationary-events/${response.data.id}`);
          }
        } else {
          response = await updateStationaryEvent(Number(id), postData);
          if (response.success) {
            setUnsavedChanges(false);
            setData({
              ...response.data,
              categories: response?.data?.categories?.map(mapper),
            });
            history.push(`/other/stationary-events/${response.data.id}/${tab}`);
          }
        }
        message.success(response.message);
      },
      initialValues: data,
    }),
    [data, id, tab, agendaData],
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
              path: 'other/stationary-events',
              breadcrumbName: intl.formatMessage({
                id: 'menu.Other activities.StationaryEvents',
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
          onChange: (key) => history.push(`/other/stationary-events/${id}/${key}`),
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
                <UserSelect multiple />
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
              <ProFormSelect
                name="status"
                width="md"
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
                initialValue={{
                  draft: intl.formatMessage({
                    id: 'draft',
                    defaultMessage: 'draft',
                  }),
                }}
                placeholder={intl.formatMessage({
                  id: 'status',
                })}
                rules={[{ required: true, message: <FormattedMessage id="select" /> }]}
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

            <ProForm.Group>
              <ProFormTextArea
                width="lg"
                name="short_desc"
                label={<FormattedMessage id="short_description" />}
                tooltip={<FormattedMessage id="short_description" />}
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
          <ProCard.TabPane key="agenda" tab={<FormattedMessage id="agenda" />}>
            <ProForm {...formProps}>
              <Agenda data={data.agenda ?? []} onCreate={(agenda) => setAgendaData(agenda)} />
            </ProForm>
          </ProCard.TabPane>
        )}
        {!isNew && (
          <ProCard.TabPane key="product" tab={<FormattedMessage id="product" />}>
            {id && (
              <ProductWidget
                productable={{
                  class_type: 'App\\Models\\StationaryEvent',
                  class_id: id,
                  name: String(data.name),
                  quantity: 1,
                }}
              />
            )}
          </ProCard.TabPane>
        )}
        {!isNew && (
          <ProCard.TabPane key="media" tab={<FormattedMessage id="media" />}>
            <ProForm {...formProps}>
              <ProFormImageUpload
                folder={`stationary-events/${id}`}
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
