import { Button, Image } from 'antd';
import React from 'react';

import SecureUploadBrowser from '@/components/SecureUpload/browser';
import type { GroupProps } from '@ant-design/pro-components';
import { ProForm } from '@ant-design/pro-components';
import type { UploadChangeParam } from 'antd/lib/upload';
import { FormattedMessage } from 'umi';

export const ProFormImageUpload: React.FC<{
  folder: string;
  title: string;
  action: string;
  form_name: string;
  src_name: string;
  getUploadedSrcField: (info: UploadChangeParam) => string;
  setPath: (state: Record<string, string>) => void;
  wrapInForm?: boolean;
  proFormGroupProps?: GroupProps;
  hideLabel?: boolean;
}> = ({
  title,
  action,
  form_name,
  src_name,
  getUploadedSrcField,
  setPath,
  wrapInForm = true,
  folder,
  proFormGroupProps,
  hideLabel = false,
}) => {
  return (
    <ProForm.Group title={<FormattedMessage id={title} />} {...proFormGroupProps}>
      <ProForm.Item shouldUpdate>
        {(form) => {
          return (
            <React.Fragment>
              <SecureUploadBrowser
                folder={folder}
                wrapInForm={wrapInForm}
                accept="image/*"
                name={form_name}
                url={action}
                onChange={(info) => {
                  if (info.file.status === 'done') {
                    form.setFieldsValue({ [src_name]: getUploadedSrcField(info) });
                    if (info.file.response?.success) {
                      const data = info.file.response.data;
                      setPath({
                        [`${form_name}_url` as string]:
                          data[`${form_name}_url` as keyof typeof data],
                        [`${form_name}_path` as string]:
                          data[`${form_name}_path` as keyof typeof data],
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
          return <Image width={200} src={form.getFieldValue(src_name)} />;
        }}
      </ProForm.Item>
    </ProForm.Group>
  );
};

export default ProFormImageUpload;
