import ProForm from '@ant-design/pro-form';
import { Button } from 'antd';
import type { UploadChangeParam } from 'antd/lib/upload';
import React from 'react';
import ReactPlayer from 'react-player';
import { FormattedMessage } from 'umi';
import SecureUploadBrowser from '../SecureUpload/browser';

export const ProFormVideoUpload: React.FC<{
  folder: string;
  action: string;
  form_name: string;
  src_name: string;
  getUploadedSrcField: (info: UploadChangeParam) => string;
  setPath: (state: object) => void;
  hideLabel?: boolean;
}> = ({ action, form_name, src_name, getUploadedSrcField, setPath, folder, hideLabel }) => {
  return (
    <ProForm.Group title={<FormattedMessage id="video" />}>
      <ProForm.Item shouldUpdate>
        {(form) => {
          return (
            <React.Fragment>
              <SecureUploadBrowser
                folder={folder}
                accept="video/*"
                name={form_name}
                url={action}
                onChange={(info) => {
                  if (info.file.status === 'done') {
                    form.setFieldsValue({ [src_name]: getUploadedSrcField(info) });
                    if (info.file.response?.success) {
                      const data = info.file.response.data;
                      setPath({
                        [`${form_name}_url`]: data[`${form_name}_url` as keyof typeof data],
                        [`${form_name}_path`]: data[`${form_name}_path` as keyof typeof data],
                      });
                    }
                  }
                }}
                hideLabel={hideLabel}
              />
              <Button
                danger
                onClick={() => [
                  setPath({
                    [`${form_name}_url`]: '',
                    [`${form_name}_path`]: '',
                  }),
                  form.setFieldsValue({ [src_name]: '' }),
                ]}
              >
                <FormattedMessage id="delete" />
              </Button>
            </React.Fragment>
          );
        }}
      </ProForm.Item>
      <ProForm.Item shouldUpdate>
        {(form) => {
          const formSrcName = form.getFieldValue(src_name);
          if (!!formSrcName) {
            return <ReactPlayer width={'auto'} height={200} url={formSrcName} controls />;
          }
          return <></>;
        }}
      </ProForm.Item>
    </ProForm.Group>
  );
};

export default ProFormVideoUpload;
