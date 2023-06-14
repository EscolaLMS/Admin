import React, { useCallback, useState } from 'react';
import { FormattedMessage, useIntl } from 'umi';
import { Button, message, Tooltip } from 'antd';
import { FileOutlined } from '@ant-design/icons';

import { getPCGFileData } from '@/services/escola-lms/pcg-export';

interface Props {
  group_id: number;
}

export const ExportPCGFileButton: React.FC<Props> = ({ group_id }) => {
  const [loading, setLoading] = useState(false);
  const intl = useIntl();

  const onClick = useCallback(async () => {
    try {
      setLoading(true);
      const response = await getPCGFileData(group_id);

      if (!response.success) {
        message.error(response.message);
        return;
      }

      window.open(response.data.url, '_blank', 'noopener noreferrer');
    } catch (e) {
      message.error(intl.formatMessage({ id: 'error' }));
    } finally {
      setLoading(false);
    }
  }, [group_id]);

  return (
    <Tooltip title={<FormattedMessage id="exportData" />}>
      <Button loading={loading} onClick={onClick} icon={<FileOutlined />} />
    </Tooltip>
  );
};
