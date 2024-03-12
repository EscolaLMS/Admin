import {
  createDictionaryWord,
  getDictionaryWord,
  updateDictionaryWord,
} from '@/services/escola-lms/dictionary';
import ProCard from '@ant-design/pro-card';
import ProForm, { ProFormText } from '@ant-design/pro-form';
import { PageContainer } from '@ant-design/pro-layout';
import { Col, Row, Spin, message } from 'antd';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { FormattedMessage, history, useIntl, useParams } from 'umi';

type FormValues = {
  word: string;
  description: string;
  dictionary_id: number;
};

export default () => {
  const intl = useIntl();
  const params = useParams<{ dictionaryId?: string; tab?: string; dictionaryWordId?: string }>();
  const { dictionaryId, tab, dictionaryWordId } = params;
  const isNew = dictionaryWordId === 'new';

  const [data, setData] = useState<Partial<API.DictionaryWords>>();
  const [loading, setLoading] = useState(false);
  const [form] = ProForm.useForm();

  const fetchData = useCallback(async () => {
    setLoading(true);
    const response = await getDictionaryWord(Number(dictionaryWordId));
    if (response.success) {
      setData(response.data);
    }
    setLoading(false);
  }, [dictionaryWordId]);

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
          ...values,
          dictionary_id: Number(dictionaryId),
        }

        if (dictionaryWordId === 'new') {
          response = await createDictionaryWord(body);
          if (response.success) {
            history.push(`/other/dictionary/${dictionaryId}/${tab}/${response.data.id}`);
          }
        } else {
          response = await updateDictionaryWord(Number(dictionaryWordId), body);
        }

        message.success(response.message);
      },
      initialValues: data,
    }),
    [data, dictionaryWordId, dictionaryId],
  );

  if (!data) {
    return <Spin />;
  }

  return (
    <PageContainer
      title={
        isNew ? <FormattedMessage id="new_dictionary_word" /> : <FormattedMessage id="edit_dictionary_word" />
      }
    >
      <ProCard>
        <ProForm {...formProps} form={form}>
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
          {loading && <Spin />}
        </ProForm>
      </ProCard>
    </PageContainer>
  );
};
