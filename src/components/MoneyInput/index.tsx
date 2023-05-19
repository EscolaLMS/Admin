import { Input } from 'antd';
import type { FC } from 'react';
import { useEffect } from 'react';
import React, { useState } from 'react';
import type { FormInstance, ProFormFieldProps } from '@ant-design/pro-form';
import { ProForm } from '@ant-design/pro-form';

interface CurrencyInputProps extends ProFormFieldProps {
  name: string;
  form: FormInstance<any>;
  onChange?: (cents: number) => void;
}

export const MoneyInput: FC<CurrencyInputProps> = ({ name, form, onChange, ...restProps }) => {
  const [dollars, setDollars] = useState('');
  const [cents, setCents] = useState(0);

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const inputValue = event.target.value;
    setDollars(inputValue.trim());

    // Remove currency symbol and other special characters
    const cleanValue = inputValue.replace(/[^0-9.]/, '');
    const parsedValue = parseFloat(cleanValue);

    const centsValue = Math.round(parsedValue * 100);
    setCents(centsValue);

    if (form && name) {
      form.setFieldsValue({
        [name]: centsValue,
      });
    }

    if (onChange) {
      onChange(centsValue);
    }
  };

  const centsToDollars = (amountOfCents: number) => {
    return (amountOfCents / 100).toFixed(2);
  };

  const formattedDollars = centsToDollars(cents);

  useEffect(() => {
    if (form && name) {
      const initialValue = form.getFieldValue(name) ? centsToDollars(form.getFieldValue(name)) : '';
      setDollars(initialValue);
      setCents(+initialValue * 100);
    }
  }, [form, name]);

  return (
    <ProForm.Item name={name} initialValue={dollars} {...restProps}>
      <Input
        value={dollars}
        onChange={handleInputChange}
        onBlur={() => setDollars(formattedDollars !== 'NaN' ? formattedDollars : '')}
      />
    </ProForm.Item>
  );
};
