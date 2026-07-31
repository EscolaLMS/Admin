import UserSelect from '@/components/UserSelect';
import ProForm, { ProFormDigit } from '@ant-design/pro-form';
import React, { useCallback } from 'react';
import { FormattedMessage } from 'umi';
import { AddToGradebookFields } from '../addToGradebookFields';
import type { GradebookFieldKey } from '../gradebook';
import { gradebookInitialValues } from '../gradebook';

type SelectValue = string | number | string[] | number[];

type ProjectChangeKey = 'notify_users' | 'max_score' | GradebookFieldKey;

type ProjectChangeValue = SelectValue | boolean | number | null;

interface Props {
  onChange: (key: ProjectChangeKey, value: ProjectChangeValue) => void;
  topicable: API.TopicProject['topicable'];
}

export const Project: React.FC<Props> = ({ onChange, topicable }) => {
  const onValuesChange = useCallback(
    (values: Record<string, ProjectChangeValue>) => {
      const key = Object.keys(values)[0] as ProjectChangeKey;
      if (!key) return;
      onChange(key, values[key]);
    },
    [onChange],
  );

  return (
    <React.Fragment>
      <ProForm
        initialValues={{
          notify_users: topicable?.notify_users ?? [],
          max_score: topicable?.max_score,
          ...gradebookInitialValues(topicable),
        }}
        onValuesChange={onValuesChange}
        submitter={false}
      >
        <ProForm.Item
          name="notify_users"
          label={<FormattedMessage id="notify_users" defaultMessage="Users to notify" />}
          tooltip={
            <FormattedMessage
              id="notify_users_tooltip"
              defaultMessage="Indicate which users should be notified about project upload"
            />
          }
        >
          <UserSelect multiple />
        </ProForm.Item>
        <ProFormDigit
          name="max_score"
          label={<FormattedMessage id="max_score" defaultMessage="Max score" />}
          tooltip={
            <FormattedMessage
              id="project_max_score_tooltip"
              defaultMessage="Default maximum points for this project, pre-fills the grading input."
            />
          }
          min={1}
          fieldProps={{ step: 1, precision: 0 }}
        />
        <AddToGradebookFields />
      </ProForm>
    </React.Fragment>
  );
};

export default Project;
