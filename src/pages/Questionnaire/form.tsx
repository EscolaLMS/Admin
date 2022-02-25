import { useCallback, useEffect, useMemo, useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import ProCard from '@ant-design/pro-card';
import { useParams, history } from 'umi';
import {
  Typography,
  message,
  Row,
  Col,
  Spin,
  Divider,
  Collapse,
  Button,
  Tooltip,
  Popconfirm,
} from 'antd';
import { ProFormText, ProFormSwitch } from '@ant-design/pro-form';
import { useIntl, FormattedMessage } from 'umi';
import {
  questionnaireById,
  addQuestion,
  deleteQuestion,
} from '@/services/escola-lms/questionnaire';
import ProForm from '@ant-design/pro-form';
import { createQuestionnaire } from '@/services/escola-lms/questionnaire';
import { DeleteOutlined } from '@ant-design/icons';
const { Title } = Typography;
const { Panel } = Collapse;

export const QuestionareForm = () => {
  const params = useParams<{ questionnaireId?: string }>();
  const { questionnaireId } = params;
  const intl = useIntl();
  const isNew = questionnaireId === 'new';

  const [data, setData] = useState<Partial<API.Questionnaire>>();

  const fetchData = useCallback(async () => {
    const response = await questionnaireById(Number(questionnaireId));
    if (response.success) {
      setData({
        ...response.data,
      });
    }
  }, [questionnaireId]);

  useEffect(() => {
    if (isNew) {
      setData({
        title: 'new',
      });
      return;
    }

    fetchData();
  }, [questionnaireId]);

  const formProps = useMemo(
    () => ({
      onFinish: async (values: API.Questionnaire) => {
        try {
          if (isNew) {
            const request = await createQuestionnaire(values);
            if (request.success) {
              history.push(`/questionnaire/${request.data.id}`);
            }
            message.success(<FormattedMessage id="success" defaultMessage="success" />);
          } else {
            return;
          }
        } catch (error) {
          message.error(<FormattedMessage id="error" defaultMessage="error" />);
        }
      },
      initialValues: data,
    }),
    [data],
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
            message.success(<FormattedMessage id="success" defaultMessage="success" />);
          }
        } catch (error) {
          console.log(error);
          message.error(<FormattedMessage id="error" defaultMessage="error" />);
        }
      },

      initialValues: {},
    }),
    [data],
  );

  if (!data) {
    return <Spin />;
  }

  return (
    <PageContainer
      title={
        <>
          <FormattedMessage id={data?.title ? 'questionnaire' : 'new_questionnaire'} />
          {', '}
          <FormattedMessage id={questionnaireId} />
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
      <ProCard style={{ paddingBottom: '100px' }}>
        <Row gutter={24}>
          <Col span={24}>
            <Title level={3}>Questionnaire</Title>{' '}
            <ProForm {...formProps}>
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
          </Col>
          <Divider />
          {!isNew && (
            <Col span={24}>
              <Title level={3}>Questions</Title>{' '}
              <Row gutter={24}>
                <Col span={12}>
                  <Title level={5}>Add question</Title>{' '}
                  <ProForm {...questionProps}>
                    <ProFormText
                      width="lg"
                      name="title"
                      label={<FormattedMessage id="title" />}
                      tooltip={<FormattedMessage id="title" />}
                      placeholder={intl.formatMessage({
                        id: 'title',
                      })}
                    />{' '}
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
                </Col>
                <Col span={12}>
                  <Title level={5}>Question list</Title>
                  <Row gutter={24}>
                    <Col span={24}>
                      <Collapse>
                        {data.questions?.map((question: API.Question) => {
                          return (
                            <Panel
                              header={question.title}
                              key={question.id}
                              extra={
                                <Popconfirm
                                  title={
                                    <FormattedMessage
                                      id="deleteQuestion"
                                      defaultMessage="Are you sure to delete this record?"
                                    />
                                  }
                                  onConfirm={async () => {
                                    try {
                                      const request = await deleteQuestion(question.id);
                                      console.log(request);
                                      if (request.success) {
                                        message.success(
                                          <FormattedMessage
                                            id="success"
                                            defaultMessage="success"
                                          />,
                                        );
                                        fetchData();
                                      }
                                    } catch (error) {
                                      message.error(
                                        <FormattedMessage id="error" defaultMessage="error" />,
                                      );
                                    }
                                  }}
                                  okText={<FormattedMessage id="yes" />}
                                  cancelText={<FormattedMessage id="no" />}
                                >
                                  <Tooltip title={<FormattedMessage id="delete" />}>
                                    <Button
                                      size="small"
                                      onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                      }}
                                      type="primary"
                                      icon={<DeleteOutlined />}
                                      danger
                                    ></Button>
                                  </Tooltip>
                                </Popconfirm>
                              }
                            >
                              <p>{question.description}</p>
                            </Panel>
                          );
                        })}
                      </Collapse>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          )}
        </Row>
      </ProCard>
    </PageContainer>
  );
};

export default QuestionareForm;
