import UserSelect from '@/components/UserSelect';
import ProForm from '@ant-design/pro-form';
import React, { useCallback } from 'react';
import { FormattedMessage } from 'umi';
import { AddToGradebookFields } from '../addToGradebookFields';
import type { GradebookFieldKey } from '../gradebook';
import { gradebookInitialValues } from '../gradebook';

type SelectValue = string | number | string[] | number[];

type ProjectChangeKey = 'notify_users' | GradebookFieldKey;

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
        <AddToGradebookFields />
      </ProForm>
    </React.Fragment>
  );
};

export default Project;
