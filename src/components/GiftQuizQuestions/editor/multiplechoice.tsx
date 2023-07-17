import { Children } from 'react';
import Input from 'antd/lib/input';

import { useCallback, useMemo } from 'react';
import { parse } from '@escolalms/gift-pegjs';
import type { MultipleChoice, TextChoice } from '@escolalms/gift-pegjs';
import { Button, Checkbox, Space } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { Tooltip, InputNumber } from 'antd';
import { FormattedMessage } from 'umi';
import { useIntl } from '@@/plugin-locale/localeExports';

export const GiftQuizQuestionMultipleChoiceEditor: React.FC<{
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

  const question: MultipleChoice | undefined = useMemo(() => {
    if (output && output[0].type === 'MC') {
      return output[0];
    }
    return undefined;
  }, [output]);

  const setNewValue = useCallback((title: string, choices: TextChoice[]) => {
    onChange(
      `${title}{${choices
        .map(
          (choice) =>
            `${choice.isCorrect ? '=' : '~'}${choice.weight ? `%${choice.weight}%` : ''}${
              choice.text.text
            }`,
        )
        .join(' ')}}`,
    );
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
          text: 'New Choice',
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
          <Tooltip
            title={intl.formatMessage({
              id: 'multipleChoiceTooltip',
              defaultMessage: 'Title, use `_____` for "Mark the Word" question type',
            })}
          >
            <Input
              size="small"
              value={question.stem.text}
              onChange={(e) => onMCQuestionChange(e.target.value)}
            />
          </Tooltip>
          {Children.toArray(
            question.choices.map((choice, i) => (
              <div>
                <Space direction="horizontal">
                  <Tooltip
                    title={intl.formatMessage({
                      id: 'correctAnswer',
                      defaultMessage: 'Is Correct Answer?',
                    })}
                  >
                    <Checkbox
                      checked={choice.isCorrect}
                      onChange={(e) =>
                        onMCChoiceChange({ ...choice, isCorrect: e.target.checked }, i)
                      }
                    />
                  </Tooltip>

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
                  <Tooltip
                    title={intl.formatMessage({
                      id: 'weight',
                      defaultMessage: 'Weight',
                    })}
                  >
                    <InputNumber
                      size="small"
                      addonAfter="%"
                      defaultValue={undefined}
                      value={choice.weight}
                      min={1}
                      max={100}
                      onChange={(n) => {
                        onMCChoiceChange({ ...choice, weight: n ?? null }, i);
                      }}
                    />
                  </Tooltip>
                  <Button
                    size="small"
                    icon={<DeleteOutlined />}
                    onClick={() => onMCQuestionDelete(i)}
                    disabled={question.choices.length <= 2}
                  />
                </Space>
              </div>
            )),
          )}
          <Button size="small" onClick={() => onMCQuestionAdd()}>
            <FormattedMessage id="Questions.add" defaultMessage="Add question" />
          </Button>
        </Space>
      )}
    </div>
  );
};
