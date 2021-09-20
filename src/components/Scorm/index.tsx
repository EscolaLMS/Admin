import { Button, Space } from 'antd';
import React from 'react';
import SelectScorm from './select';
import UploadScorm from './upload';
import { useIntl, FormattedMessage } from 'umi';
import { message } from 'antd';

export const ScormSelector: React.FC<{
  value?: number | undefined;
  onChange?: (value: number | undefined) => void;
}> = ({ value, onChange }) => {
  const intl = useIntl();
  return (
    <Space size="large" align="start">
      <SelectScorm value={value} onChange={(id) => onChange && onChange(Number(id))} />
      <UploadScorm
        onSuccess={(scorm) => onChange && onChange(scorm.id)}
        onError={() =>
          message.error(
            intl.formatMessage({
              id: 'error',
            }),
          )
        }
      />
      <Button onClick={() => onChange && onChange(undefined)}>
        <FormattedMessage id="clear_selection" />
      </Button>
    </Space>
  );
};

export default ScormSelector;
