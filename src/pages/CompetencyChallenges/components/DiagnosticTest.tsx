import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useIntl, FormattedMessage, useModel } from 'umi';
import { Divider, Space, Spin } from 'antd';
import ProForm, { ProFormDigit, ProFormGroup } from '@ant-design/pro-form';

import { Table } from '@/components/GiftQuizQuestions/table';
import { getGiftQuiz, updateGiftQuiz } from '@/services/escola-lms/gift_quiz';

interface Props {
  data?: API.CompetencyChallenge;
}

interface FormData {
  max_attempts: number;
  max_execution_time: number;
}

export const DiagnosticTest: React.FC<Props> = ({ data }) => {
  const [loading, setLoading] = useState(false);
  const [quizData, setQuizData] = useState<API.GiftQuiz>();
  const intl = useIntl();

  const { initialState } = useModel('@@initialState');

  const categoryEnabledDepth = useMemo(() => {
    const configDepth =
      initialState?.publicConfig?.global?.competencyChallengeQuestionCategoryEnabledDepth;

    return configDepth === undefined ? 0 : +configDepth;
  }, []);

  const fetchQuiz = useCallback(() => {
    if (data?.quiz_id === undefined) return;

    setLoading(true);
    getGiftQuiz(data?.quiz_id)
      .then((res) => {
        if (res.success) {
          setQuizData(res.data);
        }
      })
      .finally(() => setLoading(false));
  }, [data?.quiz_id]);

  const onFormFinish = useCallback(async (formData: FormData) => {
    if (data?.quiz_id === undefined) return;

    setLoading(true);
    updateGiftQuiz(data?.quiz_id, { ...formData, value: 'diagnostic-test' })
      .then((res) => {
        if (res.success) {
          setQuizData(res.data);
        }
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    fetchQuiz();
  }, [fetchQuiz]);

  if (!quizData) return <Spin />;

  return (
    <div style={{ position: 'relative', paddingBottom: '64px' }}>
      <ProForm<FormData>
        submitter={{
          render: (_p, [reset, submit]) => (
            <Space style={{ position: 'absolute', bottom: 0, left: 0 }}>
              {reset}
              {submit}
            </Space>
          ),
        }}
        initialValues={quizData}
        onFinish={onFormFinish}
      >
        <ProFormGroup>
          <ProFormDigit
            name="max_attempts"
            label={<FormattedMessage id="max_attempts" />}
            tooltip={<FormattedMessage id="max_attempts" />}
            placeholder={intl.formatMessage({
              id: 'max_attempts',
              defaultMessage: 'max_attempts',
            })}
          />
          <ProFormDigit
            name="max_execution_time"
            label={<FormattedMessage id="max_execution_time" />}
            tooltip={<FormattedMessage id="max_execution_time" />}
            placeholder={intl.formatMessage({
              id: 'max_execution_time',
              defaultMessage: 'max_execution_time',
            })}
          />
        </ProFormGroup>
      </ProForm>
      <Divider />
      <Table
        questions={quizData.questions}
        quizId={quizData.id}
        onAdded={fetchQuiz}
        onEdited={fetchQuiz}
        onRemoved={fetchQuiz}
        tableHeader={<FormattedMessage id="questions" />}
        tableLoading={loading}
        questionsCategory={{ enabledDepth: categoryEnabledDepth }}
      />
    </div>
  );
};
