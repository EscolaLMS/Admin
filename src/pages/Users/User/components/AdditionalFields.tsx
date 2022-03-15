import JsonEditor from '@/components/JsonEditor';
import ProForm, {
  ProFormCheckbox,
  ProFormDigit,
  ProFormText,
  ProFormTextArea,
} from '@ant-design/pro-form';
import React from 'react';
import { FormattedMessage, useIntl } from 'umi';

const AdditionalFields: React.FC<{ field: EscolaLms.ModelFields.Models.Metadata }> = ({
  field,
}) => {
  const intl = useIntl();
  const getProperField = (f: EscolaLms.ModelFields.Models.Metadata) => {
    switch (f.type) {
      case 'number':
        return (
          <ProFormDigit
            width="md"
            name={f.name}
            label={<FormattedMessage id={f.name} />}
            tooltip={<FormattedMessage id={f.name} />}
            placeholder={intl.formatMessage({
              id: f.name,
              defaultMessage: f.name,
            })}
            min={1}
            max={1024}
            fieldProps={{ step: 1 }}
          />
        );
      case 'boolean':
        return (
          <ProFormCheckbox name={f.name}>
            <FormattedMessage id={f.name} />
          </ProFormCheckbox>
        );

      case 'varchar':
        return (
          <ProFormText
            width="md"
            name={f.name}
            label={<FormattedMessage id={f.name} />}
            tooltip={<FormattedMessage id={f.name} />}
            placeholder={intl.formatMessage({
              id: f.name,
            })}
            required
          />
        );

      case 'text':
        return (
          <ProFormTextArea
            width="md"
            name={f.name}
            label={<FormattedMessage id={f.name} />}
            tooltip={<FormattedMessage id={f.name} />}
            placeholder={intl.formatMessage({
              id: f.name,
            })}
            required
          />
        );
      case 'json':
        return (
          <ProForm.Item
            name={f.name}
            label={<FormattedMessage id={f.name} />}
            tooltip={<FormattedMessage id={f.name} />}
            valuePropName="value"
          >
            <JsonEditor />
          </ProForm.Item>
        );
    }
  };
  return <>{getProperField(field)}</>;
};

export default AdditionalFields;
