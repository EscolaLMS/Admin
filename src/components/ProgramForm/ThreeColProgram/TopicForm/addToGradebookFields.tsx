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
    // The grade weight input is only relevant when the item counts to the grade, so it
    // follows the switch value straight from the form instead of a mirrored local state.
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
              // Same 1-100 percent scale as the exam weight, so the stepper cannot reach a
              // value isValidGradeWeight then rejects.
              min={MIN_GRADE_WEIGHT}
              max={MAX_GRADE_WEIGHT}
              fieldProps={{ step: 5 }}
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
                                defaultMessage: 'Weight must be between {min} and {max}%.',
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
