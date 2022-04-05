import { ProFormUploadButton } from '@ant-design/pro-form';
import { Form } from 'antd';
import type { UploadChangeParam } from 'antd/lib/upload';
import type { UploadFile } from 'antd/lib/upload/interface';
import { PropsWithChildren } from 'react';
import { useIntl, FormattedMessage } from 'umi';
import ConditionalWrap from 'conditional-wrap';
import type { FormProps } from 'antd';
declare const REACT_APP_API_URL: string;

type SecureUploadType<T = API.File> = {
  url: string;
  name: string;
  extra?: string;
  onChange?: (info: UploadChangeParam<UploadFile<API.DefaultResponse<T>>>) => void;
  onUpload?: (response: API.DefaultResponse<T>) => void;
  on?: (info: UploadChangeParam<UploadFile<API.DefaultResponse<T>>>) => void;
  accept?: string;
  data?: Record<string, any>;
  wrapInForm?: boolean;
  title?: string;
  formProps?: FormProps;
};

function SecureUpload<Type = API.File>({
  onChange,
  onUpload,
  url,
  name,
  extra,
  accept,
  data,
  wrapInForm = true,
  title,
  formProps,
}: PropsWithChildren<SecureUploadType<Type>>) {
  const intl = useIntl();

  if (data && data[name]) {
    // eslint-disable-next-line no-param-reassign
    delete data[name];
  }

  return (
    <ConditionalWrap
      condition={wrapInForm}
      wrap={(children: JSX.Element) => <Form {...formProps}>{children}</Form>}
    >
      <ProFormUploadButton
        title={title ? title : <FormattedMessage id="upload_click_here" />}
        placeholder={intl.formatMessage({
          id: 'upload_click_here',
        })}
        onChange={(info) => {
          if (onChange) {
            onChange(info);
          }
          if (info.file.status === 'done' && onUpload) {
            onUpload(info.file.response);
          }
        }}
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
}

export default SecureUpload;
