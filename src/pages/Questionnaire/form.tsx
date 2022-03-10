import { useCallback, useEffect, useMemo, useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import ProCard from '@ant-design/pro-card';
import { useParams, history, useIntl, FormattedMessage } from 'umi';
import { Typography, message, Spin, Button, Form, Row, Col } from 'antd';
import { ProFormText, ProFormSwitch } from '@ant-design/pro-form';
import {
  getQuestionnaire,
  updateQuestionare,
  createQuestionnaire,
  getQuestionnaireModels,
} from '@/services/escola-lms/questionnaire';
import ProForm from '@ant-design/pro-form';
import CourseSelect from '@/components/CourseSelect';
import QuestionForm from './components/Questions';
import QuestionnaireChart from './components/QuestionnaireChart';
import QuestionAnswers from './components/Answers';
import './style.css';

const { Title } = Typography;

export enum ModelTypes {
  course = 1,
}

export const QuestionareForm = () => {
  const params = useParams<{ questionnaireId?: string }>();
  const { questionnaireId } = params;
  const intl = useIntl();

  const isNew = questionnaireId === 'new';
  const [formQuestionnaire] = Form.useForm();

  const [data, setData] = useState<Partial<API.Questionnaire>>();
  const [tab, setTab] = useState('questionnaire');
  const [listOfModels, setListOfModels] = useState<API.QuestionnaireModel[]>();
  const [models, setModels] = useState({});

  const fetchModels = useCallback(async () => {
    const response = await getQuestionnaireModels();
    if (response.success) {
      setListOfModels(response.data);
    }
  }, []);

  const parseData = useCallback((array, key: string) => {
    return array.reduce((result: Record<number, number[]>, obj: Record<string, string>) => {
      (result[obj[key]] = result[obj[key]] || []).push(obj.model_id);
      return result;
    }, {});
  }, []);

  const fetchData = useCallback(async () => {
    const response = await getQuestionnaire(Number(questionnaireId));
    if (response.success) {
      setData({
        ...response.data,
      });
      setModels(parseData(response.data.models, 'model_type_id'));
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

  const handleModelChange = useCallback((modelids, selectedModel: ModelTypes) => {
    setModels((prevState) => ({
      ...prevState,
      [selectedModel]: modelids,
    }));
  }, []);

  const formatData = useCallback((items) => {
    const mappedData: Record<string, number>[] = [];
    Object.keys(items).map((key) => {
      mappedData.push(
        ...items[key].map((item: number) => ({ model_id: item, model_type_id: Number(key) })),
      );
    });
    return mappedData;
  }, []);

  const formProps = useMemo(
    () => ({
      onFinish: async (values: API.Questionnaire) => {
        try {
          if (isNew) {
            const request = await createQuestionnaire({ ...values, models: formatData(models) });
            if (request.success) {
              history.push(`/questionnaire/${request.data.id}`);
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

  if (!data) {
    return <Spin />;
  }

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
              path: 'questionnaire',
              breadcrumbName: intl.formatMessage({
                id: 'menu.Questionnaire',
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
              breadcrumbName: intl.formatMessage({
                id: String(data?.title),
              }),
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
          </Title>{' '}
          <ProForm {...formProps} form={formQuestionnaire}>
            <Row>
              <Col span={6}>
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
              </Col>
              <Col>
                <ProFormSwitch
                  initialValue={true}
                  name="active"
                  label={<FormattedMessage id="is_active" defaultMessage="is_active" />}
                />
              </Col>
            </Row>
          </ProForm>
        </ProCard.TabPane>
        <ProCard.TabPane
          key="questions"
          tab={<FormattedMessage id="questions" defaultMessage="questions" />}
          disabled={isNew}
        >
          <QuestionForm
            questionnaireId={Number(questionnaireId)}
            questions={data.questions}
            fetchData={fetchData}
          />
        </ProCard.TabPane>
        <ProCard.TabPane
          key="answers"
          tab={<FormattedMessage id="answers" defaultMessage="answers" />}
          disabled={isNew}
        >
          <QuestionAnswers />
        </ProCard.TabPane>
        {listOfModels &&
          listOfModels.map((model: API.QuestionnaireModel) => (
            <ProCard.TabPane
              key={String(model.id)}
              tab={`Assign to ${model.title}`}
              disabled={isNew}
            >
              {/* TODO: universal select for list of models or switch  */}
              <CourseSelect
                defaultValue={models && models[model.id]?.map((item: number) => item)}
                multiple
                onChange={(values) => handleModelChange(values, model.id)}
              />
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
          disabled={isNew}
        >
          <ProCard split="vertical">
            <ProCard colSpan={12} layout="center">
              <QuestionnaireChart id={Number(questionnaireId)} type="count_answers" />
            </ProCard>
            <ProCard colSpan={12} layout="center">
              <QuestionnaireChart id={Number(questionnaireId)} type="sum_rate" />
            </ProCard>
          </ProCard>
        </ProCard.TabPane>
      </ProCard>
    </PageContainer>
  );
};

export default QuestionareForm;
