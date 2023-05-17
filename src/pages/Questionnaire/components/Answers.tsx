import TypeButtonDrawer from '@/components/TypeButtonDrawer';
import {
  changeQuestionareVisibility,
  getQuestionAnswers,
} from '@/services/escola-lms/questionnaire';
import ProForm, { ProFormSwitch } from '@ant-design/pro-form';
import type { ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { Form, message } from 'antd';
import { useMemo } from 'react';
import { FormattedMessage, useIntl } from 'umi';

const QuestionVisibilitySwitch: React.FC<{
  record: API.QuestionAnswer;
}> = ({ record }) => {
  const [form] = Form.useForm();
  const intl = useIntl();

  const formProps: Partial<React.ComponentProps<typeof ProForm>> = useMemo(
    () => ({
      onValuesChange: (_: any, values) => {
        const { visible_on_front } = values as { visible_on_front: boolean };

        changeQuestionareVisibility(record.id, {
          visible_on_front,
        })
          .then((response) => {
            message.success(
              <FormattedMessage
                id="question_answer_visibility_changed"
                defaultMessage={response.message}
              />,
            );
          })
          .catch(() => message.error(<FormattedMessage id="error" defaultMessage="error" />));
      },
      submitter: {
        render: () => null,
      },
    }),
    [],
  );

  return (
    <ProForm form={form} {...formProps}>
      <ProFormSwitch
        name="visible_on_front"
        initialValue={record.visible_on_front}
        checkedChildren={intl.formatMessage({
          id: 'visible',
          defaultMessage: 'visible',
        })}
        unCheckedChildren={intl.formatMessage({
          id: 'hidden',
          defaultMessage: 'hidden',
        })}
      />
    </ProForm>
  );
};

const QuestionAnswers: React.FC<{ questionnaireId: number; questions?: API.Question[] }> = ({
  questionnaireId,
  questions,
}) => {
  const questionValueType = useMemo(
    () =>
      questions &&
      questions.reduce(
        (a, value) => ({
          ...a,
          [value.id]: value.title,
        }),
        {},
      ),
    [questions],
  );

  const searchSelect: ProColumns<API.QuestionAnswer>[] = [
    {
      title: <FormattedMessage id="questions" defaultMessage="questions" />,
      dataIndex: 'question_id',
      hideInSearch: false,
      valueEnum: questionValueType,
      valueType: 'select',
    },
  ];

  const intl = useIntl();

  const TableColumns: ProColumns<API.QuestionAnswer>[] = [
    {
      title: <FormattedMessage id="ID" defaultMessage="ID" />,
      dataIndex: 'id',
      hideInSearch: true,
    },
    {
      title: <FormattedMessage id="updated_at" defaultMessage="updated_at" />,
      dataIndex: 'updated_at',
      hideInSearch: false,
      render: (_, record) =>
        record.updated_at ? new Date(record.updated_at).toLocaleString() : '-',
      sorter: {
        compare: (a, b) =>
          a.updated_at && b.updated_at
            ? new Date(a.updated_at).getTime() - new Date(b.updated_at).getTime()
            : 0,
      },
    },
    {
      title: <FormattedMessage id="question_title" defaultMessage="question_title" />,
      dataIndex: 'question_title',
      hideInSearch: true,
    },
    {
      title: <FormattedMessage id="note" defaultMessage="note" />,
      dataIndex: 'note',
      hideInSearch: true,
      render: (_, record) =>
        record.note && record.note?.length > 64 ? record.note?.slice(0, 64) + '...' : record.note,
    },
    {
      title: <FormattedMessage id="user" defaultMessage="user" />,
      dataIndex: 'user_id',
      hideInSearch: true,
      render: (_, record) => (
        <div>
          <TypeButtonDrawer type={'App\\Models\\User'} type_id={record.user_id} />
          <p className="list-paragraph">{record.user?.name}</p>
          <p className="list-paragraph">{record.user?.email}</p>
        </div>
      ),
    },

    {
      title: <FormattedMessage id="sum_rate" defaultMessage="sum_rate" />,
      dataIndex: 'rate',
      hideInSearch: true,
    },
    {
      title: <FormattedMessage id="show_hide_on_front" defaultMessage="show_hide_on_front" />,
      dataIndex: 'visible_on_front',
      hideInSearch: true,
      render: (_, record) => <QuestionVisibilitySwitch record={record} />,
    },
  ];

  return (
    <ProTable<API.QuestionAnswer, API.PageParams & { question_id?: number }>
      headerTitle={intl.formatMessage({
        id: 'answers',
        defaultMessage: 'answers',
      })}
      search={{
        layout: 'vertical',
      }}
      rowKey="id"
      request={({ pageSize, current, question_id }) => {
        return getQuestionAnswers(questionnaireId, { pageSize, current, question_id }).then(
          (response) => {
            if (response.success) {
              return {
                data: response.data,
                success: true,
              };
            }
            return [];
          },
        );
      }}
      columns={[...TableColumns, ...searchSelect]}
    />
  );
};

export default QuestionAnswers;
