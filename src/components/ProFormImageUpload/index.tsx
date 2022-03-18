import React from 'react';
import { Button, Image, Row, Col } from 'antd';

import ProForm from '@ant-design/pro-form';
import SecureUpload from '@/components/SecureUpload';
import type { UploadChangeParam } from 'antd/lib/upload';
import { FormattedMessage } from 'umi';

export const ProFormImageUpload: React.FC<{
  title: string;
  action: string;
  form_name: string;
  src_name: string;
  getUploadedSrcField: (info: UploadChangeParam) => string;
  setPath: (state: object) => void;
  wrapInForm: boolean;
}> = ({ title, action, form_name, src_name, getUploadedSrcField, setPath, wrapInForm = true }) => {
  return (
    <ProForm.Group title={<FormattedMessage id={title} />}>
      <Row>
        <Col>
          <ProForm.Item shouldUpdate>
            {(form) => {
              return (
                <React.Fragment>
                  <SecureUpload
                    wrapInForm={wrapInForm}
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
        </Col>
        <Col span={24}>
          <ProForm.Item shouldUpdate>
            {(form) => {
              return <Image width={200} src={form.getFieldValue(src_name)} />;
            }}
          </ProForm.Item>
        </Col>
      </Row>
    </ProForm.Group>
  );
};

export default ProFormImageUpload;
