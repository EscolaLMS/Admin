import { useCallback, useMemo, useRef, useState } from 'react';
import { useIntl, FormattedMessage } from 'umi';
import { message, Button, Tooltip, Popconfirm, Form, Modal } from 'antd';
import { ProFormText, ProFormSwitch } from '@ant-design/pro-form';
import { addQuestion, deleteQuestion } from '@/services/escola-lms/questionnaire';
import ProForm from '@ant-design/pro-form';
import { DeleteOutlined, EyeOutlined } from '@ant-design/icons';
import ProTable from '@ant-design/pro-table';
import type { ActionType, ProColumns } from '@ant-design/pro-table';

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
    sorter: true,
  },
  {
    title: <FormattedMessage id="description" defaultMessage="description" />,
    dataIndex: 'description',
    hideInSearch: true,
  },
];

const AnswersColumns: ProColumns<API.QuestionAnswer>[] = [
  {
    title: <FormattedMessage id="id" defaultMessage="id" />,
    dataIndex: 'id',
    hideInSearch: true,
  },
  {
    title: <FormattedMessage id="user_id" defaultMessage="user_id" />,
    dataIndex: 'user_id',
    hideInSearch: true,
  },
  {
    title: <FormattedMessage id="note" defaultMessage="note" />,
    dataIndex: 'note',
    hideInSearch: true,
  },
  {
    title: <FormattedMessage id="sum_rate" defaultMessage="sum_rate" />,
    dataIndex: 'rate',
    hideInSearch: true,
  },
];

const QuestionForm: React.FC<{
  questionnaireId: number | undefined;
  questions?: API.Question[];
  fetchData: () => void;
}> = ({ questionnaireId, questions, fetchData }) => {
  const intl = useIntl();
  const [form] = Form.useForm();
  const [showAnswers, setShowAnswers] = useState(false);
  const [answers, setAnswers] = useState<{ title: string | null; answers: any }>({
    title: null,
    answers: [],
  });
  const actionRef = useRef<ActionType>();

  const questionProps = useMemo(
    () => ({
      onFinish: async (values: API.Question) => {
        try {
          const request = await addQuestion({
            ...values,
            questionnaire_id: questionnaireId,
            // TODO: position?
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
    [questions, questionnaireId],
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
    [actionRef, intl],
  );

  return (
    <>
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
        />{' '}
        <ProFormSwitch
          initialValue={true}
          name="active"
          label={<FormattedMessage id="is_active" defaultMessage="is_active" />}
        />
      </ProForm>
      <div className="table-wrapper">
        <ProTable
          headerTitle={intl.formatMessage({
            id: 'question_list',
            defaultMessage: 'question_list',
          })}
          actionRef={actionRef}
          rowKey="id"
          search={false}
          dataSource={questions && questions}
          columns={[
            ...TableColumns,
            {
              title: <FormattedMessage id="options" defaultMessage="options" />,
              dataIndex: 'option',
              valueType: 'option',

              render: (_, record) => [
                <Button
                  key={'show answers'}
                  disabled={record.answers?.length === 0}
                  type="primary"
                  icon={<EyeOutlined />}
                  onClick={() => {
                    setAnswers({
                      title: record.title,
                      answers: record.answers,
                    });
                    setShowAnswers(true);
                  }}
                />,
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

        <Modal
          width={'800px'}
          visible={showAnswers}
          title={answers.title}
          onOk={() => setShowAnswers(false)}
          onCancel={() => setShowAnswers(false)}
        >
          <ProTable
            headerTitle={intl.formatMessage({
              id: 'answers',
              defaultMessage: 'answers',
            })}
            actionRef={actionRef}
            rowKey="id"
            search={false}
            dataSource={answers.answers}
            columns={[...AnswersColumns]}
          />
        </Modal>
      </div>
    </>
  );
};

export default QuestionForm;
