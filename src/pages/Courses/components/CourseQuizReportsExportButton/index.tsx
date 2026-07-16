import { ExportOutlined } from '@ant-design/icons';
import type { ProFormInstance } from '@ant-design/pro-components';
import { Button } from 'antd';
import React from 'react';
import { FormattedMessage } from 'umi';

import { useExportQuizReports } from './useExportQuizReports';

interface Props {
  courseId: number;
  formRef: React.MutableRefObject<ProFormInstance | undefined>;
}

export const CourseQuizReportsExportButton: React.FC<Props> = ({ courseId, formRef }) => {
  const { loading, exportQuizReports } = useExportQuizReports(courseId, formRef);

  return (
    <Button type="primary" loading={loading} onClick={exportQuizReports}>
      <ExportOutlined /> <FormattedMessage id="export" defaultMessage="Export" />
    </Button>
  );
};

export default CourseQuizReportsExportButton;
