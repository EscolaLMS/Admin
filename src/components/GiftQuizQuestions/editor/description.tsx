import Input from 'antd/lib/input';

import { useCallback, useMemo } from 'react';
import { parse, Description } from 'gift-pegjs';
import { Space } from 'antd';

export const GiftQuizQuestionDescriptionEditor: React.FC<{
  value: string;
  onChange: (value: string) => void;
}> = ({ value, onChange }) => {
  const output = useMemo(() => {
    if (value) {
      return parse(value);
    }
    return;
  }, [value]);

  const question: Description | undefined = useMemo(() => {
    if (output && output[0].type === 'Description') {
      return output[0];
    }
    return undefined;
  }, [output]);

  const setNewValue = useCallback((title: string) => {
    onChange(`${title}`);
  }, []);

  return (
    <div>
      {question && (
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
          <Input.TextArea
            size="small"
            value={question.stem.text}
            onChange={(e) => setNewValue(e.target.value)}
          />
        </Space>
      )}
    </div>
  );
};
