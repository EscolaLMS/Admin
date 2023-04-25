import React, { useState, useCallback, useEffect } from 'react';
import { Button, Input, Col, Row } from 'antd';

import 'jsoneditor-react/es/editor.min.css';

import { getAllLocales } from 'umi';
import { PlusCircleFilled } from '@ant-design/icons';

const defaultValue = () =>
  getAllLocales().reduce((acc, curr) => {
    return { ...acc, [curr]: '' };
  }, {} as Record<string, string>);

export const JsonLangEditor: React.FC<{
  value?: string | object;
  onChange?: (value: string | object) => void;
}> = ({ value, onChange }) => {
  const [state, setState] = useState<Record<string, string>>(defaultValue());

  useEffect(() => {
    const obj = typeof value === 'object' ? value : JSON.parse(value ?? '{}');
    setState(Object.assign(defaultValue(), obj));
  }, [value]);

  useEffect(() => {
    if (onChange) {
      if (JSON.stringify(state) !== JSON.stringify(value)) {
        onChange(state);
      }
    }
  }, [state]);

  const onLangAdd = useCallback(() => {
    setState((prevState) => ({ ...prevState, lang: '' }));
  }, []);

  const onRowChange = useCallback((index: number, lang: string, newValue: string) => {
    setState((prevState) =>
      Object.entries(prevState).reduce((acc, curr, i) => {
        if (i === index) {
          return {
            ...acc,
            [lang]: newValue,
          };
        }
        return { ...acc, [curr[0]]: curr[1] };
      }, {}),
    );
  }, []);

  return (
    <div>
      {Object.entries(state).map((entry, i) => (
        <Row key={i}>
          <Col span={6}>
            <Input
              disabled={getAllLocales().includes(entry[0])}
              value={entry[0]}
              maxLength={5}
              onChange={(e) => onRowChange(i, e.target.value, entry[1])}
            />
          </Col>
          <Col span={24 - 6}>
            <Input value={entry[1]} onChange={(e) => onRowChange(i, entry[0], e.target.value)} />
          </Col>
        </Row>
      ))}
      <Button onClick={() => onLangAdd()} icon={<PlusCircleFilled />}></Button>
    </div>
  );
};

export default JsonLangEditor;
