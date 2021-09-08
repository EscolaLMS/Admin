import React from 'react';
import ProForm from '@ant-design/pro-form';
import SecureUpload from '@/components/SecureUpload';
import type { UploadChangeParam } from 'antd/lib/upload';
import ReactPlayer from 'react-player';
import { FormattedMessage } from 'umi';

export const ProFormVideoUpload: React.FC<{
  action: string;
  form_name: string;
  src_name: string;
  getUploadedSrcField: (info: UploadChangeParam) => string;
}> = ({ action, form_name, src_name, getUploadedSrcField }) => {
  return (
    <ProForm.Group title={<FormattedMessage id="video" />}>
      <ProForm.Item shouldUpdate>
        {(form) => {
          return <ReactPlayer url={form.getFieldValue(src_name)} controls />;
        }}
      </ProForm.Item>
      <ProForm.Item shouldUpdate>
        {(form) => {
          return (
            <SecureUpload
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

export default ProFormVideoUpload;
