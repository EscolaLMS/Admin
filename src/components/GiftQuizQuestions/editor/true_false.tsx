import Input from 'antd/lib/input';

import { useCallback, useMemo } from 'react';
import { parse, TrueFalse } from '@escolalms/gift-pegjs';
import { Checkbox, Space } from 'antd';
import { Tooltip } from 'antd';
import { useIntl } from '@@/plugin-locale/localeExports';

export const GiftQuizQuestionTrueFalseEditor: React.FC<{
  value: string;
  onChange: (value: string) => void;
}> = ({ value, onChange }) => {
  const output = useMemo(() => {
    if (value) {
      return parse(value);
    }
    return;
  }, [value]);

  const intl = useIntl();

  const question: TrueFalse | undefined = useMemo(() => {
    if (output && output[0].type === 'TF') {
      return output[0];
    }
    return undefined;
  }, [output]);

  const setNewValue = useCallback((title: string, isTrue: boolean) => {
    onChange(`${title}{${isTrue ? 'T' : 'F'}}`);
  }, []);

  return (
    <div>
      {question && (
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
          <Tooltip
            title={intl.formatMessage({
              id: 'trueAnswer',
              defaultMessage: 'True Statement',
            })}
          >
            <Checkbox
              checked={question.isTrue}
              onChange={(e) => setNewValue(question.stem.text, e.target.checked)}
            />
          </Tooltip>
          <Input.TextArea
            size="small"
            value={question.stem.text}
            onChange={(e) => setNewValue(e.target.value, question.isTrue)}
          />
        </Space>
      )}
    </div>
  );
};
