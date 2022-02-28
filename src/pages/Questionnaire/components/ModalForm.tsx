import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Button, Form, message, Tooltip, Popconfirm, Spin } from 'antd';
import ProForm, { ProFormText, ProFormSwitch } from '@ant-design/pro-form';
import { useIntl, FormattedMessage } from 'umi';
import ProCard from '@ant-design/pro-card';
import {
  questionnaireById,
  addQuestion,
  deleteQuestion,
  updateQuestionare,
  createQuestionnaire,
  getQuestionnaireModels,
} from '@/services/escola-lms/questionnaire';
import { DeleteOutlined } from '@ant-design/icons';
import CourseSelect from '@/components/CourseSelect';
import ProTable from '@ant-design/pro-table';
import type { ProColumns, ActionType } from '@ant-design/pro-table';

export enum ModelTypes {
  course = 1,
  programs = 2,
  events = 5,
}

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

export const QuestionnaireModalForm: React.FC<{
  id?: number | false;
  close: () => void;
}> = ({ id, close }) => {
  const intl = useIntl();
  const actionRef = useRef<ActionType>();
  const [loading, setLoading] = useState(false);
  const [currentId, setCurrentId] = useState<number | false>(-1);
  const [tab, setTab] = useState('questionnaire');
  const [questions, setQuestions] = useState<API.Question[]>([]);
  const [listOfModels, setListOfModels] = useState<API.QuestionnaireModel[]>();
  const [models, setModels] = useState({});

  const [formQuestionnaire] = Form.useForm();
  const [form] = Form.useForm();

  useEffect(() => {
    if (id) setCurrentId(id);

    setTab('questionnaire');
  }, [id]);

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

  const fetchData = useCallback(
    async (noSpinerReload) => {
      if (noSpinerReload) {
        setLoading(true);
      }

      try {
        const response = await questionnaireById(Number(currentId));

        if (response.success) {
          formQuestionnaire.setFieldsValue(response.data);
          setQuestions(response.data?.questions || []);
          setModels(parseData(response.data.models, 'model_type_id'));
        }
        setLoading(false);
      } catch (error) {
        message.error(<FormattedMessage id="error" defaultMessage="error" />);
        close();
      }
    },
    [currentId, formQuestionnaire],
  );

  useEffect(() => {
    fetchModels();
    setQuestions([]);
    setModels({});

    if (typeof currentId === 'number' && currentId > 0) {
      fetchData(true);
    } else {
      formQuestionnaire.resetFields();
    }
  }, [currentId, fetchData, fetchModels, formQuestionnaire]);

  const handleModelChange = useCallback((modelids, selectedModel: ModelTypes) => {
    setModels((prevState) => ({
      ...prevState,
      [selectedModel]: modelids,
    }));
  }, []);

  const formatData = useCallback((data) => {
    const mappedData: Record<string, number>[] = [];
    Object.keys(data).map((key) => {
      mappedData.push(
        ...data[key].map((item: number) => ({ model_id: item, model_type_id: Number(key) })),
      );
    });
    return mappedData;
  }, []);

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
        fetchData(false);
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

  const formProps = useMemo(
    () => ({
      onFinish: async (values: API.Questionnaire) => {
        try {
          if (typeof currentId === 'number' && currentId < 0) {
            const request = await createQuestionnaire({ ...values, models: formatData(models) });
            if (request.success) {
              formQuestionnaire.setFieldsValue(request.data);
              if (request.data.id) setCurrentId(request.data.id);
            }
            message.success(<FormattedMessage id="success" defaultMessage="success" />);
          } else {
            const request = await updateQuestionare(Number(currentId), {
              ...values,
              models: formatData(models),
            });
            if (request.success) {
              formQuestionnaire.setFieldsValue(request.data);
              close();
            }
            message.success(<FormattedMessage id="success" defaultMessage="success" />);
          }
        } catch (error) {
          console.log(error);
          message.error(<FormattedMessage id="error" defaultMessage="error" />);
        }
      },
    }),
    [currentId, models, close, formQuestionnaire, formatData],
  );

  const questionProps = useMemo(
    () => ({
      onFinish: async (values: API.Question) => {
        try {
          const request = await addQuestion({
            ...values,
            questionnaire_id: currentId,
            active: true,
            position: 0,
          });

          if (request.success) {
            fetchData(false);
            form.resetFields();
            message.success(<FormattedMessage id="success" defaultMessage="success" />);
          }
        } catch (error) {
          console.log(error);
          message.error(<FormattedMessage id="error" defaultMessage="error" />);
        }
      },
    }),
    [currentId, fetchData, form],
  );

  if (loading) {
    return <Spin />;
  }

  return (
    <div>
      <ProCard
        tabs={{
          type: 'card',
          defaultActiveKey: 'questionnaire',
          activeKey: tab,
          onChange: (key) => setTab(key),
        }}
      >
        <ProCard.TabPane key="questionnaire" tab={'questionnaire'}>
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
              disabled
              initialValue={true}
              name="active"
              label={<FormattedMessage id="is_active" defaultMessage="is_active" />}
            />
          </ProForm>
        </ProCard.TabPane>
        <ProCard.TabPane
          key="questions"
          tab={'questions'}
          disabled={typeof currentId === 'number' && currentId < 0}
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
          <div>
            <ProTable
              headerTitle={intl.formatMessage({
                id: 'question',
                defaultMessage: 'question',
              })}
              actionRef={actionRef}
              rowKey="id"
              search={false}
              toolBarRender={false}
              dataSource={questions && questions}
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
                        <Button type="primary" icon={<DeleteOutlined />} danger></Button>
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
              tab={model.title}
              disabled={typeof currentId === 'number' && currentId < 0}
            >
              <CourseSelect
                defaultValue={models && models[ModelTypes.course]?.map((item) => item)}
                multiple
                onChange={(values) => handleModelChange(values, ModelTypes.course)}
              />
              <Button
                style={{ marginTop: '20px' }}
                type="primary"
                onClick={() => formQuestionnaire.submit()}
              >
                <FormattedMessage id="questionnaire.submit" defaultMessage="questionnaire.submit" />
              </Button>
            </ProCard.TabPane>
          ))}
        {/* <ProCard.TabPane
          key={String(2)}
          tab={'Programs'}
          disabled={typeof currentId === 'number' && currentId < 0}
        >
          <CourseSelect
            defaultValue={(models && models[ModelTypes.programs].map((item) => item)) || []}
            multiple
            onChange={(values) => handleModelChange(values, ModelTypes.programs)}
          />
          <Button
            style={{ marginTop: '20px' }}
            type="primary"
            onClick={() => formQuestionnaire.submit()}
          >
            <FormattedMessage id="questionnaire.submit" defaultMessage="questionnaire.submit" />
          </Button>
        </ProCard.TabPane>
        <ProCard.TabPane
          key={String(5)}
          tab={'Programs'}
          disabled={typeof currentId === 'number' && currentId < 0}
        >
          <CourseSelect
            defaultValue={(models && models[ModelTypes.events].map((item) => item)) || []}
            multiple
            onChange={(values) => handleModelChange(values, ModelTypes.events)}
          />
          <Button
            style={{ marginTop: '20px' }}
            type="primary"
            onClick={() => formQuestionnaire.submit()}
          >
            <FormattedMessage id="questionnaire.submit" defaultMessage="questionnaire.submit" />
          </Button>
        </ProCard.TabPane> */}
      </ProCard>
    </div>
  );
};

export default QuestionnaireModalForm;
