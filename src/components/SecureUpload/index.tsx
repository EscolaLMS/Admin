import { ProFormUploadButton } from '@ant-design/pro-form';
import type { FormProps } from 'antd';
import { Form } from 'antd';
import type { UploadChangeParam } from 'antd/lib/upload';
import type { UploadFile } from 'antd/lib/upload/interface';
import ConditionalWrap from 'conditional-wrap';
import type { PropsWithChildren } from 'react';
import { useState } from 'react';
import { FormattedMessage, useIntl } from 'umi';
import { formatUploadError } from './uploadError';
declare const REACT_APP_API_URL: string;

export type SecureUploadType<T = API.File> = {
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
  maxFiles?: number;
  clearListAfterUpload?: boolean;
  hideLabel?: boolean;
  disabled?: boolean;
  showUploadList?: boolean;
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
  maxFiles,
  clearListAfterUpload,
  hideLabel,
  disabled,
  showUploadList,
}: PropsWithChildren<SecureUploadType<Type>>) {
  const [infoState, setInfoState] = useState<UploadChangeParam<UploadFile<any>>>();
  const intl = useIntl();

  // antd shows a string `response` as the failed item's tooltip; without it the tooltip is
  // rc-upload's untranslated "cannot post <url> <status>". Only the displayed list is changed,
  // consumers still get the original response in `onChange`.
  const withTranslatedError = (info: UploadChangeParam<UploadFile<any>>) => {
    const response = formatUploadError(intl, info.file.response);
    return {
      ...info,
      fileList: info.fileList.map((file) =>
        file.uid === info.file.uid ? { ...file, response } : file,
      ),
    };
  };

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
        title={
          title
            ? title
            : ` ${intl.formatMessage({
                id: 'upload_click_here',
              })}`
        }
        placeholder={intl.formatMessage({
          id: 'upload_click_here',
        })}
        label={!hideLabel && <FormattedMessage id="upload" />}
        max={maxFiles ?? 2}
        fieldProps={{
          data,
          accept,
          name,
          showUploadList,
          headers: { Authorization: `Bearer ${localStorage.getItem('TOKEN')}` },
          onChange: (info) => {
            setInfoState(info.file.status === 'error' ? withTranslatedError(info) : info);
            if (onChange) {
              onChange(info);
            }
            if (info.file.status === 'done') {
              if (onUpload) {
                onUpload(info.file.response);
              }
              if (clearListAfterUpload) {
                setInfoState(undefined);
              }
            }
          },
        }}
        action={`${window.REACT_APP_API_URL || REACT_APP_API_URL}${url}`}
        extra={extra}
        fileList={infoState?.fileList}
        disabled={disabled}
      />
    </ConditionalWrap>
  );
}

export default SecureUpload;
