import ProForm from '@ant-design/pro-form';
import { Button, Col, Row } from 'antd';
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
}> = ({ action, form_name, src_name, getUploadedSrcField, setPath, folder }) => {
  return (
    <ProForm.Group title={<FormattedMessage id="video" />}>
      <Row>
        <Col>
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
                          setPath({
                            [`${form_name}_url`]: info.file.response.data[`${form_name}_url`],
                            [`${form_name}_path`]: info.file.response.data[`${form_name}_path`],
                          });
                        }
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
              return <ReactPlayer url={form.getFieldValue(src_name)} controls />;
            }}
          </ProForm.Item>
        </Col>
      </Row>
    </ProForm.Group>
  );
};

export default ProFormVideoUpload;
