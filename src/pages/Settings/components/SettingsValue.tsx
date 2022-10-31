import { FormattedMessage } from '@@/plugin-locale/localeExports';
import { ProFormSwitch, ProFormText } from '@ant-design/pro-form';
import type { StoreValue } from 'antd/lib/form/interface';
import React from 'react';

interface SettingsValueProps {
  field: StoreValue;
  name: string;
}

export const SettingsValue: React.FC<SettingsValueProps> = (props) => {
  const { field, name } = props;

  if (field?.includes('boolean')) {
    return (
      <ProFormSwitch
        name={name}
        checkedChildren={<FormattedMessage id={'true'} />}
        unCheckedChildren={<FormattedMessage id={'false'} />}
      />
    );
  }

  return <ProFormText width="lg" name={name} />;
};

export default SettingsValue;
