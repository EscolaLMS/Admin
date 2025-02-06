import { FormattedMessage } from '@@/plugin-locale/localeExports';
import { ProFormSwitch, ProFormText, ProFormTextArea } from '@ant-design/pro-form';
import type { StoreValue } from 'antd/lib/form/interface';
import React from 'react';

interface SettingsValueProps {
  field: StoreValue;
  name: string;
  keyName?: string;
}

const textAreaKeys = ['private_key'];

export const SettingsValue: React.FC<SettingsValueProps> = (props) => {
  const { field, name, keyName } = props;

  if (field?.includes('boolean')) {
    return (
      <ProFormSwitch
        name={name}
        checkedChildren={<FormattedMessage id={'true'} />}
        unCheckedChildren={<FormattedMessage id={'false'} />}
      />
    );
  }

  if (keyName && textAreaKeys.includes(keyName)) {
    return <ProFormTextArea width="lg" name={name} />;
  }

  return <ProFormText width="lg" name={name} />;
};

export default SettingsValue;
