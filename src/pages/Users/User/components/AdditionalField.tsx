import JsonEditor from '@/components/JsonEditor';
import { FieldType } from '@/services/escola-lms/enums';
import ProForm, {
  ProFormCheckbox,
  ProFormDigit,
  ProFormText,
  ProFormTextArea,
} from '@ant-design/pro-form';
import React from 'react';
import { FormattedMessage, getLocale, useIntl } from 'umi';

const AdditionalField: React.FC<{
  field: API.ModelField;
}> = ({ field }) => {
  const intl = useIntl();
  const getProperField = (f: API.ModelField) => {
    const locale = getLocale();
    const translatedLabel = f?.extra?.find((i: Record<string, string>) => i?.[locale])?.[locale];

    switch (f.type) {
      case FieldType.Number:
        return (
          <ProFormDigit
            width="md"
            name={f.name}
            label={translatedLabel ?? <FormattedMessage id={f.name} />}
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
      case FieldType.Boolean:
        return (
          <ProFormCheckbox name={f.name}>
            {translatedLabel ?? <FormattedMessage id={f.name} />}
          </ProFormCheckbox>
        );

      case FieldType.Varchar:
        return (
          <ProFormText
            width="md"
            name={f.name}
            label={translatedLabel ?? <FormattedMessage id={f.name} />}
            tooltip={<FormattedMessage id={f.name} />}
            placeholder={intl.formatMessage({
              id: f.name,
            })}
          />
        );

      case FieldType.Json:
        return (
          <ProForm.Item
            name={f.name}
            label={translatedLabel ?? <FormattedMessage id={f.name} />}
            tooltip={<FormattedMessage id={f.name} />}
            valuePropName="value"
          >
            <JsonEditor />
          </ProForm.Item>
        );

      case FieldType.Text:
      default:
        return (
          <ProFormTextArea
            width="md"
            name={f.name}
            label={translatedLabel ?? <FormattedMessage id={f.name} />}
            tooltip={<FormattedMessage id={f.name} />}
            placeholder={intl.formatMessage({
              id: f.name,
            })}
          />
        );
    }
  };
  return <>{getProperField(field)}</>;
};

export default AdditionalField;
