import ProTable, { ProColumns } from '@ant-design/pro-table';
import { FormattedMessage, useIntl } from 'umi';

const TableColumns: ProColumns<API.QuestionAnswer>[] = [
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

const QuestionAnswers = () => {
  const intl = useIntl();
  return (
    <ProTable
      headerTitle={intl.formatMessage({
        id: 'answers',
        defaultMessage: 'answers',
      })}
      rowKey="id"
      search={false}
      dataSource={[]}
      columns={[...TableColumns]}
    />
  );
};

export default QuestionAnswers;
