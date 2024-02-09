import type { FormInstance, ProFormFieldProps } from '@ant-design/pro-form';
import { ProForm } from '@ant-design/pro-form';
import { Input } from 'antd';
import type { FC } from 'react';
import React, { useEffect, useState } from 'react';
import { FormattedMessage, useModel } from 'umi';

interface CurrencyInputProps extends Omit<ProFormFieldProps, 'label'> {
  name: string;
  form: FormInstance<any>;
  onChange?: (cents: number | null) => void;
  label?: React.ComponentProps<typeof FormattedMessage>;
  defaultValue?: number | null;
}

const centsToDollars = (cents: number | null, toFixedValue?: number): string => {
  if (cents === null) return '';
  return (cents / 100).toFixed(toFixedValue ?? 0);
};

export const MoneyInput: FC<CurrencyInputProps> = ({ name, form, onChange, ...restProps }) => {
  const { label, defaultValue = 0, ...rest } = restProps;

  const [state, setState] = useState<{
    dollars: string;
    cents: number | null;
  }>({
    dollars: '',
    cents: null,
  });

  const { initialState } = useModel('@@initialState');

  const currentCurrency = initialState?.config?.find(
    ({ group, key }) => group === 'currencies' && key === 'default',
  )?.value;

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const inputValue = event.target.value;

    // Remove currency symbol and other special characters
    const cleanValue = inputValue.replace(/[^0-9.]/, '');
    const parsedValue = parseFloat(cleanValue);

    const centsValue = Math.round(parsedValue * 100);
    setState({ cents: centsValue || defaultValue, dollars: inputValue.trim() });
  };

  const formattedDollars = state.cents === null ? '' : centsToDollars(state.cents, 2);

  useEffect(() => {
    const initialValue = form.getFieldValue(name)
      ? centsToDollars(form.getFieldValue(name), 2)
      : '';

    setState({
      dollars: initialValue,
      cents: +initialValue * 100 || defaultValue,
    });
  }, [form, name]);

  useEffect(() => {
    if (form && name) {
      form.setFieldsValue({
        [name]: !Number.isNaN(state.cents) ? state.cents : null,
      });
    }

    if (onChange) {
      onChange(state.cents);
    }
  }, [state]);

  const labelProps = {
    ...label,
    values: {
      ...label?.values,
      currency: currentCurrency ? `(${currentCurrency})` : '',
    },
  };

  return (
    <ProForm.Item
      name={name}
      initialValue={state.dollars}
      label={label ? <FormattedMessage {...labelProps} /> : undefined}
      {...rest}
    >
      <Input
        value={state.dollars}
        onChange={handleInputChange}
        onBlur={() => {
          setState((prev) => ({
            ...prev,
            dollars: formattedDollars !== 'NaN' ? formattedDollars : '',
          }));
        }}
      />
    </ProForm.Item>
  );
};
