import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Select, Spin } from 'antd';

import { FormattedMessage } from 'umi';
import { questionnaire, getQuestionnaire } from '@/services/escola-lms/questionnaire';

export const QuestionnaireSelect: React.FC<{
  state?: {
    type: number;
  };
  multiple?: boolean;
  value?: string;
  onChange?: (value: string) => void;
  defaultValue?: number[];
}> = ({ value, onChange, multiple = false, defaultValue }) => {
  const [questionnaires, setQuestionnaires] = useState<API.Questionnaire[]>([]);
  const [fetching, setFetching] = useState(false);

  const abortController = useRef<AbortController>();

  const fetch = useCallback(() => {
    setFetching(true);
    if (abortController.current) {
      abortController.current.abort();
    }

    abortController.current = new AbortController();
    questionnaire({ signal: abortController.current.signal })
      .then((response) => {
        if (response.success) {
          setQuestionnaires(response.data);
        }
        setFetching(false);
      })
      .catch(() => setFetching(false));
  }, []);

  const onSearch = useCallback(
    (search) => {
      fetch(search);
    },
    [fetch],
  );

  useEffect(() => {
    const controller = new AbortController();

    if (value) {
      getQuestionnaire(Number(value), { signal: controller.signal }).then(
        (response) =>
          response.success && setQuestionnaires((prevCourses) => [...prevCourses, response.data]),
        // TODO don't reset. unique table
      );
    }
    return () => {
      controller.abort();
    };
  }, [value]);

  return (
    <Select
      defaultValue={defaultValue && defaultValue}
      onFocus={() => fetch()}
      allowClear
      style={{ width: '100%' }}
      value={value}
      onChange={onChange}
      mode={multiple ? 'multiple' : undefined}
      showSearch
      onSearch={onSearch}
      placeholder={
        <FormattedMessage id="select_questionnaire" defaultMessage="Select a questionnaire" />
      }
      optionFilterProp="children"
      filterOption={(input, option) =>
        option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
      notFoundContent={fetching ? <Spin size="small" /> : null}
    >
      {questionnaires.map((questionaire) => (
        <Select.Option key={questionaire.id} value={questionaire.id}>
          {questionaire.title}
        </Select.Option>
      ))}
    </Select>
  );
};

export default QuestionnaireSelect;
