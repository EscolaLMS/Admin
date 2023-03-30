import TextArea from 'antd/lib/input/TextArea';
import Input from 'antd/lib/input';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { parse, GIFTQuestion, MultipleChoice, QuestionType, TextChoice } from 'gift-pegjs';
import { Button, Checkbox, Space } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

enum GiftType {
  'MultipleChoice' = 'MultipleChoice',
}

enum DefaultQuestions {
  'MultipleChoice' = "Who's buried in Grant's tomb?{~Grant ~Jefferson =no one}",
}

function isMultipleChoice(question: MultipleChoice): question is MultipleChoice {
  return question.type === 'MC';
}
//MultipleChoice
export const GiftQuizQuestionEditor = () => {
  //const [type, setType] = useState<GiftType>(GiftType.MultipleChoice);
  const [value, setValue] = useState<string>(DefaultQuestions[GiftType.MultipleChoice]);
  const [output, setOutput] = useState<GIFTQuestion[]>();

  /*
  useEffect(() => {
    setValue(DefaultQuestions[type]);
  }, [type]);
  */

  useEffect(() => {
    console.log('v', value);
    value && setOutput(parse(value));
  }, [value]);

  const question: MultipleChoice | undefined = useMemo(() => {
    if (output && output[0].type === 'MC') {
      return output[0];
    }
    return undefined;
  }, [output]);

  const setNewValue = useCallback((title: string, choices: TextChoice[]) => {
    setValue(
      `${title}{${choices
        .map((choice) => `${choice.isCorrect ? '=' : '~'}${choice.text.text}`)
        .join(' ')}}`,
    );
  }, []);

  const onMCQuestionChange = useCallback(
    (value: string) => {
      if (question) {
        setNewValue(value, question?.choices);
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
        <div>
          <Input value={question.stem.text} onChange={(e) => onMCQuestionChange(e.target.value)} />
          {question.choices.map((choice, i) => (
            <div key={i}>
              <Space direction="horizontal">
                <Checkbox
                  checked={choice.isCorrect}
                  onChange={(e) => onMCChoiceChange({ ...choice, isCorrect: e.target.checked }, i)}
                />

                <Input
                  value={choice.text.text}
                  onChange={(e) =>
                    onMCChoiceChange(
                      { ...choice, text: { ...choice.text, text: e.target.value } },
                      i,
                    )
                  }
                />
                <Button icon={<DeleteOutlined />} onClick={() => onMCQuestionDelete(i)} />
              </Space>
            </div>
          ))}
          <Button onClick={() => onMCQuestionAdd()}>add question</Button>
        </div>
      )}
      <TextArea readOnly value={value}></TextArea>
    </div>
  );
};
