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
  data?: {
    descriptions?: API.DictionaryWordData[];
  };
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

  const [dictionaryWordData, setDictionaryWordData] = useState<Partial<DictionaryWordType>>();
  const [loading, setLoading] = useState(false);
  const [form] = ProForm.useForm();

  const fetchData = useCallback(async () => {
    setLoading(true);
    const response = await getDictionaryWord(Number(dictionaryWordId));
    if (response.success) {
      setDictionaryWordData({
        ...(response.data as Omit<DictionaryWordType, 'categories'>),
        categories: response?.data?.categories?.map(mapper),
      });
    }
    setLoading(false);
  }, [dictionaryWordId, form]);

  useEffect(() => {
    if (dictionaryWordId === 'new') {
      setDictionaryWordData({});
      return;
    }

    fetchData();
  }, [dictionaryWordId, fetchData]);

  const formProps = useMemo(
    () => ({
      onFinish: async (values: FormValues) => {
        let response: API.DefaultResponse<API.DictionaryWords>;
        const body = {
          ...(dictionaryWordData as FormValues), // This is necessary for save data from other tabs without error
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
      initialValues: dictionaryWordData,
    }),
    [dictionaryWordData, dictionaryWordId, dictionaryId, tab, dictionaryWordTab],
  );

  const updateData = useCallback(
    (updatedData: API.DictionaryWordData) => {
      let newData = dictionaryWordData?.data?.descriptions || [];
      if (updatedData.id) {
        // Update existing data
        newData = newData?.map((descriptionItem) =>
          descriptionItem.id === updatedData.id ? updatedData : descriptionItem,
        );
      } else {
        // Add new data
        newData?.push({
          ...updatedData,
          id: Date.now(),
        });
      }
      setDictionaryWordData((prev) => ({
        ...prev,
        data: {
          ...(prev?.data || {}),
          descriptions: newData,
        },
      }));
    },
    [dictionaryWordData],
  );

  const onDelete = useCallback((deleteId: number) => {
    setDictionaryWordData((prev) => ({
      ...prev,
      data: {
        ...(prev?.data || {}),
        descriptions: prev?.data?.descriptions?.filter(({ id }) => id !== deleteId),
      },
    }));
  }, []);

  if (!dictionaryWordData) {
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
              <DictionaryWordsDescriptions
                updateData={updateData}
                dataSource={dictionaryWordData.data?.descriptions || []}
                onDelete={onDelete}
              />
            </ProForm>
          </ProCard.TabPane>
        )}
      </ProCard>
      {loading && <Spin />}
    </PageContainer>
  );
};
