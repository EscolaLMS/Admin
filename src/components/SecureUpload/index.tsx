import { ProFormUploadButton } from '@ant-design/pro-form';
import { Form } from 'antd';
import React from 'react';
import type { UploadChangeParam } from 'antd/lib/upload';

import ConditionalWrap from 'conditional-wrap';

export const SecureUpload: React.FC<{
  url: string;
  name: string;
  extra?: string;
  onChange?: (info: UploadChangeParam) => void;
  accept?: string;
  data?: Record<string, any>;
  wrapInForm?: boolean;
}> = ({ onChange, url, name, extra, accept, data, wrapInForm = true }) => {
  return (
    <ConditionalWrap
      condition={wrapInForm}
      wrap={(children: JSX.Element) => <Form>{children}</Form>}
    >
      <ProFormUploadButton
        title={'Click here to upload'}
        placeholder={'Click here to upload'}
        onChange={onChange}
        name={name}
        label="Upload"
        max={2}
        fieldProps={{
          data,
          accept,
          name,
          headers: { Authorization: `Bearer ${localStorage.getItem('TOKEN')}` },
        }}
        action={`${REACT_APP_API_URL}${url}`}
        extra={extra}
      />
    </ConditionalWrap>
  );
};

export default SecureUpload;
