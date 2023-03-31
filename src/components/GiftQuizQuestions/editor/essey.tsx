import Input from 'antd/lib/input';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { parse, GIFTQuestion, Essay } from 'gift-pegjs';
import { Space } from 'antd';

export const GiftQuizQuestionEsseyEditor: React.FC<{
  value: string;
  onChange: (value: string) => void;
}> = ({ value, onChange }) => {
  const [output, setOutput] = useState<GIFTQuestion[]>();

  useEffect(() => {
    if (value) {
      setOutput(parse(value));
    }
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
