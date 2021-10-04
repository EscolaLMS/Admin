import { ProFormUploadButton } from '@ant-design/pro-form';
import { Form } from 'antd';
import React from 'react';
import type { UploadChangeParam } from 'antd/lib/upload';
import { useIntl, FormattedMessage } from 'umi';
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
  const intl = useIntl();

  if (data && data[name]) {
    // eslint-disable-next-line no-param-reassign
    delete data[name];
  }

  return (
    <ConditionalWrap
      condition={wrapInForm}
      wrap={(children: JSX.Element) => <Form>{children}</Form>}
    >
      <ProFormUploadButton
        title={<FormattedMessage id="upload_click_here" />}
        placeholder={intl.formatMessage({
          id: 'upload_click_here',
        })}
        onChange={onChange}
        // name={name}
        label={<FormattedMessage id="upload" />}
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
