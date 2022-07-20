import React, { useCallback } from 'react';
import { Input, Form } from 'antd';

const FabricInput: React.FC<{
  value: string | number;
  onChange: (value: number | string | boolean) => void;
  label: string;
  name: string;
  type?: string;
  style?: React.CSSProperties;
}> = ({ value, onChange, label, name, type = 'text', style, ...props }) => {
  const onChangeField = useCallback(
    (event: React.FormEvent<HTMLInputElement | HTMLSelectElement>) => {
      onChange(event.currentTarget.value);
    },
    [onChange],
  );

  return (
    <Form.Item label={label}>
      <Input
        name={name}
        value={value}
        onChange={onChangeField}
        type={type}
        style={style}
        {...props}
      />
    </Form.Item>
  );
};

export default FabricInput;
