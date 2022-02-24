import React from 'react';
import ProForm, { ProFormText, ProFormCheckbox } from '@ant-design/pro-form';
import { useIntl, FormattedMessage } from 'umi';
import WysiwygMarkdown from '@/components/WysiwygMarkdown';

enum fieldTypes {
  text = 'text',
  option = 'option',
  richtext = 'richtext',
}

export const getFieldName = (field: string) => field.split('_')[1];
export const getFieldType = (field: string) => field.split('_')[0];

const AdditionalFields: React.FC<{
  additionalFields: string[];
  requiredFields: string[];
  id?: number;
}> = ({ additionalFields, requiredFields, id }) => {
  const intl = useIntl();
  return (
    <React.Fragment>
      <ProForm.Group>
        {additionalFields &&
          additionalFields
            .filter((field: string) => getFieldType(field) === fieldTypes.text)
            .map((field) => {
              return (
                <ProFormText
                  required={requiredFields.includes(field)}
                  width="md"
                  name={field}
                  label={<FormattedMessage id={getFieldName(field)} />}
                  tooltip={<FormattedMessage id={getFieldName(field)} />}
                  placeholder={intl.formatMessage({
                    id: field,
                  })}
                />
              );
            })}
        {additionalFields &&
          additionalFields
            .filter((field: string) => getFieldType(field) === fieldTypes.option)
            .map((field) => {
              return (
                <ProFormCheckbox name={field}>
                  <FormattedMessage id={getFieldName(field)} />
                </ProFormCheckbox>
              );
            })}
      </ProForm.Group>
      <ProForm.Group>
        {additionalFields &&
          additionalFields
            .filter((field: string) => getFieldType(field) === fieldTypes.richtext)
            .map((field) => {
              return (
                <ProForm.Item
                  name={field}
                  label={getFieldName(field)}
                  tooltip="The editor is WYSIWYG and includes formatting tools whilst retaining the ability to write markdown shortcuts inline and output plain Markdown."
                  valuePropName="value"
                >
                  <WysiwygMarkdown directory={`users/${id}/wysiwyg`} />
                </ProForm.Item>
              );
            })}
      </ProForm.Group>
    </React.Fragment>
  );
};

export default AdditionalFields;
