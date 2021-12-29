import React, { useCallback } from 'react';
import { Space, Typography, Tag } from 'antd';
import ProForm, { ProFormText, ProFormTextArea } from '@ant-design/pro-form';
import { FormattedMessage } from 'umi';

import './index.css';
import FabricEditor from '../FabricEditor';

interface FormWysiwygProps {
  value?: string;
  onChange?: (value: string) => void;
  name: string;
  field: API.TemplateField;
}

export const TemplateFields: React.FC<FormWysiwygProps> = ({ name, field }) => {
  const renderRequiredVariables = useCallback(
    (requiredVars: string[]) => {
      if (!!requiredVars.length) {
        return (
          <Space>
            <Typography>
              <FormattedMessage id="templates.required_variables" />:{' '}
              {requiredVars.map((token) => (
                <Tag color={'red'} key={token}>
                  {token}
                </Tag>
              ))}
            </Typography>
          </Space>
        );
      } else return;
    },
    [field, name],
  );

  const fieldValidator = useCallback(
    (value: string, requiredFields: string[]) => {
      if (value && requiredFields.every((val) => value.includes(val))) {
        return Promise.resolve();
      }
      return Promise.reject(new Error('No required variable  used'));
    },
    [field, name],
  );

  const renderProperFields = useCallback(() => {
    switch (field.type) {
      case 'text':
      case 'url':
        return (
          <React.Fragment>
            <ProFormText
              readonly={field.readonly}
              shouldUpdate
              width="lg"
              name={name}
              label={<FormattedMessage id={name} />}
              rules={[
                {
                  required: field.required,
                  message: <FormattedMessage id="templates.this_required" />,
                },
                {
                  validator: async (_, value) => {
                    return fieldValidator(value, field.required_variables);
                  },
                },
              ]}
            />
            {renderRequiredVariables(field.required_variables)}
          </React.Fragment>
        );
      case 'fabric.js':
        return (
          <React.Fragment>
            <ProForm.Item shouldUpdate>
              {(form) => {
                return (
                  <FabricEditor
                    initialValue={form.getFieldValue(name)}
                    onUpdate={(obj) => form.setFieldsValue({ [name]: JSON.stringify(obj) })}
                  />
                );
              }}
            </ProForm.Item>
            <ProFormTextArea name={name} shouldUpdate width="lg" hidden />
          </React.Fragment>
        );
      case 'html':
        return (
          <React.Fragment>
            <ProFormTextArea
              readonly={field.readonly}
              shouldUpdate
              width="lg"
              label={<FormattedMessage id={name} />}
              name={name}
              tooltip={<FormattedMessage id={'templates.html_tooltip'} />}
              rules={[
                {
                  required: field.required,
                  message: <FormattedMessage id="templates.this_required" />,
                },
                {
                  validator: async (_, value) => {
                    return fieldValidator(value, field.required_variables);
                  },
                },
              ]}
            />

            {renderRequiredVariables(field.required_variables)}
          </React.Fragment>
        );

      case 'mjml':
        return (
          <React.Fragment>
            <p>
              <FormattedMessage id={'templates.to_create_template'} />{' '}
              <a target="_blank" href="https://mjml.io/try-it-live">
                https://mjml.io/try-it-live
              </a>
            </p>
            <ProFormTextArea
              readonly={field.readonly}
              shouldUpdate
              width="lg"
              label={<FormattedMessage id={name} />}
              name={name}
              tooltip={<FormattedMessage id={'templates.mjml_tooltip'} />}
              rules={[
                {
                  required: field.required,
                  message: <FormattedMessage id="templates.this_required" />,
                },
                {
                  validator: async (_, value) => {
                    return fieldValidator(value, field.required_variables);
                  },
                },
              ]}
            />

            {renderRequiredVariables(field.required_variables)}
          </React.Fragment>
        );
      default:
        return;
    }
  }, [field, name]);

  return <React.Fragment>{renderProperFields()}</React.Fragment>;
};

export default TemplateFields;
