import { CollectionSelect } from '@/components/CollectionSelect';
import {
  createQuestionnaire,
  getQuestionnaire,
  getQuestionnaireModels,
  updateQuestionare,
} from '@/services/escola-lms/questionnaire';
import ProCard from '@ant-design/pro-card';
import ProForm, {
  ProFormDigit,
  ProFormSelect,
  ProFormSwitch,
  ProFormText,
} from '@ant-design/pro-form';
import { PageContainer } from '@ant-design/pro-layout';
import { Button, Form, Spin, Typography, message } from 'antd';
import type { LabeledValue } from 'antd/lib/select';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { FormattedMessage, history, useIntl, useParams } from 'umi';
import QuestionAnswers from './components/Answers';
import QuestionForm from './components/Questions';
import QuestionnaireRaports from './components/Raports';
import './style.css';

const { Title } = Typography;

import type { ModelTypes } from '@/components/AssignQuestionnary';

export const QuestionareForm = () => {
  const params = useParams<{ questionnaireId?: string }>();
  const { questionnaireId } = params;
  const intl = useIntl();

  const isNew = questionnaireId === 'new';
  const [formQuestionnaire] = Form.useForm();
  const [formModelSpecifics] = Form.useForm();
  const [data, setData] = useState<Partial<API.Questionnaire>>();
  const [tab, setTab] = useState('questionnaire');
  const [listOfModels, setListOfModels] = useState<API.QuestionnaireModel[]>();
  const [models, setModels] = useState<Record<number, (string | number | LabeledValue)[]>>({});
  const [modelNames, setModelNames] = useState<Record<number, string>>({});
  const fetchModels = useCallback(async () => {
    const response = await getQuestionnaireModels();
    if (response.success) {
      setListOfModels(response.data);
    }
  }, []);

  const parseData = useCallback((array: API.QuestionnaireQuestionModel[], key: string) => {
    return array.reduce((result: Record<number, number[]>, obj: API.QuestionnaireQuestionModel) => {
      // TODO: #1035 fix types
      // @ts-ignore
      (result[obj[key]] =
        // @ts-ignore
        result[obj[key]] || []).push(obj.model_id);
      return result;
    }, {});
  }, []);

  const fetchData = useCallback(async () => {
    const response = await getQuestionnaire(Number(questionnaireId));
    if (response.success) {
      setData({
        ...response.data,
      });
      if (response.data.models) {
        setModels(parseData(response.data.models, 'model_type_id'));
      }
    }
  }, [questionnaireId, parseData]);

  useEffect(() => {
    fetchModels();

    if (isNew) {
      setData({
        title: 'new',
      });
      return;
    }

    fetchData();
  }, [questionnaireId, fetchData, fetchModels, isNew]);

  const handleModelChange = useCallback(
    (modelids: (string | number | LabeledValue)[], selectedModel: ModelTypes) => {
      setModels((prevState) => ({
        ...prevState,
        [selectedModel]: modelids,
      }));
    },
    [],
  );

  const formatData = useCallback(
    (items: Record<number, (string | number | LabeledValue)[]>) => {
      const mappedData: Record<string, number>[] = [];

      Object.keys(items).map((key) => {
        mappedData.push(
          ...items[key as unknown as keyof typeof items].map(
            (item: string | number | LabeledValue) => ({
              model_id: Number(item),
              model_type_id: Number(key),
              target_group: formModelSpecifics.getFieldValue(
                `models.${Number(key)}.${Number(item)}.target_group`,
              ),
              display_frequency_minutes: formModelSpecifics.getFieldValue(
                `models.${Number(key)}.${Number(item)}.display_frequency_minutes`,
              ),
            }),
          ),
        );
      });
      return mappedData;
    },
    [formModelSpecifics],
  );

  const formProps = useMemo(
    () => ({
      onFinish: async (values: API.Questionnaire) => {
        try {
          if (isNew) {
            const request = await createQuestionnaire({ ...values, models: formatData(models) });
            if (request.success) {
              history.push(`/other/questionnaire/${request.data.id}`);
            }
            message.success(<FormattedMessage id="success" defaultMessage="success" />);
          } else {
            const request = await updateQuestionare(Number(data?.id), {
              ...values,
              models: formatData(models),
            });
            if (request.success) {
              fetchData();
            }
            message.success(<FormattedMessage id="success" defaultMessage="success" />);
          }
        } catch (error) {
          message.error(<FormattedMessage id="error" defaultMessage="error" />);
        }
      },
      initialValues: data,
    }),
    [data, models, fetchData, formatData, isNew],
  );

  const getCurrentModel = useCallback(
    (modelTitle: string) => {
      return data && data.models?.filter((item) => item.model_type_title === modelTitle);
    },
    [data],
  );

  const getModelName = useCallback(
    (id: number, modelTitle: string, index: number, modelId: number) => {
      return (
        getCurrentModel(modelTitle)?.find((item) => item.model_id === Number(id))?.model_title ||
        modelNames[modelId][index]
      );
    },
    [getCurrentModel, modelNames],
  );

  const initialValues = useMemo(() => {
    return data?.models?.reduce((acc, item) => {
      const key = `models.${item.model_type_id}.${item.model_id}`;
      acc[`${key}.target_group`] = item.target_group;
      acc[`${key}.display_frequency_minutes`] = item.display_frequency_minutes;
      return acc;
    }, {} as Record<string, string | number | null>);
  }, [data?.models]);

  if (!data) {
    return <Spin />;
  }

  const listOptions = [
    {
      label: <FormattedMessage id="author" />,
      value: 'author',
    },
    {
      label: <FormattedMessage id="users" />,
      value: 'user',
    },
  ];

  return (
    <PageContainer
      title={
        <>
          <FormattedMessage id={data?.title ? 'questionnaire' : 'new_questionnaire'} />
        </>
      }
      header={{
        breadcrumb: {
          routes: [
            {
              path: 'other/questionnaire',
              breadcrumbName: intl.formatMessage({
                id: 'menu.Other activities.Questionnaire',
              }),
            },
            {
              path: String(questionnaireId),
              breadcrumbName: intl.formatMessage({
                id: 'form',
              }),
            },
            {
              path: '/',
              breadcrumbName: String(data?.title),
            },
          ],
        },
      }}
    >
      <ProCard
        tabs={{
          type: 'card',
          defaultActiveKey: 'questionnaire',
          activeKey: tab,
          onChange: (key) => setTab(key),
        }}
      >
        <ProCard.TabPane
          key="questionnaire"
          tab={<FormattedMessage id="questionnaire" defaultMessage="questionnaire" />}
        >
          <Title level={3}>
            <FormattedMessage id="questionnaire" defaultMessage="questionnaire" />
          </Title>
          <ProForm {...formProps} form={formQuestionnaire}>
            <ProForm.Group>
              <ProFormText
                label={<FormattedMessage id="title" defaultMessage="title" />}
                rules={[
                  {
                    required: true,
                  },
                ]}
                width="md"
                name="title"
              />
              <ProFormSwitch
                width="md"
                initialValue={true}
                name="active"
                label={<FormattedMessage id="is_active" defaultMessage="is_active" />}
              />{' '}
            </ProForm.Group>
          </ProForm>
        </ProCard.TabPane>
        <ProCard.TabPane
          key="questions"
          tab={<FormattedMessage id="questions" defaultMessage="questions" />}
          disabled={isNew}
        >
          <QuestionForm
            questionnaireId={Number(questionnaireId)}
            questions={data.questions || []}
            fetchData={fetchData}
          />
        </ProCard.TabPane>
        <ProCard.TabPane
          key="answers"
          tab={<FormattedMessage id="answers" defaultMessage="answers" />}
          disabled={isNew}
        >
          <QuestionAnswers
            questionnaireId={Number(questionnaireId)}
            questions={data.questions || []}
          />
        </ProCard.TabPane>
        {listOfModels &&
          listOfModels.map((model: API.QuestionnaireModel) => (
            <ProCard.TabPane
              key={String(model.id)}
              tab={`${intl.formatMessage({ id: 'assign' })} ${intl.formatMessage({
                id: 'to',
              })} ${intl.formatMessage({
                id: model.title?.replace(
                  model.title.charAt(0),
                  model.title.charAt(0).toUpperCase(),
                ),
              })}`}
              disabled={isNew}
            >
              <CollectionSelect
                defaultValue={
                  data.models
                    ?.filter((item) => item.model_type_title === model.title)
                    .map((item) => ({
                      value: item.model_id,
                      label: item.model_title,
                    })) || []
                }
                multiple
                onChange={(values, option) => [
                  handleModelChange(values as (string | number | LabeledValue)[], model.id),
                  setModelNames((prevState) => ({
                    ...prevState,
                    [model.id]: option.map((item: { label: string }) => item.label as string),
                  })),
                ]}
                modelType={model.title?.toUpperCase()}
              />

              <ProForm
                form={formModelSpecifics}
                submitter={false}
                initialValues={initialValues}
                style={{ marginTop: '20px' }}
              >
                {models[model.id] &&
                  models[model.id]?.map((key, index) => (
                    <div key={String(key)}>
                      <Title level={5}>
                        {getModelName(Number(key), model.title, index, model.id)}
                      </Title>

                      <ProForm.Group>
                        <ProFormSelect
                          width="md"
                          name={`models.${model.id}.${key}.target_group`}
                          label={
                            <FormattedMessage id="target_group" defaultMessage="target_group" />
                          }
                          options={listOptions}
                        />
                        <ProFormDigit
                          width="md"
                          name={`models.${model.id}.${key}.display_frequency_minutes`}
                          label={
                            <FormattedMessage
                              id="display_frequency_minutes"
                              defaultMessage="display_frequency_minutes"
                            />
                          }
                        />
                      </ProForm.Group>
                    </div>
                  ))}
              </ProForm>

              <Button
                className="submit-btn"
                type="primary"
                onClick={() => formQuestionnaire.submit()}
              >
                <FormattedMessage id="questionnaire.submit" defaultMessage="questionnaire.submit" />
              </Button>
            </ProCard.TabPane>
          ))}
        <ProCard.TabPane
          key="raport"
          tab={<FormattedMessage id="menu.reports" defaultMessage="menu.reports" />}
          disabled={isNew || data.models?.length === 0}
        >
          {data?.models && data?.models?.length > 0 && (
            <QuestionnaireRaports questionnaireId={Number(questionnaireId)} models={data.models} />
          )}
        </ProCard.TabPane>
      </ProCard>
    </PageContainer>
  );
};

export default QuestionareForm;
