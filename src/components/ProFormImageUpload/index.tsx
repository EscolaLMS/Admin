import React from 'react';
import { Image } from 'antd';

import ProForm from '@ant-design/pro-form';
import SecureUpload from '@/components/SecureUpload';
import type { UploadChangeParam } from 'antd/lib/upload';
import { FormattedMessage } from 'umi';

export const ProFormImageUpload: React.FC<{
  action: string;
  form_name: string;
  src_name: string;
  getUploadedSrcField: (info: UploadChangeParam) => string;
}> = ({ action, form_name, src_name, getUploadedSrcField }) => {
  return (
    <ProForm.Group title={<FormattedMessage id="image" />}>
      <ProForm.Item shouldUpdate>
        {(form) => {
          return <Image width={200} src={form.getFieldValue(src_name)} />;
        }}
      </ProForm.Item>
      <ProForm.Item shouldUpdate>
        {(form) => {
          return (
            <SecureUpload
              accept="image/*"
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

export default ProFormImageUpload;
