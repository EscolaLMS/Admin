import React, { useCallback } from 'react';
import { Space, Typography, Tag } from 'antd';
import { ProFormText, ProFormTextArea } from '@ant-design/pro-form';
import { FormattedMessage } from 'umi';
import './index.css';

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
              Required:{' '}
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
    [field],
  );

  const fieldValidator = useCallback(
    (value: string, requiredFields: string[]) => {
      if (value && requiredFields.every((val) => value.includes(val))) {
        return Promise.resolve();
      }
      return Promise.reject(new Error('No required variable used'));
    },
    [field],
  );

  const renderProperFields = useCallback(() => {
    switch (field.type) {
      case 'text':
      case 'url':
        return (
          <React.Fragment>
            <ProFormText
              shouldUpdate
              width="lg"
              name={name}
              label={<FormattedMessage id={name} />}
              rules={[
                { required: field.required, message: 'This is required' },
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
      case 'html':
        return (
          <React.Fragment>
            <p>
              To create template go there{' '}
              <a target="_blank" href="https://mjml.io/try-it-live">
                https://mjml.io/try-it-live
              </a>
            </p>
            <ProFormTextArea
              shouldUpdate
              width="lg"
              label={<FormattedMessage id={name} />}
              name={name}
              tooltip={'paste mjml template'}
              rules={[
                { required: field.required, message: 'This is required' },
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
  }, [field]);

  return <React.Fragment>{renderProperFields()}</React.Fragment>;
};

export default TemplateFields;
