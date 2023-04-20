import React, { useCallback } from 'react';
import { FormattedMessage } from 'umi';
import ProForm from '@ant-design/pro-form';
import UserSelect from '@/components/UserSelect';

type SelectValue = string | number | string[] | number[];

interface FormValues {
  notify_users: SelectValue;
}

interface Props {
  onChange: (value: SelectValue) => void;
  topicable: API.TopicProject['topicable'];
}

export const Project: React.FC<Props> = ({ onChange, topicable }) => {
  const onValuesChange = useCallback((values: FormValues) => {
    const key = Object.keys(values)[0];
    if (key) {
      onChange(values[key]);
    }
  }, []);

  return (
    <React.Fragment>
      <ProForm
        initialValues={{ notify_users: topicable?.notify_users ?? [] }}
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
      </ProForm>
    </React.Fragment>
  );
};

export default Project;
