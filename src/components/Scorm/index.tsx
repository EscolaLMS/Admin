import { Button, Space } from 'antd';
import React from 'react';
import SelectScorm from './select';
import UploadScorm from './upload';

import { message } from 'antd';

export const ScormSelector: React.FC<{
  value?: number | undefined;
  onChange?: (value: number | undefined) => void;
}> = ({ value, onChange }) => {
  return (
    <Space size="large" align="start">
      <SelectScorm value={value} onChange={(id) => onChange && onChange(Number(id))} />
      <UploadScorm
        onSuccess={(scorm) => onChange && onChange(scorm.id)}
        onError={() => message.error('error')}
      />
      <Button onClick={() => onChange && onChange(undefined)}>Clear selection</Button>
    </Space>
  );
};

export default ScormSelector;
