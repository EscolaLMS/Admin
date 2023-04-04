import React, { useCallback, useEffect, useState } from 'react';
import { FormattedMessage, useParams } from 'umi';
import { Collapse, Space, Spin, Typography } from 'antd';
import ProCard from '@ant-design/pro-card';
import { PageContainer } from '@ant-design/pro-layout';

import { getQuizAttemptDetails } from '@/services/escola-lms/gift_quiz';
import QuizReportDetailsDescription from './components/QuizReportDetailsDescription';
import QuizReportQuestionDetails from './components/QuizReportQuestionDetails';
import QuizReportQuestionAnswerDetails from './components/QuizReportQuestionAnswerDetails';

function useQuizAttempt() {
  const { reportId } = useParams<{ reportId?: string }>();
  const [data, setData] = useState<API.QuizAttemptDetails>();
  const [error, setError] = useState<Record<string, string[]>>();
  const [loading, setLoading] = useState(false);

  const fetchQuizAttempt = useCallback(async () => {
    if (!reportId) return;
    setLoading(true);
    try {
      const response = await getQuizAttemptDetails(reportId);
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

  return (
    <PageContainer
      title={<FormattedMessage id="quiz_report_details" defaultMessage="Quiz Report Details" />}
    >
      <ProCard bodyStyle={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {!data && loading && <Spin />}
        {!data && error && <pre>{JSON.stringify(error)}</pre>}
        {data && (
          <>
            <QuizReportDetailsDescription data={data} />
            <Space direction="vertical">
              <Typography.Text strong>
                <FormattedMessage id="questions" defaultMessage="Questions" />
              </Typography.Text>
              <Collapse style={{ width: '100%' }}>
                {data.questions.map((question) => (
                  <Collapse.Panel key={question.id} header={question.question}>
                    <QuizReportQuestionDetails question={question} />
                    <QuizReportQuestionAnswerDetails
                      answerObj={data?.answers.find(
                        (answerObj) => answerObj.topic_gift_question_id === question.id,
                      )}
                    />
                  </Collapse.Panel>
                ))}
              </Collapse>
            </Space>
          </>
        )}
      </ProCard>
    </PageContainer>
  );
};

export default QuizDetails;
