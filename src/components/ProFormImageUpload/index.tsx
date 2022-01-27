import React from 'react';
import { Button, Image } from 'antd';

import ProForm from '@ant-design/pro-form';
import SecureUpload from '@/components/SecureUpload';
import type { UploadChangeParam } from 'antd/lib/upload';
import { FormattedMessage } from 'umi';

export const ProFormImageUpload: React.FC<{
  action: string;
  form_name: string;
  src_name: string;
  getUploadedSrcField: (info: UploadChangeParam) => string;
  setPath: (state: object) => void;
}> = ({ action, form_name, src_name, getUploadedSrcField, setPath }) => {
  return (
    <ProForm.Group title={<FormattedMessage id="image" />}>
      <ProForm.Item shouldUpdate>
        {(form) => {
          return (
            <React.Fragment>
              <Image width={200} src={form.getFieldValue(src_name)} />{' '}
              <Button
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
          return (
            <SecureUpload
              accept="image/*"
              name={form_name}
              url={action}
              onChange={(info) => {
                if (info.file.status === 'done') {
                  form.setFieldsValue({ [src_name]: getUploadedSrcField(info) });

                  setPath({
                    [`${form_name}_url`]: info.file.response.data[`${form_name}_url`],
                    [`${form_name}_path`]: info.file.response.data[`${form_name}_path`],
                  });
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
