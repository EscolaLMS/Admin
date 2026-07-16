import type { ProFormInstance } from '@ant-design/pro-components';
import { message } from 'antd';
import type { MutableRefObject } from 'react';
import { useCallback, useState } from 'react';
import { useIntl } from 'umi';

import { exportQuizAttempts } from '@/services/escola-lms/gift_quiz';

export const useExportQuizReports = (
  courseId: number,
  formRef: MutableRefObject<ProFormInstance | undefined>,
) => {
  const [loading, setLoading] = useState(false);
  const intl = useIntl();

  const exportQuizReports = useCallback(async () => {
    setLoading(true);
    try {
      const response = await exportQuizAttempts({
        course_id: courseId,
        // Resolved at click time so the export always matches the current filter selection,
        // regardless of when the ProTable last re-rendered.
        topic_gift_quiz_id: formRef.current?.getFieldValue('topic_gift_quiz_id'),
      });

      // A resolved blob request always yields a Blob; errors reject into the catch below.
      if (response instanceof Blob) {
        const downloadLink = document.createElement('a');
        downloadLink.href = window.URL.createObjectURL(response);
        downloadLink.download = `quiz_results_${courseId}.xlsx`;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
        window.URL.revokeObjectURL(downloadLink.href);
      }
    } catch (error) {
      // The global errorHandler can't surface blob error bodies, so show an explicit message here.
      console.error(error);
      message.error(intl.formatMessage({ id: 'export_failed', defaultMessage: 'Export failed' }));
    } finally {
      setLoading(false);
    }
  }, [courseId, formRef, intl]);

  return { loading, exportQuizReports };
};

export default useExportQuizReports;
