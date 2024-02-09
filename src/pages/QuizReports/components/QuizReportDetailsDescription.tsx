import { Descriptions, Space, Typography } from 'antd';
import { format } from 'date-fns';
import React from 'react';
import { FormattedMessage } from 'umi';

import TypeButtonDrawer from '@/components/TypeButtonDrawer';
import { DATETIME_FORMAT } from '@/consts/dates';

interface Props {
  data: API.QuizAttemptDetails;
}

const QuizReportDetailsDescription: React.FC<Props> = ({ data }) => (
  <Space direction="vertical">
    <Typography.Text strong>
      <FormattedMessage id="details" defaultMessage="Details" />
    </Typography.Text>
    <Descriptions style={{ width: '100%' }} bordered>
      <Descriptions.Item span={3} label={<FormattedMessage id="ID" defaultMessage="ID" />}>
        {data.id}
      </Descriptions.Item>
      <Descriptions.Item
        span={1.5}
        label={<FormattedMessage id="student" defaultMessage="Student" />}
      >
        <TypeButtonDrawer
          type="EscolaLms\Core\Models\User"
          type_id={data.user_id}
          text={
            data?.user?.first_name && data?.user?.last_name
              ? `${data.user.first_name} ${data.user.last_name}`
              : undefined
          }
        />
      </Descriptions.Item>
      <Descriptions.Item
        span={1.5}
        label={<FormattedMessage id="gift_quiz" defaultMessage="GIFT Quiz" />}
      >
        <TypeButtonDrawer
          type="EscolaLms\TopicTypeGift\Models\GiftQuiz"
          type_id={data.topic_gift_quiz_id}
        />
      </Descriptions.Item>
      <Descriptions.Item
        span={1.5}
        label={<FormattedMessage id="started_at" defaultMessage="Started at Date" />}
      >
        {format(new Date(data.started_at), DATETIME_FORMAT)}
      </Descriptions.Item>
      <Descriptions.Item
        span={1.5}
        label={<FormattedMessage id="end_at" defaultMessage="End at Date" />}
      >
        {data.end_at ? format(new Date(data.end_at), DATETIME_FORMAT) : '-'}
      </Descriptions.Item>
      <Descriptions.Item
        span={1.5}
        label={<FormattedMessage id="result_score" defaultMessage="Result score" />}
      >
        {typeof data.result_score === 'number' ? data.result_score : '-'}
      </Descriptions.Item>
      <Descriptions.Item
        span={1.5}
        label={<FormattedMessage id="max_score" defaultMessage="Max score" />}
      >
        {data.max_score}
      </Descriptions.Item>
    </Descriptions>
  </Space>
);

export default QuizReportDetailsDescription;
