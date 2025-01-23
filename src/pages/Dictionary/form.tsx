import { useShowNotification } from '@/hooks/useMessage';
import DictionaryWordsTableList from '@/pages/Dictionary/components/DictionaryWords';
import {
  createDictionary,
  getDictionary,
  updateDictionary,
} from '@/services/escola-lms/dictionary';
import ProCard from '@ant-design/pro-card';
import ProForm, { ProFormDigit, ProFormText } from '@ant-design/pro-form';
import { PageContainer } from '@ant-design/pro-layout';
import { Col, Row, Spin } from 'antd';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { FormattedMessage, history, useIntl, useParams } from 'umi';

type FormValues = {
  name: string;
  free_views_count: number;
};

export enum DictionaryTabNames {
  FORM = 'form',
  WORDS = 'words',
}

export default () => {
  const intl = useIntl();
  const params = useParams<{ dictionaryId?: string; tab?: string }>();
  const { dictionaryId, tab } = params;
  const isNew = dictionaryId === 'new';
  const { showNotification } = useShowNotification();
  const [data, setData] = useState<Partial<API.Dictionaries>>();
  const [loading, setLoading] = useState(false);
  const [form] = ProForm.useForm();

  const fetchData = useCallback(async () => {
    setLoading(true);
    const response = await getDictionary(Number(dictionaryId));
    if (response.success) {
      setData(response.data);
    }
    setLoading(false);
  }, [dictionaryId]);

  useEffect(() => {
    if (dictionaryId === 'new') {
      setData({});
      return;
    }

    fetchData();
  }, [dictionaryId, fetchData]);

  const formProps = useMemo(
    () => ({
      onFinish: async (values: FormValues) => {
        let response: API.DefaultResponse<API.Dictionaries>;

        if (dictionaryId === 'new') {
          response = await createDictionary(values);
          if (response.success) {
            history.push(`/other/dictionary/${response.data.id}/form`);
          }
        } else {
          response = await updateDictionary(Number(dictionaryId), values);
        }

        showNotification(response);
      },
      initialValues: data,
    }),
    [data, dictionaryId],
  );

  if (!data) {
    return <Spin />;
  }

  return (
    <PageContainer
      title={
        isNew ? <FormattedMessage id="new_dictionary" /> : <FormattedMessage id="edit_dictionary" />
      }
    >
      <ProCard
        tabs={{
          type: 'card',
          activeKey: tab,
          onChange: (key) => {
            history.push(`/other/dictionary/${dictionaryId}/${key}`);
          },
        }}
      >
        <ProCard.TabPane key={DictionaryTabNames.FORM} tab={<FormattedMessage id="attributes" />}>
          <ProForm {...formProps} form={form}>
            <Row gutter={[16, 16]}>
              <Col xs={{ span: 24 }} md={{ span: 12 }}>
                <ProFormText
                  name="name"
                  label={<FormattedMessage id="name" />}
                  tooltip={<FormattedMessage id="name" />}
                  placeholder={intl.formatMessage({
                    id: 'Name',
                  })}
                  required
                  rules={[
                    {
                      validator: async (_, value) => {
                        if (!value) {
                          return Promise.reject(
                            new Error(
                              intl.formatMessage({
                                id: 'field_required',
                                defaultMessage: 'field_required',
                              }),
                            ),
                          );
                        }
                        return Promise.resolve();
                      },
                    },
                  ]}
                />
              </Col>
              {!isNew && (
                <Col xs={{ span: 24 }} md={{ span: 12 }}>
                  <ProFormText
                    name="slug"
                    label={<FormattedMessage id="slug" />}
                    placeholder={intl.formatMessage({
                      id: 'slug',
                    })}
                    disabled
                    required
                  />
                </Col>
              )}
              <Col xs={{ span: 24 }} md={{ span: 12 }}>
                <ProFormDigit
                  name="free_views_count"
                  label={<FormattedMessage id="free_views_count" />}
                  tooltip={<FormattedMessage id="free_views_count_tooltip" />}
                  placeholder={intl.formatMessage({
                    id: 'Free views count',
                  })}
                  min={0}
                />
              </Col>
            </Row>
            {loading && <Spin />}
          </ProForm>
        </ProCard.TabPane>
        <ProCard.TabPane
          key={DictionaryTabNames.WORDS}
          tab={<FormattedMessage id="words" />}
          disabled={isNew}
        >
          <DictionaryWordsTableList />
        </ProCard.TabPane>
      </ProCard>
    </PageContainer>
  );
};
