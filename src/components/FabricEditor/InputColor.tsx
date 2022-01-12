import React, { useCallback, useMemo } from 'react';
import { toNumber } from 'lodash';

const mapInputAlphaToHexAlpha = (number: number | string): string => {
  return toNumber(number) === 1 ? '' : ('0' + +number * 100).slice(-2);
};

const InputColor: React.FC<{
  className?: string;
  name?: string;
  value: string; // hex or hexA
  onChange: (value: string) => void;
}> = ({ className = '', name, value, onChange }) => {
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
    <div className={className}>
      <input name={name} value={color} onChange={onChangeColor} type="color" />
      <input
        name={name + 'Alpha'}
        value={alpha}
        onChange={onChangeAlpha}
        type="range"
        min="0"
        max="1"
        step="0.1"
      />
    </div>
  );
};

export default InputColor;
