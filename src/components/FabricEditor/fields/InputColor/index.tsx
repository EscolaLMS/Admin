import React, { useCallback, useMemo } from 'react';
import { toNumber } from 'lodash';
import { Input, Form } from 'antd';
import './index.css';

const mapInputAlphaToHexAlpha = (number: number | string): string => {
  return toNumber(number) === 1 ? '' : ('0' + +number * 100).slice(-2);
};

const InputColor: React.FC<{
  className?: string;
  value: string; // hex or hexA
  onChange: (value: string) => void;
  label?: string;
  name?: string;
  style?: Object;
}> = ({ className = '', name, value, onChange, label, style }) => {
  const [color, alpha] = useMemo(() => {
    if (value && value.length === 9) return [value.substring(0, 7), +value.substring(7, 9) / 100];
    return [value, 1];
  }, [value]);

  const onChangeColor = useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      onChange(event.currentTarget.value + mapInputAlphaToHexAlpha(alpha));
    },
    [onChange, alpha],
  );

  const onChangeAlpha = useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      onChange(color + mapInputAlphaToHexAlpha(event.currentTarget.value));
    },
    [onChange, color],
  );

  return (
    <div className={`input-color ${className}`} style={style}>
      <Form.Item label={label}>
        <Input.Group className={`input-color__container`} size="small">
          <Input
            className="input-color__color"
            name={name}
            value={color}
            onChange={onChangeColor}
            type="color"
          />

          <Input
            className="input-color__opacity"
            name={name + 'Alpha'}
            value={alpha}
            onChange={onChangeAlpha}
            type="range"
            min="0"
            max="1"
            step="0.1"
          />
        </Input.Group>
      </Form.Item>
    </div>
  );
};

export default InputColor;
