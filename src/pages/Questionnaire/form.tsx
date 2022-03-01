import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import ProCard from '@ant-design/pro-card';
import { useParams, history, useIntl, FormattedMessage } from 'umi';
import { Typography, message, Spin, Button, Tooltip, Popconfirm, Form } from 'antd';
import { ProFormText, ProFormSwitch } from '@ant-design/pro-form';
import {
  questionnaireById,
  addQuestion,
  deleteQuestion,
  updateQuestionare,
  createQuestionnaire,
  getQuestionnaireModels,
} from '@/services/escola-lms/questionnaire';
import ProForm from '@ant-design/pro-form';
import { DeleteOutlined } from '@ant-design/icons';
import CourseSelect from '@/components/CourseSelect';
import ProTable from '@ant-design/pro-table';
import type { ActionType, ProColumns } from '@ant-design/pro-table';
import './style.css';

const { Title } = Typography;

const TableColumns: ProColumns<API.Questionnaire>[] = [
  {
    title: <FormattedMessage id="id" defaultMessage="id" />,
    dataIndex: 'id',
    hideInSearch: true,
  },
  {
    title: <FormattedMessage id="title" defaultMessage="title" />,
    dataIndex: 'title',
    hideInSearch: true,
  },
  {
    title: <FormattedMessage id="description" defaultMessage="description" />,
    dataIndex: 'description',
    hideInSearch: true,
  },
];

export enum ModelTypes {
  course = 1,
  programs = 2,
  events = 5,
}

export const QuestionareForm = () => {
  const params = useParams<{ questionnaireId?: string }>();
  const { questionnaireId } = params;
  const intl = useIntl();
  const actionRef = useRef<ActionType>();

  const isNew = questionnaireId === 'new';
  const [formQuestionnaire] = Form.useForm();
  const [form] = Form.useForm();
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
    const response = await questionnaireById(Number(questionnaireId));
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

  const questionProps = useMemo(
    () => ({
      onFinish: async (values: API.Question) => {
        try {
          const request = await addQuestion({
            ...values,
            questionnaire_id: data?.id,
            active: true,
            position: 0,
          });

          if (request.success) {
            fetchData();
            form.resetFields();
            message.success(<FormattedMessage id="success" defaultMessage="success" />);
          }
        } catch (error) {
          console.log(error);
          message.error(<FormattedMessage id="error" defaultMessage="error" />);
        }
      },

      initialValues: {},
    }),
    [data, fetchData, form],
  );

  const handleRemoveQuestion = useCallback(
    async (questionId: number) => {
      const hide = message.loading(
        intl.formatMessage({
          id: 'loading',
        }),
      );
      try {
        await deleteQuestion(questionId);
        hide();
        fetchData();
        actionRef.current?.reload();
        return true;
      } catch (error) {
        hide();
        message.error(<FormattedMessage id="error" defaultMessage="error" />);
        return false;
      }
    },
    [actionRef, fetchData, intl],
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
              initialValue={true}
              name="active"
              label={<FormattedMessage id="is_active" defaultMessage="is_active" />}
            />
          </ProForm>
        </ProCard.TabPane>
        <ProCard.TabPane
          key="questions"
          tab={<FormattedMessage id="questions" defaultMessage="questions" />}
          disabled={isNew}
        >
          <ProForm {...questionProps} form={form}>
            <ProFormText
              width="lg"
              name="title"
              label={<FormattedMessage id="title" />}
              tooltip={<FormattedMessage id="title" />}
              placeholder={intl.formatMessage({
                id: 'title',
              })}
            />
            <ProFormText
              width="lg"
              name="description"
              label={<FormattedMessage id="description" />}
              tooltip={<FormattedMessage id="description" />}
              placeholder={intl.formatMessage({
                id: 'description',
              })}
            />
          </ProForm>
          <div className="table-wrapper">
            <Title level={5}>
              <FormattedMessage id="question_list" defaultMessage="question_list" />
            </Title>
            <ProTable
              headerTitle={intl.formatMessage({
                id: 'question',
                defaultMessage: 'question',
              })}
              actionRef={actionRef}
              rowKey="id"
              search={false}
              toolBarRender={false}
              dataSource={data.questions && data.questions}
              columns={[
                ...TableColumns,
                {
                  title: <FormattedMessage id="options" defaultMessage="options" />,
                  dataIndex: 'option',
                  valueType: 'option',

                  render: (_, record) => [
                    <Popconfirm
                      key="delete"
                      title={
                        <FormattedMessage
                          id="deleteQuestion"
                          defaultMessage="Are you sure to delete this record?"
                        />
                      }
                      onConfirm={() => record.id && handleRemoveQuestion(record.id)}
                      okText={<FormattedMessage id="yes" />}
                      cancelText={<FormattedMessage id="no" />}
                    >
                      <Tooltip title={<FormattedMessage id="delete" defaultMessage="delete" />}>
                        <Button type="primary" icon={<DeleteOutlined />} danger />
                      </Tooltip>
                    </Popconfirm>,
                  ],
                },
              ]}
            />
          </div>
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
                defaultValue={models && models[model.id]?.map((item) => item)}
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
      </ProCard>
    </PageContainer>
  );
};

export default QuestionareForm;
