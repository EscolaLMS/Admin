import { ProFormUploadButton } from '@ant-design/pro-form';
import React from 'react';

import type { UploadChangeParam } from 'antd/lib/upload';

export const SecureUpload: React.FC<{
  url: string;
  name: string;
  extra?: string;
  onChange?: (info: UploadChangeParam) => void;
  accept?: string;
}> = ({ onChange, url, name, extra, accept }) => {
  return (
    <ProFormUploadButton
      onChange={onChange}
      name={name}
      label="Upload"
      max={2}
      fieldProps={{
        accept,
        name,
        headers: { Authorization: `Bearer ${localStorage.getItem('TOKEN')}` },
      }}
      action={`${REACT_APP_API_URL}${url}`}
      extra={extra}
    />
  );
};

export default SecureUpload;
