import React, { useCallback, useState } from 'react';
import { FormattedMessage } from 'umi';
import { Button } from 'antd';
import { ExportOutlined } from '@ant-design/icons';

import { exportStatForTopic } from '@/services/escola-lms/reports';

interface Props {
  topic_id: number | undefined;
  stat: API.TopicStatsKey;
}

export const ExportTopicStatsButton: React.FC<Props> = ({ topic_id, stat }) => {
  const [loading, setLoading] = useState(false);

  const onClickFactory = useCallback(
    (topicId?: number) => async () => {
      if (!topicId) return;

      setLoading(true);
      try {
        const response = await exportStatForTopic(topicId, stat);

        if (response instanceof Blob) {
          const downloadLink = document.createElement('a');
          downloadLink.href = window.URL.createObjectURL(response);
          downloadLink.download = `${stat}_${topicId}.xlsx`;
          document.body.appendChild(downloadLink);
          downloadLink.click();
          document.body.removeChild(downloadLink);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    },
    [stat],
  );

  return (
    <Button
      type="primary"
      loading={loading}
      disabled={topic_id === undefined}
      onClick={onClickFactory(topic_id)}
    >
      <ExportOutlined /> <FormattedMessage id="export" />
    </Button>
  );
};
