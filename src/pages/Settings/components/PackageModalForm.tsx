import React, { useEffect, useMemo } from 'react';
import { Form } from 'antd';
import ProForm, { ProFormSwitch, ModalForm, ProFormTextArea } from '@ant-design/pro-form';
import { Typography } from 'antd';

import { FormattedMessage } from 'umi';
import { updateConfig } from '@/services/escola-lms/settings';
import ReactJson from 'react-json-view';
import { useIntl } from '@@/plugin-locale/localeExports';
import SettingsValue from '@/pages/Settings/components/SettingsValue';

const { Text } = Typography;

enum SettingPackageType {
  Array = 'array',
  String = 'string',
}

// base format -> input format
const parseValue = (value: unknown, type: SettingPackageType) => {
  if (type === SettingPackageType.Array) {
    return value && Array.isArray(value) ? JSON.stringify(value) : '[]';
  }

  return value;
};

// input format -> base format
const formatValue = (value: string = '', type: SettingPackageType) => {
  if (type === SettingPackageType.Array) {
    const arr = JSON.parse(value);
    return arr && Array.isArray(arr) ? arr : [];
  }

  return value;
};

export const SettingsPackageModalForm: React.FC<{
  value: API.ConfigEntry;
  visible: boolean;
  onVisibleChange: (visible: boolean) => void;
  onFinish: (updated: boolean) => Promise<boolean | void>;
}> = (props) => {
  const intl = useIntl();

  const { visible, onVisibleChange, onFinish, value } = props;

  const [form] = Form.useForm();

  const type = useMemo(() => {
    return (value.rules || []).includes(SettingPackageType.Array)
      ? SettingPackageType.Array
      : SettingPackageType.String;
  }, [value.rules]);

  useEffect(() => {
    form.setFieldsValue({
      ...value,
      value: parseValue(value.value, type),
    });
  }, [type, value, form]);

  return (
    <ModalForm
      form={form}
      title={value.full_key}
      width="60vw"
      visible={visible}
      onVisibleChange={onVisibleChange}
      onFinish={async () => {
        const result = await updateConfig({
          key: value.full_key,
          value: formatValue(form.getFieldsValue().value, type),
        });
        if (result.success) {
          onFinish(result.success === true);
          return result.success;
        }

        return;
      }}
    >
      <ProForm.Group>
        <ProFormSwitch
          disabled
          name="public"
          label={<FormattedMessage id="public" defaultMessage="public" />}
        />
        <ProFormSwitch
          disabled
          name="readonly"
          label={<FormattedMessage id="readonly" defaultMessage="readonly" />}
        />

        <ProForm.Item shouldUpdate label={<FormattedMessage id="rules" defaultMessage="rules" />}>
          {() => <Text code>{JSON.stringify(form.getFieldValue('rules'))}</Text>}
        </ProForm.Item>
      </ProForm.Group>

      {type === SettingPackageType.Array ? (
        <>
          <ProFormTextArea
            width="lg"
            name="value"
            label={<FormattedMessage id="value" />}
            tooltip={`${intl.formatMessage({
              id: 'example_json',
            })}: ["first_field_name", "second_field_name"]`}
          />
          <ProForm.Item noStyle shouldUpdate>
            {() => {
              try {
                return <ReactJson src={JSON.parse(form.getFieldValue('value'))} />;
              } catch {
                return <ReactJson src={JSON.parse(`{ "error": "cannot parse this array" }`)} />;
              }
            }}
          </ProForm.Item>
        </>
      ) : (
        <>
          <ProForm.Item shouldUpdate label={<FormattedMessage id="value" />}>
            {() => <SettingsValue field={form.getFieldValue('rules')} name={'value'} />}
          </ProForm.Item>
        </>
      )}
    </ModalForm>
  );
};

export default SettingsPackageModalForm;
