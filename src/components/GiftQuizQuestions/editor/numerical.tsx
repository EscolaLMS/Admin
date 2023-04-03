import Input from 'antd/lib/input';

import { useCallback, useMemo } from 'react';
import { parse, Numerical, NumericalFormat } from 'gift-pegjs';
import { Space, Tooltip, InputNumber } from 'antd';
import { useIntl } from '@@/plugin-locale/localeExports';

export const GiftQuizQuestionNumericalEditor: React.FC<{
  value: string;
  onChange: (value: string) => void;
}> = ({ value, onChange }) => {
  const output = useMemo(() => {
    if (value) {
      return parse(value);
    }
  }, [value]);

  const intl = useIntl();

  const question: Numerical | undefined = useMemo(() => {
    if (output && output[0].type === 'Numerical') {
      return output[0];
    }
    return undefined;
  }, [output]);

  const setNewValue = useCallback((title: string, format: NumericalFormat) => {
    onChange(`${title}{#${format.number}:${format.range}}`);
  }, []);

  return (
    <div>
      {question && (
        <Space direction="horizontal" size="middle" style={{ display: 'flex' }}>
          <Input
            size="small"
            value={question.stem.text}
            onChange={(e) => setNewValue(e.target.value, question.choices as NumericalFormat)}
          />
          <Tooltip
            title={intl.formatMessage({
              id: 'correctAnswer',
              defaultMessage: 'Correct Answer',
            })}
          >
            <InputNumber
              size="small"
              value={(question.choices as NumericalFormat).number}
              onChange={(n) => {
                if (n) {
                  setNewValue(question.stem.text, {
                    ...(question.choices as NumericalFormat),
                    number: n,
                  });
                }
              }}
            />
          </Tooltip>
          <Tooltip
            title={intl.formatMessage({
              id: 'errorMargin',
              defaultMessage: 'Error Margin',
            })}
          >
            <InputNumber
              size="small"
              defaultValue={0}
              addonAfter="+/-"
              value={(question.choices as NumericalFormat).range}
              onChange={(n) => {
                setNewValue(question.stem.text, {
                  ...(question.choices as NumericalFormat),
                  range: n ?? 0,
                });
              }}
            />
          </Tooltip>
        </Space>
      )}
    </div>
  );
};
