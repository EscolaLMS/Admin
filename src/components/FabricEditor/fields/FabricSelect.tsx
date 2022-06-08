import React from 'react';
import { Form, Select } from 'antd';

const { Option } = Select;

const FabricSelect: React.FC<{
  value: string | number;
  onChange: (value: number | string | boolean) => void;
  label: string;
  name: string;
  options: { value: string | number; label: string }[];
  style?: Object;
}> = ({ value, onChange, label, name, options = [], style, ...props }) => {
  return (
    <Form.Item label={label}>
      <Select value={value} onChange={onChange} style={style} {...props}>
        {options.map((option) => (
          <Option key={option.value} value={option.value}>
            {option.label}
          </Option>
        ))}
      </Select>
    </Form.Item>
  );
};

export default FabricSelect;
