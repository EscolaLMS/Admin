import React, { useCallback, useEffect, useState } from 'react';
import { format } from 'date-fns';
import { useParams, FormattedMessage } from 'umi';
import { Col, Collapse, Row, Spin, Typography } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import ProCard from '@ant-design/pro-card';

import TypeButtonDrawer from '@/components/TypeButtonDrawer';
import { DATETIME_FORMAT } from '@/consts/dates';
import { getQuizAttemptDetails } from '@/services/escola-lms/gift_quiz';

const DetailsCollapse: React.FC<{ data: API.QuizAttemptDetails }> = ({ data }) => (
  <Collapse defaultActiveKey={['1']}>
    <Collapse.Panel key="1" header={<FormattedMessage id="details" defaultMessage="Details" />}>
      <Row>
        <Col span={6}>
          <Typography.Paragraph strong>
            <FormattedMessage id="ID" defaultMessage="ID" />
          </Typography.Paragraph>
        </Col>
        <Col span={6}>
          <Typography.Paragraph>{data.id}</Typography.Paragraph>
        </Col>
      </Row>
      <Row>
        <Col span={6}>
          <Typography.Paragraph strong>
            <FormattedMessage id="started_at" defaultMessage="Started at Date" />
          </Typography.Paragraph>
        </Col>
        <Col span={6}>
          <Typography.Paragraph>
            {format(new Date(data.started_at), DATETIME_FORMAT)}
          </Typography.Paragraph>
        </Col>
        <Col span={6}>
          <Typography.Paragraph strong>
            <FormattedMessage id="end_at" defaultMessage="End at Date" />
          </Typography.Paragraph>
        </Col>
        <Col span={6}>
          <Typography.Paragraph>
            {data.end_at ? format(new Date(data.end_at), DATETIME_FORMAT) : '-'}
          </Typography.Paragraph>
        </Col>
      </Row>
      <Row>
        <Col span={6}>
          <Typography.Paragraph strong>
            <FormattedMessage id="result_score" defaultMessage="Result score" />
          </Typography.Paragraph>
        </Col>
        <Col span={6}>
          <Typography.Paragraph>
            {typeof data.result_score === 'number' ? data.result_score : '-'}
          </Typography.Paragraph>
        </Col>
        <Col span={6}>
          <Typography.Paragraph strong>
            <FormattedMessage id="max_score" defaultMessage="Max score" />
          </Typography.Paragraph>
        </Col>
        <Col span={6}>
          <Typography.Paragraph>{data.max_score}</Typography.Paragraph>
        </Col>
      </Row>
      <Row>
        <Col span={6}>
          <Typography.Paragraph strong>
            <FormattedMessage id="student" defaultMessage="Student" />
          </Typography.Paragraph>
        </Col>
        <Col span={6}>
          <TypeButtonDrawer type="EscolaLms\Core\Models\User" type_id={data.user_id} />
        </Col>
        <Col span={6}>
          <Typography.Paragraph strong>
            <FormattedMessage id="gift_quiz" defaultMessage="GIFT Quiz" />
          </Typography.Paragraph>
        </Col>
        <Col span={6}>
          <TypeButtonDrawer
            type="EscolaLms\TopicTypeGift\Models\GiftQuiz"
            type_id={data.topic_gift_quiz_id}
          />
        </Col>
      </Row>
    </Collapse.Panel>
  </Collapse>
);

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
      <ProCard>
        {!data && loading && <Spin />}
        {!data && error && <pre>{JSON.stringify(error)}</pre>}
        {data && (
          <>
            <DetailsCollapse data={data} />
          </>
        )}
      </ProCard>
    </PageContainer>
  );
};

export default QuizDetails;
