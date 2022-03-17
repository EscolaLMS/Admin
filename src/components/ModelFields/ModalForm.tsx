import React, { useCallback, useEffect } from 'react';
import { Form } from 'antd';
import ProForm, { ProFormText, ModalForm, ProFormRadio, ProFormDigit } from '@ant-design/pro-form';
import { useIntl, FormattedMessage } from 'umi';

import { createOrUpdateField } from '@/services/escola-lms/fields';
import JsonEditor from '../JsonEditor';

enum ModelFieldType {
  BOOLEAN = 'boolean',
  NUMBER = 'number',
  VARCHAR = 'varchar',
  TEXT = 'text',
  JSON = 'json',
}

export const ModelFieldsModalForm: React.FC<{
  class_type: string;
  name: string | boolean;
  visible: boolean;
  onVisibleChange: (visible: boolean) => void;
  onResponse: (metaField: EscolaLms.ModelFields.Models.Metadata) => void;
  fields: EscolaLms.ModelFields.Models.Metadata[];
}> = ({ visible, onVisibleChange, onResponse, class_type, name = 'new', fields = [] }) => {
  const intl = useIntl();

  const [form] = Form.useForm();

  const onFinish = useCallback(
    async (data: EscolaLms.ModelFields.Http.Requests.MetadataCreateOrUpdateRequest) => {
      await createOrUpdateField({
        ...data,
        class_type,
        rules: JSON.stringify(data.rules),
        extra: JSON.stringify(data.extra),
      }).then((response) => {
        if (response.success) {
          onResponse(response.data);
        }
      });
      return false;
    },
    [form],
  );

  useEffect(() => {
    if (name !== 'new') {
      const field = fields.find((record) => record.name === name);
      if (field) {
        form.setFieldsValue(field);
      }
    } else {
      form.resetFields();
    }
  }, [name, form, fields]);

  return (
    <ModalForm
      form={form}
      title={intl.formatMessage({
        id: name === 'new' ? 'newModelField' : 'editModelField',
        defaultMessage: name === 'new' ? 'new Model Field' : 'edit Model Field',
      })}
      width="800px"
      visible={visible}
      onVisibleChange={onVisibleChange}
      onFinish={onFinish}
    >
      <ProFormText
        required
        label={<FormattedMessage id="name" defaultMessage="name" />}
        tooltip={<FormattedMessage id="name_tooltip" defaultMessage="name_tooltip" />}
        rules={[
          {
            required: true,
          },
        ]}
        width="md"
        name="name"
      />

      <ProFormRadio.Group
        rules={[
          {
            required: true,
          },
        ]}
        name="type"
        label={<FormattedMessage id="type" defaultMessage="type" />}
        tooltip={<FormattedMessage id="type_tooltip" defaultMessage="type_tooltip" />}
        options={(Object.keys(ModelFieldType) as (keyof typeof ModelFieldType)[]).map((key) => ({
          label: intl.formatMessage({
            id: ModelFieldType[key],
          }),
          value: ModelFieldType[key],
        }))}
      />

      <ProFormText
        width="md"
        name="default"
        label={<FormattedMessage id="default" defaultMessage="default" />}
        tooltip={<FormattedMessage id="default_tooltip" defaultMessage="default_tooltip" />}
        placeholder={intl.formatMessage({
          id: 'default',
        })}
      />

      <ProForm.Item
        name="rules"
        label={
          <span>
            <FormattedMessage id="rules" defaultMessage="rules" />{' '}
            <a
              rel="noreferrer"
              href="https://laravel.com/docs/9.x/validation#available-validation-rules"
              target="_blank"
            >
              <FormattedMessage
                id="available-validation-rules"
                defaultMessage="available-validation-rules"
              />
            </a>
          </span>
        }
        tooltip={<FormattedMessage id="available-validation-rules" />}
        valuePropName="value"
      >
        <JsonEditor />
      </ProForm.Item>

      {/** 
 * this int must be power of 2 
 * example :// 
    const PUBLIC        = 1 << 0; // 1
    const AUTHORIZED    = 1 << 1; // 2
    const ADMIN         = 1 << 2; // 4
    etc... 
 */}
      <ProFormDigit
        width="md"
        name="visibility"
        label={<FormattedMessage id="visibility" />}
        tooltip={<FormattedMessage id="visibility_tooltip" />}
        placeholder={intl.formatMessage({
          id: 'visibility',
          defaultMessage: 'visibility',
        })}
        min={1}
        max={1024}
        fieldProps={{ step: 1 }}
        rules={[
          {
            validator: async (_, value) => {
              if (Math.pow(2, Math.ceil(Math.log2(value))) - value) {
                return Promise.reject(
                  new Error(
                    intl.formatMessage({
                      id: 'notPowerOfTwo',
                      defaultMessage: 'notPowerOfTwo',
                    }),
                  ),
                );
              }
            },
          },
        ]}
      />

      <ProForm.Item
        name="extra"
        label={<FormattedMessage id="extra" />}
        tooltip={<FormattedMessage id="extra" />}
        valuePropName="value"
      >
        <JsonEditor />
      </ProForm.Item>
    </ModalForm>
  );
};

export default ModelFieldsModalForm;
