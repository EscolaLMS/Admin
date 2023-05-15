import React from 'react';
import ProTable, { ProColumns } from '@ant-design/pro-table';
import { FormattedMessage } from 'umi';

import { getExam } from '@/services/escola-lms/exams';

interface Props {
  exam_id: number;
}

const columns: ProColumns<API.ExamResult>[] = [
  { title: <FormattedMessage id="first_name" />, dataIndex: 'first_name' },
  { title: <FormattedMessage id="last_name" />, dataIndex: 'last_name' },
  { title: <FormattedMessage id="examResult" />, dataIndex: 'result', hideInSearch: true },
];

export const ExamResults: React.FC<Props> = ({ exam_id }) => (
  <ProTable<API.ExamResult>
    rowKey="user_id"
    search={false}
    headerTitle={<FormattedMessage id="examResults" />}
    request={async () => {
      const response = await getExam(exam_id);

      if (response.success) {
        return {
          total: response.data.results.length,
          success: true,
          data: response.data.results,
        };
      }

      return [];
    }}
    columns={columns}
  />
);
