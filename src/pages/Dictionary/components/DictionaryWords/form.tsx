import CategoryCheckboxTree from '@/components/CategoryCheckboxTree';
import DictionaryWordsDescriptions from '@/pages/Dictionary/components/DictionaryWords/Descriptions';
import {
  createDictionaryWord,
  getDictionaryWord,
  updateDictionaryWord,
} from '@/services/escola-lms/dictionary';
import { mapper } from '@/utils/utils';
import ProCard from '@ant-design/pro-card';
import ProForm, { ProFormText } from '@ant-design/pro-form';
import { PageContainer } from '@ant-design/pro-layout';
import { Col, Row, Spin, message } from 'antd';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { FormattedMessage, history, useIntl, useParams } from 'umi';

export enum DictionaryWordsTabNames {
  FORM = 'form',
  CATEGORIES = 'categories',
  DESCRIPTIONS = 'descriptions',
}

type FormValues = {
  word: string;
  description: string;
  dictionary_id: number;
  categories?: number[];
};

export type DictionaryWordType = Omit<API.DictionaryWords, 'categories'> & {
  categories: (number | string)[];
};

export default () => {
  const intl = useIntl();
  const params = useParams<{
    dictionaryId?: string;
    tab?: string;
    dictionaryWordId?: string;
    dictionaryWordTab?: string;
  }>();
  const { dictionaryId, tab, dictionaryWordId, dictionaryWordTab } = params;
  const isNew = dictionaryWordId === 'new';

  const [data, setData] = useState<Partial<DictionaryWordType>>();
  const [loading, setLoading] = useState(false);
  const [form] = ProForm.useForm();

  const fetchData = useCallback(async () => {
    setLoading(true);
    const response = await getDictionaryWord(Number(dictionaryWordId));
    if (response.success) {
      setData({
        ...(response.data as Omit<DictionaryWordType, 'categories'>),
        categories: response?.data?.categories?.map(mapper),
      });
    }
    setLoading(false);
  }, [dictionaryWordId, form]);

  useEffect(() => {
    if (dictionaryWordId === 'new') {
      setData({});
      return;
    }

    fetchData();
  }, [dictionaryWordId, fetchData]);

  const formProps = useMemo(
    () => ({
      onFinish: async (values: FormValues) => {
        let response: API.DefaultResponse<API.DictionaryWords>;
        const body = {
          ...(data as FormValues), // This is necessary for save data from other tabs without error
          ...values,
          dictionary_id: Number(dictionaryId),
        };

        if (dictionaryWordId === 'new') {
          response = await createDictionaryWord(body);
          if (response.success) {
            history.push(
              `/other/dictionary/${dictionaryId}/${tab}/${response.data.id}/${DictionaryWordsTabNames.FORM}`,
            );
          }
        } else {
          response = await updateDictionaryWord(Number(dictionaryWordId), body);
        }

        message.success(response.message);
      },
      initialValues: data,
    }),
    [data, dictionaryWordId, dictionaryId, tab, dictionaryWordTab],
  );

  if (!data) {
    return <Spin />;
  }

  return (
    <PageContainer
      title={
        isNew ? (
          <FormattedMessage id="new_dictionary_word" />
        ) : (
          <FormattedMessage id="edit_dictionary_word" />
        )
      }
    >
      <ProCard
        tabs={{
          type: 'card',
          activeKey: dictionaryWordTab,
          onChange: (key) => {
            history.push(`/other/dictionary/${dictionaryId}/${tab}/${dictionaryWordId}/${key}`);
          },
        }}
      >
        <ProCard.TabPane
          key={DictionaryWordsTabNames.FORM}
          tab={<FormattedMessage id="attributes" />}
        >
          <ProForm form={form} {...formProps}>
            <Row gutter={[16, 16]}>
              <Col xs={{ span: 24 }} md={{ span: 12 }}>
                <ProFormText
                  name="word"
                  label={<FormattedMessage id="word" />}
                  tooltip={<FormattedMessage id="word" />}
                  placeholder={intl.formatMessage({
                    id: 'Word',
                  })}
                  required
                />
              </Col>
              <Col xs={{ span: 24 }} md={{ span: 12 }}>
                <ProFormText
                  name="description"
                  label={<FormattedMessage id="description" />}
                  tooltip={<FormattedMessage id="description" />}
                  placeholder={intl.formatMessage({
                    id: 'Description',
                  })}
                  required
                />
              </Col>
            </Row>
          </ProForm>
        </ProCard.TabPane>
        {!isNew && (
          <ProCard.TabPane key="categories" tab={<FormattedMessage id="categories" />}>
            <ProForm {...formProps} form={form}>
              <Row>
                <Col span={12}>
                  <ProForm.Item
                    label={<FormattedMessage id="categories" />}
                    name="categories"
                    valuePropName="value"
                  >
                    <CategoryCheckboxTree multiple={false} />
                  </ProForm.Item>
                </Col>
              </Row>
            </ProForm>
          </ProCard.TabPane>
        )}
        {!isNew && (
          <ProCard.TabPane
            key={DictionaryWordsTabNames.DESCRIPTIONS}
            tab={<FormattedMessage id="descriptions" />}
          >
            <ProForm {...formProps} form={form}>
              <DictionaryWordsDescriptions />
            </ProForm>
          </ProCard.TabPane>
        )}
      </ProCard>
      {loading && <Spin />}
    </PageContainer>
  );
};
