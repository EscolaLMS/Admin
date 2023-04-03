import Input from 'antd/lib/input';

import { useCallback, useMemo, memo } from 'react';
import { parse, Essay } from 'gift-pegjs';
import { Space } from 'antd';

export const GiftQuizQuestionEsseyEditor: React.FC<{
  value: string;
  onChange: (value: string) => void;
}> = memo(({ value, onChange }) => {
  const output = useMemo(() => {
    if (value) {
      return parse(value);
    }
    return;
  }, [value]);

  const question: Essay | undefined = useMemo(() => {
    if (output && output[0].type === 'Essay') {
      return output[0];
    }
    return undefined;
  }, [output]);

  const setNewValue = useCallback((title: string) => {
    onChange(`${title}{}`);
  }, []);

  const textValue = useMemo(() => {
    return question?.stem.text;
  }, [question]);

  return (
    <div>
      {question && (
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
          <Input.TextArea
            defaultValue={textValue}
            size="small"
            value={textValue}
            onChange={(e) => setNewValue(e.target.value)}
          />
        </Space>
      )}
    </div>
  );
});
