import React, { useCallback } from 'react';
import { Space, Typography, Tag } from 'antd';
import ProForm, { ProFormText, ProFormTextArea } from '@ant-design/pro-form';
import { FormattedMessage } from 'umi';
import AutoCompleteArea from '../AutoCompleteArea';
import PdfEditor from '../PdfEditor';
import './index.css';

interface FormWysiwygProps {
  value?: string;
  onChange?: (value: string) => void;
  name: string;
  field: API.TemplateField;
  variables?: string[];
}

export const TemplateFields: React.FC<FormWysiwygProps> = ({ name, field, variables = [] }) => {
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
    (value: string, requiredVars: string[]) => {
      if (value && requiredVars.every((val) => value.includes(val))) {
        return Promise.resolve();
      }
      return Promise.reject(new Error('No required variable used'));
    },
    [field, name],
  );

  const renderProperFields = useCallback(() => {
    if (field.readonly) {
      return;
    }
    switch (field.type) {
      case 'text':
      case 'url':
        return (
          <React.Fragment>
            <label>
              <FormattedMessage id={name} />
            </label>

            <ProForm.Item shouldUpdate>
              {(form) => {
                return (
                  <AutoCompleteArea
                    requiredVariables={field.required_variables}
                    variables={variables}
                    value={form.getFieldValue(name)}
                    onChange={(value: string) => form.setFieldsValue({ [name]: value })}
                    error={form.getFieldError(name)}
                    styles={{
                      width: '100%',
                      height: '100px',
                    }}
                  />
                );
              }}
            </ProForm.Item>
            <ProFormText
              name={name}
              shouldUpdate
              hidden
              rules={
                field.readonly
                  ? undefined
                  : [
                      {
                        required: field.required,
                        message: <FormattedMessage id="templates.this_required" />,
                      },
                      {
                        validator: async (_, value) => {
                          return fieldValidator(value, field.required_variables);
                        },
                      },
                    ]
              }
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
                  <PdfEditor
                    reportBroTemplate={
                      form.getFieldValue(name) && JSON.parse(form.getFieldValue(name))
                    }
                    variables={variables}
                    field={field}
                    onTemplateSaved={(tpl) => {
                      form.setFieldsValue({ [name]: JSON.stringify(tpl) });
                      form.submit();
                    }}
                    onTemplateUpdated={(tpl) => {
                      form.setFieldsValue({ [name]: JSON.stringify(tpl) });
                    }}
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
              rules={
                field.readonly
                  ? undefined
                  : [
                      {
                        required: field.required,
                        message: <FormattedMessage id="templates.this_required" />,
                      },
                      {
                        validator: async (_, value) => {
                          return fieldValidator(value, field.required_variables);
                        },
                      },
                    ]
              }
            />

            {renderRequiredVariables(field.required_variables)}
          </React.Fragment>
        );

      case 'mjml':
        return (
          <React.Fragment>
            <p>
              <FormattedMessage id={'templates.to_create_template'} />{' '}
              <a target="_blank" rel="noreferrer" href="https://mjml.io/try-it-live">
                https://mjml.io/try-it-live
              </a>
            </p>
            <code>
              <FormattedMessage id={'code.snippet'} />
            </code>
            <ProForm.Item shouldUpdate>
              {(form) => {
                return (
                  <AutoCompleteArea
                    requiredVariables={field.required_variables}
                    variables={variables}
                    value={form.getFieldValue(name)}
                    onChange={(value: string) => form.setFieldsValue({ [name]: value })}
                    error={form.getFieldError(name)}
                    styles={{
                      width: '100%',
                      height: '40vh',
                    }}
                  />
                );
              }}
            </ProForm.Item>
            <ProFormTextArea
              name={name}
              shouldUpdate
              hidden
              rules={
                field.readonly
                  ? undefined
                  : [
                      {
                        required: field.required,
                        message: <FormattedMessage id="templates.this_required" />,
                      },
                      {
                        validator: async (_, value) => {
                          return fieldValidator(value, field.required_variables);
                        },
                      },
                    ]
              }
            />

            {renderRequiredVariables(field.required_variables)}
          </React.Fragment>
        );
      default:
        return;
    }
  }, [field, name, variables]);

  return <React.Fragment>{renderProperFields()}</React.Fragment>;
};

export default TemplateFields;
