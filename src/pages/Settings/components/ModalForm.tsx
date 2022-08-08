import React, { useEffect, useState, useCallback } from 'react';
import { Form, Button, Input, AutoComplete } from 'antd';
import ProForm, {
  ProFormText,
  ProFormSwitch,
  ModalForm,
  ProFormRadio,
  ProFormTextArea,
} from '@ant-design/pro-form';

import { useIntl, FormattedMessage } from 'umi';
import { setting } from '@/services/escola-lms/settings';

import WysiwygMarkdown from '@/components/WysiwygMarkdown';
import FilesBrowser from '@/components/FilesBrowser';
import ReactJson from 'react-json-view';

export const FilesSelector: React.FC<{
  value?: string;
  onChange?: (value: string) => void;
  type?: 'file' | 'image';
}> = ({ value, onChange, type = 'file' }) => {
  const [showBrowser, setShowBrowser] = useState<boolean>(false);

  return (
    <React.Fragment>
      <ProForm.Group>
        <Input value={value} readOnly />
        <Button size="small" type="primary" onClick={() => setShowBrowser(!showBrowser)}>
          toggle {type} browser
        </Button>
      </ProForm.Group>
      {showBrowser && (
        <FilesBrowser onFile={(file, dir) => onChange && onChange(`${dir}/${file.name}`)} />
      )}
    </React.Fragment>
  );
};

export const SettingsModalForm: React.FC<{
  id?: number | false;
  visible: boolean;
  onVisibleChange: (visible: boolean) => void;
  onFinish: (formData: API.Setting) => Promise<boolean | void>;
  groups: string[];
  initialData?: API.Setting[];
}> = (props) => {
  const intl = useIntl();

  const { visible, onVisibleChange, onFinish, id, initialData, groups } = props;

  const [form] = Form.useForm();

  const isNew = !id || id === -1;

  const [type, setType] = useState<API.SettingType>('text');

  const isGlobalGroup = useCallback(() => {
    return !!(form.getFieldValue('group') === 'global' || initialData);
  }, [form, initialData]);

  const [selectedGroup, setSelectedGroup] = useState<string>('');

  useEffect(() => {
    if (id && id !== -1) {
      setting(id).then((response) => {
        if (response.success) {
          form.setFieldsValue(response.data);
          setType(response.data.type);
          setSelectedGroup(response.data.group);
        }
      });
    } else {
      form.resetFields();

      if (initialData && initialData[0]) {
        form.setFieldsValue(initialData[0]);
        setType(initialData[0].type);
      }

      setType('text');
    }
  }, [id, form, initialData]);

  const onValuesChange = useCallback(
    (values: API.Setting) => {
      if (values.type && values.type !== type) {
        setType(values.type);
      }
    },
    [type],
  );

  return (
    <ModalForm
      form={form}
      title={intl.formatMessage({
        id: id ? 'editSetting' : 'newSetting',
        defaultMessage: id ? 'editSetting' : 'newSetting',
      })}
      width="60vw"
      visible={visible}
      onVisibleChange={onVisibleChange}
      onFinish={onFinish}
      onValuesChange={onValuesChange}
    >
      <ProForm.Group>
        {initialData ? (
          <ProFormText
            label={<FormattedMessage id="group" defaultMessage="group" />}
            rules={[
              {
                required: true,
              },
            ]}
            width="md"
            name="group"
            disabled={isGlobalGroup()}
          />
        ) : (
          <ProForm.Group
            labelLayout={'twoLine'}
            style={{
              paddingTop: 0,
            }}
          >
            <div className="ant-col ant-form-item-label">
              <label htmlFor="group" className="ant-form-item-required" title="">
                <FormattedMessage id="group" defaultMessage="group" />
              </label>
            </div>
            <AutoComplete
              style={{
                width: '300px',
              }}
              autoFocus={true}
              value={selectedGroup}
              onChange={(value) => setSelectedGroup(value)}
              filterOption={(inputValue, option) =>
                option?.children?.toString().toLowerCase().indexOf(inputValue.toLowerCase()) !== -1
              }
            >
              {groups.map((group) => (
                <AutoComplete.Option key={group} value={group}>
                  {group}
                </AutoComplete.Option>
              ))}
            </AutoComplete>
          </ProForm.Group>
        )}
        <ProFormText
          label={<FormattedMessage id="key" defaultMessage="key" />}
          rules={[
            {
              required: true,
            },
          ]}
          width="md"
          name="key"
          disabled={isGlobalGroup()}
        />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormSwitch
          name="enumerable"
          disabled={isGlobalGroup()}
          label={<FormattedMessage id="enumerable" defaultMessage="enumerable" />}
        />
        <ProFormSwitch
          name="public"
          disabled={isGlobalGroup()}
          label={<FormattedMessage id="public" defaultMessage="public" />}
        />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormRadio.Group
          disabled={!!(!isNew || initialData)}
          name="type"
          label={<FormattedMessage id="type" />}
          options={[
            {
              label: 'text',
              value: 'text',
            },
            {
              label: 'markdown',
              value: 'markdown',
            },
            {
              label: 'json',
              value: 'json',
            },
            {
              label: 'file',
              value: 'file',
            },
            {
              label: 'image',
              value: 'image',
            },
          ]}
        />
      </ProForm.Group>
      <div>
        {type === 'text' && (
          <ProFormText width="lg" name="value" label={<FormattedMessage id="value" />} />
        )}
        {type === 'json' && (
          <>
            <ProFormTextArea
              width="lg"
              name="value"
              label={<FormattedMessage id="value" />}
              tooltip={`${intl.formatMessage({
                id: 'example_json',
              })}: {"name":"John", "age":30, "city":["New York","Warsaw"]}`}
            />
            <ProForm.Item noStyle shouldUpdate>
              {() => {
                try {
                  return <ReactJson src={JSON.parse(form.getFieldValue('value'))} />;
                } catch {
                  return <ReactJson src={JSON.parse(`{ "error": "cannot parse this json" }`)} />;
                }
              }}
            </ProForm.Item>
          </>
        )}

        {(type === 'file' || type === 'image') && (
          <ProForm.Item
            name="value"
            label="value"
            tooltip="select file from current repository or upload new one"
            valuePropName="value"
          >
            <FilesSelector type={type} />
          </ProForm.Item>
        )}

        {type === 'markdown' && (
          <ProForm.Item
            name="value"
            label="value"
            tooltip="The editor is WYSIWYG and includes formatting tools whilst retaining the ability to write markdown shortcuts inline and output plain Markdown."
            valuePropName="value"
          >
            <WysiwygMarkdown directory={`settings/wysiwyg`} />
          </ProForm.Item>
        )}
      </div>
    </ModalForm>
  );
};

export default SettingsModalForm;
