import { Descriptions, Space, Typography } from 'antd';
import { format } from 'date-fns';
import React, { useCallback } from 'react';
import { FormattedMessage } from 'umi';

import TutorFeedback from '@/components/TutorFeedback';
import TypeButtonDrawer from '@/components/TypeButtonDrawer';
import { DATETIME_FORMAT } from '@/consts/dates';
import PERMISSIONS from '@/consts/permissions';
import { usePermissions } from '@/hooks/usePermissions';
import { updateQuizAttempt } from '@/services/escola-lms/gift_quiz';

interface Props {
  data: API.QuizAttemptDetails;
  refreshData: () => void;
}

const QuizReportDetailsDescription: React.FC<Props> = ({ data, refreshData }) => {
  const { checkPermission } = usePermissions();

  const handleSaveFeedback = useCallback(
    async (value: string | null) => {
      const res = await updateQuizAttempt(data.id, { tutor_feedback: value });
      if (res.success) {
        refreshData();
        return true;
      }
      return false;
    },
    [data.id, refreshData],
  );

  return (
    <Space direction="vertical">
      <Typography.Text strong>
        <FormattedMessage id="details" defaultMessage="Details" />
      </Typography.Text>
      <Descriptions style={{ width: '100%' }} bordered>
        <Descriptions.Item span={3} label={<FormattedMessage id="ID" defaultMessage="ID" />}>
          {data.id}
        </Descriptions.Item>
        <Descriptions.Item span={3} label={<FormattedMessage id="title" defaultMessage="title" />}>
          {data.topic.title}
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
        <Descriptions.Item
          span={3}
          label={<FormattedMessage id="tutor_feedback" defaultMessage="Lecturer comment" />}
        >
          <TutorFeedback
            value={data.tutor_feedback}
            editable={checkPermission(PERMISSIONS.QuizAttemptUpdate)}
            onSave={handleSaveFeedback}
          />
        </Descriptions.Item>
      </Descriptions>
    </Space>
  );
};

export default QuizReportDetailsDescription;
