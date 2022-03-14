import TypeButtonDrawer from '@/components/TypeButtonDrawer';
import { getQuestionAnswers } from '@/services/escola-lms/questionnaire';
import ProTable, { ProColumns } from '@ant-design/pro-table';
import { useMemo } from 'react';
import { FormattedMessage, useIntl } from 'umi';

const TableColumns: ProColumns<API.QuestionAnswer>[] = [
  {
    title: <FormattedMessage id="ID" defaultMessage="ID" />,
    dataIndex: 'id',
    hideInSearch: true,
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
  },
  {
    title: <FormattedMessage id="user_id" defaultMessage="user_id" />,
    dataIndex: 'user_id',
    hideInSearch: true,
    render: (_, record) => <TypeButtonDrawer type={'App\\Models\\User'} type_id={record.user_id} />,
  },

  {
    title: <FormattedMessage id="sum_rate" defaultMessage="sum_rate" />,
    dataIndex: 'rate',
    hideInSearch: true,
  },
];

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
  return (
    <ProTable<API.QuestionAnswer, API.PageParams & { question_id?: number }>
      headerTitle={intl.formatMessage({
        id: 'answers',
        defaultMessage: 'answers',
      })}
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
