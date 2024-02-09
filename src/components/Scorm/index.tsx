import { Button, Space } from 'antd';
import React from 'react';
import { FormattedMessage } from 'umi';
import SelectScorm from './select';

export const ScormSelector: React.FC<{
  value?: number | undefined;
  onChange?: (value: number | undefined) => void;
}> = ({ value, onChange }) => {
  // const intl = useIntl();
  return (
    <Space size="large" align="start">
      <SelectScorm value={value} onChange={(id) => onChange && onChange(Number(id))} />
      {/*
      // TODO this isn't working 
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
      */}
      <Button onClick={() => onChange && onChange(undefined)}>
        <FormattedMessage id="clear_selection" />
      </Button>
    </Space>
  );
};

export default ScormSelector;
