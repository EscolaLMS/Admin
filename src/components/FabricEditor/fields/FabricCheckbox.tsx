import React, { useCallback } from 'react';
import { Checkbox } from 'antd';

const FabricCheckbox: React.FC<{
  value: boolean;
  onChange: (value: boolean) => void;
  label: string;
  name: string;
  type?: string;
}> = ({ value, onChange, label, name, ...props }) => {
  const onChangeField = useCallback(
    (event: any) => {
      onChange(event.target.checked);
    },
    [onChange],
  );

  return (
    <Checkbox name={name} value={value} checked={value} onChange={onChangeField} {...props}>
      {label}
    </Checkbox>
  );
};

export default FabricCheckbox;
