import UserSelect from '@/components/UserSelect';
import { DEFAULT_GRADE_WEIGHT, GRADEBOOK_FIELDS } from '@/consts/gradebook';
import ProForm, { ProFormDigit, ProFormGroup, ProFormSwitch } from '@ant-design/pro-form';
import React, { useCallback, useState } from 'react';
import { FormattedMessage, useIntl } from 'umi';

type SelectValue = string | number | string[] | number[];

type ProjectChangeKey =
  | 'notify_users'
  | typeof GRADEBOOK_FIELDS.flag
  | typeof GRADEBOOK_FIELDS.weight;

type ProjectChangeValue = SelectValue | boolean | number | null;

interface Props {
  onChange: (key: ProjectChangeKey, value: ProjectChangeValue) => void;
  topicable: API.TopicProject['topicable'];
}

export const Project: React.FC<Props> = ({ onChange, topicable }) => {
  const intl = useIntl();
  const [addToGradebook, setAddToGradebook] = useState<boolean>(
    Boolean(topicable?.add_to_gradebook),
  );

  const onValuesChange = useCallback(
    (values: Record<string, ProjectChangeValue>) => {
      const key = Object.keys(values)[0] as ProjectChangeKey;
      if (!key) return;
      if (key === GRADEBOOK_FIELDS.flag) {
        setAddToGradebook(Boolean(values[key]));
      }
      onChange(key, values[key]);
    },
    [onChange],
  );

  return (
    <React.Fragment>
      <ProForm
        initialValues={{
          notify_users: topicable?.notify_users ?? [],
          [GRADEBOOK_FIELDS.flag]: Boolean(topicable?.add_to_gradebook),
          [GRADEBOOK_FIELDS.weight]: topicable?.grade_weight ?? DEFAULT_GRADE_WEIGHT,
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
        <ProFormGroup>
          <ProFormSwitch
            name={GRADEBOOK_FIELDS.flag}
            label={
              <FormattedMessage id="add_to_gradebook" defaultMessage="Add grade to gradebook" />
            }
            tooltip={
              <FormattedMessage
                id="add_to_gradebook_tooltip"
                defaultMessage="When enabled, this grade is counted in the subject gradebook."
              />
            }
          />
          {addToGradebook && (
            <ProFormDigit
              name={GRADEBOOK_FIELDS.weight}
              label={<FormattedMessage id="grade_weight" defaultMessage="Grade weight" />}
              tooltip={
                <FormattedMessage id="grade_weight_tooltip" defaultMessage="Default weight is 1." />
              }
              extra={
                <FormattedMessage
                  id="grade_weight_default_hint"
                  defaultMessage="Default weight is 1."
                />
              }
              min={0}
              fieldProps={{ step: 0.25, precision: 2 }}
              rules={[
                {
                  validator: (_rule, value) =>
                    value === undefined || value === null || Number(value) > 0
                      ? Promise.resolve()
                      : Promise.reject(
                          new Error(
                            intl.formatMessage({
                              id: 'grade_weight_must_be_positive',
                              defaultMessage: 'Weight must be greater than 0.',
                            }),
                          ),
                        ),
                },
              ]}
            />
          )}
        </ProFormGroup>
      </ProForm>
    </React.Fragment>
  );
};

export default Project;
