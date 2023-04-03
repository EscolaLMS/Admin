import React, { useCallback, useEffect, useState } from 'react';
import { useParams, FormattedMessage } from 'umi';
import { Spin } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import ProCard from '@ant-design/pro-card';

import { getQuizAttempt } from '@/services/escola-lms/gift_quiz';

function useQuizAttempt() {
  const { reportId } = useParams<{ reportId?: string }>();
  const [data, setData] = useState<API.QuizAttempt>();
  const [error, setError] = useState<Record<string, string[]>>();
  const [loading, setLoading] = useState(false);

  const fetchQuizAttempt = useCallback(async () => {
    if (!reportId) return;
    setLoading(true);
    try {
      const response = await getQuizAttempt(reportId);
      if (response.success) {
        setData(response.data);
      } else {
        setError(response.errors);
      }
    } catch (e) {
      setError((prev) => ({ ...prev, message: ['Error during fetching occurred!', e as string] }));
    } finally {
      setLoading(false);
    }
  }, [reportId]);

  useEffect(() => {
    fetchQuizAttempt();
  }, [fetchQuizAttempt]);

  return { data, error, loading, fetchQuizAttempt };
}

const QuizDetails: React.FC = () => {
  const { data, error, loading } = useQuizAttempt();

  if (!data && loading) {
    return <Spin />;
  }

  return (
    <PageContainer
      title={<FormattedMessage id="quiz_report_details" defaultMessage="Quiz Report Details" />}
    >
      <ProCard>
        {data && <pre>{JSON.stringify(data)}</pre>}
        {error && <pre>{JSON.stringify(error)}</pre>}
      </ProCard>
    </PageContainer>
  );
};

export default QuizDetails;
