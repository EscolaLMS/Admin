import { ProFormDependency, ProFormDigit, ProFormGroup, ProFormSwitch } from '@ant-design/pro-form';
import React from 'react';
import { FormattedMessage, useIntl } from 'umi';
import {
  GRADEBOOK_FIELDS,
  MAX_GRADE_WEIGHT,
  MIN_GRADE_WEIGHT,
  isValidGradeWeight,
} from './gradebook';

/**
 * AW-23: gradebook fields shared by the quiz and project topic forms.
 * Render inside a `ProForm` seeded with `gradebookInitialValues(topicable)`.
 */
export const AddToGradebookFields: React.FC = () => {
  const intl = useIntl();

  return (
    <ProFormDependency name={[GRADEBOOK_FIELDS.flag]}>
      {(values) => (
        <ProFormGroup>
          <ProFormSwitch
            name={GRADEBOOK_FIELDS.flag}
            label={<FormattedMessage id="counts_to_grade" defaultMessage="Show in final grade" />}
            tooltip={
              <FormattedMessage
                id="counts_to_grade_tooltip"
                defaultMessage="When enabled, this item appears in the final grade and qualifies for a partial grade."
              />
            }
          />
          {Boolean(values[GRADEBOOK_FIELDS.flag]) && (
            <ProFormDigit
              name={GRADEBOOK_FIELDS.weight}
              label={<FormattedMessage id="grade_weight" defaultMessage="Grade weight (1-100%)" />}
              tooltip={
                <FormattedMessage
                  id="grade_weight_tooltip"
                  defaultMessage="Default weight is 100%."
                />
              }
              min={MIN_GRADE_WEIGHT}
              max={MAX_GRADE_WEIGHT}
              fieldProps={{ step: 5, decimalSeparator: ',' }}
              formItemProps={{ style: { maxWidth: 216 } }}
              rules={[
                {
                  validator: (_rule, value) =>
                    isValidGradeWeight(value)
                      ? Promise.resolve()
                      : Promise.reject(
                          new Error(
                            intl.formatMessage(
                              {
                                id: 'grade_weight_out_of_range',
                                defaultMessage:
                                  'Weight must be a whole number between {min} and {max}%.',
                              },
                              { min: MIN_GRADE_WEIGHT, max: MAX_GRADE_WEIGHT },
                            ),
                          ),
                        ),
                },
              ]}
            />
          )}
        </ProFormGroup>
      )}
    </ProFormDependency>
  );
};

export default AddToGradebookFields;
