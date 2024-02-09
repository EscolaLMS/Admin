import SecureUploadBrowser from '@/components/SecureUpload/browser';
import ProForm from '@ant-design/pro-form';
import type { UploadChangeParam } from 'antd/lib/upload';
import React from 'react';
import { FormattedMessage } from 'umi';

export const ProFormAudioUpload: React.FC<{
  folder: string;
  action: string;
  form_name: string;
  src_name: string;
  getUploadedSrcField: (info: UploadChangeParam) => string;
}> = ({ action, form_name, src_name, getUploadedSrcField, folder }) => {
  return (
    <ProForm.Group title={<FormattedMessage id="audio" />}>
      <ProForm.Item shouldUpdate>
        {(form) => {
          return (
            <audio controls>
              <source src={form.getFieldValue(src_name)} />
            </audio>
          );
        }}
      </ProForm.Item>
      <ProForm.Item shouldUpdate>
        {(form) => {
          return (
            <SecureUploadBrowser
              folder={folder}
              accept="video/*"
              name={form_name}
              url={action}
              onChange={(info) => {
                if (info.file.status === 'done') {
                  form.setFieldsValue({ [src_name]: getUploadedSrcField(info) });
                }
              }}
            />
          );
        }}
      </ProForm.Item>
    </ProForm.Group>
  );
};

export default ProFormAudioUpload;
