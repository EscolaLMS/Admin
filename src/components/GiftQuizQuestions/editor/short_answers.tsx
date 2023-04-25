import Input from 'antd/lib/input';

import { useCallback, useMemo } from 'react';
import { parse, TextChoice, ShortAnswer } from '@escolalms/gift-pegjs';
import { Button, Space } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import { FormattedMessage } from 'umi';
import { useIntl } from '@@/plugin-locale/localeExports';

export const GiftQuizQuestionShortEditor: React.FC<{
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

  const question: ShortAnswer | undefined = useMemo(() => {
    if (output && output[0].type === 'Short') {
      return output[0];
    }
    return undefined;
  }, [output]);

  const setNewValue = useCallback((title: string, choices: TextChoice[]) => {
    onChange(`${title}{${choices.map((choice) => `=${choice.text.text}`).join(' ')}}`);
  }, []);

  const onMCQuestionChange = useCallback(
    (newValue: string) => {
      if (question) {
        setNewValue(newValue, question?.choices);
      }
    },
    [question],
  );

  const onMCChoiceChange = useCallback(
    (choice: TextChoice, index: number) => {
      if (question) {
        const choices = question.choices.map((choiceRow, choiceIndex) =>
          choiceIndex === index ? choice : choiceRow,
        );

        setNewValue(question.stem.text, choices);
      }
    },
    [question],
  );

  const onMCQuestionAdd = useCallback(() => {
    if (question) {
      const newChoice: TextChoice = {
        text: {
          format: 'moodle',
          text: 'New Answer',
        },
        weight: null,
        feedback: null,
        isCorrect: false,
      };
      const choices = [...question.choices, newChoice];
      setNewValue(question.stem.text, choices);
    }
  }, [question]);

  const onMCQuestionDelete = useCallback(
    (index: number) => {
      if (question) {
        const choices = question.choices.filter((_, choiceIndex) => choiceIndex !== index);
        setNewValue(question.stem.text, choices);
      }
    },
    [question],
  );

  return (
    <div>
      {question && (
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
          <Input
            size="small"
            value={question.stem.text}
            onChange={(e) => onMCQuestionChange(e.target.value)}
          />
          {question.choices.map((choice, i) => (
            <div>
              <Space direction="horizontal">
                <Tooltip
                  title={intl.formatMessage({
                    id: 'answer',
                    defaultMessage: 'Answer',
                  })}
                >
                  <Input
                    size="small"
                    value={choice.text.text}
                    onChange={(e) =>
                      onMCChoiceChange(
                        { ...choice, text: { ...choice.text, text: e.target.value } },
                        i,
                      )
                    }
                  />
                </Tooltip>

                <Button
                  size="small"
                  icon={<DeleteOutlined />}
                  onClick={() => onMCQuestionDelete(i)}
                />
              </Space>
            </div>
          ))}
          <Button size="small" onClick={() => onMCQuestionAdd()}>
            <FormattedMessage id="addQuestion" defaultMessage="Add Question" />
          </Button>
        </Space>
      )}
    </div>
  );
};
