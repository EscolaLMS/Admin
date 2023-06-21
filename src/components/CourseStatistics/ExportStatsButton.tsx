import React, { useCallback, useState } from 'react';
import { FormattedMessage } from 'umi';
import { Button } from 'antd';
import { ExportOutlined } from '@ant-design/icons';

import { exportStatForCourse } from '@/services/escola-lms/reports';

interface Props {
  course_id: number;
  stat?: API.ExportStatForCourseStat;
}

export const ExportStatsButton: React.FC<Props> = ({
  course_id,
  stat = 'EscolaLms\\Reports\\Stats\\Course\\FinishedTopics',
}) => {
  const [loading, setLoading] = useState(false);

  const onClickFactory = useCallback(
    (courseId: number) => async () => {
      setLoading(true);
      try {
        const response = await exportStatForCourse(courseId, {
          stat,
        });

        if (response instanceof Blob) {
          const downloadLink = document.createElement('a');
          downloadLink.href = window.URL.createObjectURL(response);
          downloadLink.download = `finished_topics_${course_id}.xlsx`;
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
    <Button type="primary" loading={loading} onClick={onClickFactory(course_id)}>
      <ExportOutlined /> <FormattedMessage id="export" />
    </Button>
  );
};
