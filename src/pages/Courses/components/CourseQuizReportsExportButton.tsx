import { ExportOutlined } from '@ant-design/icons';
import { Button, message } from 'antd';
import React, { useCallback, useState } from 'react';
import { FormattedMessage, useIntl } from 'umi';

import { exportQuizAttempts } from '@/services/escola-lms/gift_quiz';

interface Props {
  courseId: number;
  topicGiftQuizId?: number;
}

export const CourseQuizReportsExportButton: React.FC<Props> = ({ courseId, topicGiftQuizId }) => {
  const [loading, setLoading] = useState(false);
  const intl = useIntl();

  const onClick = useCallback(async () => {
    setLoading(true);
    try {
      const response = await exportQuizAttempts({
        course_id: courseId,
        topic_gift_quiz_id: topicGiftQuizId,
      });

      if (response instanceof Blob) {
        const downloadLink = document.createElement('a');
        downloadLink.href = window.URL.createObjectURL(response);
        downloadLink.download = `quiz_results_${courseId}.xlsx`;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
        window.URL.revokeObjectURL(downloadLink.href);
      } else {
        message.error(intl.formatMessage({ id: 'export_failed', defaultMessage: 'Export failed' }));
      }
    } catch (error) {
      console.error(error);
      message.error(intl.formatMessage({ id: 'export_failed', defaultMessage: 'Export failed' }));
    } finally {
      setLoading(false);
    }
  }, [courseId, topicGiftQuizId, intl]);

  return (
    <Button type="primary" loading={loading} onClick={onClick}>
      <ExportOutlined /> <FormattedMessage id="export" defaultMessage="Export" />
    </Button>
  );
};

export default CourseQuizReportsExportButton;
