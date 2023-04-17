import Input from 'antd/lib/input';

import { useCallback, useMemo } from 'react';
import { parse, Matching, Match } from '@escolalms/gift-pegjs';
import { Button, Space } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { FormattedMessage } from 'umi';

export const GiftQuizQuestionMatchingEditor: React.FC<{
  value: string;
  onChange: (value: string) => void;
}> = ({ value, onChange }) => {
  const output = useMemo(() => {
    if (value) {
      return parse(value);
    }
    return;
  }, [value]);

  const question: Matching | undefined = useMemo(() => {
    if (output && output[0].type === 'Matching') {
      return output[0];
    }
    return undefined;
  }, [output]);

  const setNewValue = useCallback((title: string, pairs: Match[]) => {
    onChange(
      `${title}{
        ${pairs.map((pair) => `=${pair.subquestion.text} -> ${pair.subanswer}`).join('\n')}
      }`,
    );
  }, []);

  const onMatchingQuestionChange = useCallback(
    (newValue: string) => {
      if (question) {
        setNewValue(newValue, question?.matchPairs);
      }
    },
    [question],
  );

  const onMatchingPairChange = useCallback(
    (pair: Match, index: number) => {
      if (question) {
        const pairs = question.matchPairs.map((pairRow, pairIndex) =>
          pairIndex === index ? pair : pairRow,
        );

        setNewValue(question.stem.text, pairs);
      }
    },
    [question],
  );

  const onMatchingQuestionAdd = useCallback(() => {
    if (question) {
      const newChoice: Match = {
        subanswer: 'Answer',
        subquestion: {
          format: 'moodle',
          text: 'New Question',
        },
      };

      const pairs = [...question.matchPairs, newChoice];
      setNewValue(question.stem.text, pairs);
    }
  }, [question]);

  const onMatchingPairDelete = useCallback(
    (index: number) => {
      if (question) {
        const pairs = question.matchPairs.filter((_, pairIndex) => pairIndex !== index);
        setNewValue(question.stem.text, pairs);
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
            onChange={(e) => onMatchingQuestionChange(e.target.value)}
          />
          {question.matchPairs.map((pair, i) => (
            <div>
              <Space direction="horizontal">
                <Input
                  size="small"
                  value={pair.subquestion.text}
                  onChange={(e) =>
                    onMatchingPairChange(
                      { ...pair, subquestion: { ...pair.subquestion, text: e.target.value } },
                      i,
                    )
                  }
                />

                <Input
                  size="small"
                  value={pair.subanswer}
                  onChange={(e) => onMatchingPairChange({ ...pair, subanswer: e.target.value }, i)}
                />

                <Button
                  size="small"
                  icon={<DeleteOutlined />}
                  onClick={() => onMatchingPairDelete(i)}
                />
              </Space>
            </div>
          ))}
          <Button size="small" onClick={() => onMatchingQuestionAdd()}>
            <FormattedMessage id="addPair" defaultMessage="Add Matching Pair" />
          </Button>
        </Space>
      )}
    </div>
  );
};
