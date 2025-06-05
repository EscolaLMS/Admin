import { Select, message } from 'antd';
import React, { useCallback, useMemo, useState } from 'react';
import { FormattedMessage, useIntl } from 'umi';

import { createFinalGrade, removeFinalGrade, updateFinalGrade } from '@/services/escola-lms/grades';
import type { ResponseError } from 'umi-request';

interface Props {
  term: API.GradeTerm;
  gradeScales: API.SubjectGradeScale[];
  defaultFinalGrade?: API.FinalGradeItemGrade;
  finalGrades?: API.FinalGradeItem;
}

const getGradeScaleId = (
  gradeScales: API.SubjectGradeScale[],
  name: string | undefined,
): number | undefined => gradeScales.find((scale) => scale.name === name)?.id;

export const FinalGradeSelect: React.FC<Props> = ({
  term,
  gradeScales,
  defaultFinalGrade,
  finalGrades,
}) => {
  const [createdGrade, setCreatedGrade] = useState(defaultFinalGrade);
  const [loading, setLoading] = useState(false);
  const [errorStatus, setErrorStatus] = useState(false);

  const intl = useIntl();
  const options = useMemo(
    () => gradeScales.map(({ name, id }) => ({ value: id, label: name })),
    [gradeScales],
  );

  const onError = (error: ResponseError) => {
    setErrorStatus(true);
    message.error(
      intl.formatMessage({
        id: error.data.message,
      }),
    );
  };

  const onChange = useCallback(
    (grade_scale_id: number | undefined) => {
      if (!finalGrades?.id) return;
      if (grade_scale_id === undefined) {
        if (!createdGrade) return;
        setLoading(true);
        removeFinalGrade(createdGrade.id)
          .then((res) => {
            if (!res.success) return;
            setCreatedGrade(undefined);
          })
          .finally(() => setLoading(false));
        return;
      }

      if (createdGrade) {
        setLoading(true);
        updateFinalGrade(createdGrade.id, {
          grade_scale_id,
        })
          .catch((error) => {
            if (error?.data?.message) {
              onError(error);
            }
          })
          .finally(() => setLoading(false));
        return;
      }

      setLoading(true);
      createFinalGrade({
        grade_term_id: term.id,
        grade_scale_id,
        lesson_group_user_id: finalGrades.id,
      })
        .then((res) => {
          if (res.success) {
            const recentGrade = res.data.grades.find((grade) => grade.grade_term.id === term.id);
            setCreatedGrade(recentGrade);
            if (errorStatus) setErrorStatus(false);
          }
        })
        .catch((error) => {
          if (error?.data?.message) {
            onError(error);
          }
        })
        .finally(() => setLoading(false));
    },
    [createdGrade, term.id, finalGrades?.id],
  );

  if (!finalGrades) return null;

  return (
    <Select
      allowClear
      status={errorStatus ? 'error' : ''}
      loading={loading}
      disabled={loading || finalGrades.semester_closed}
      placeholder={<FormattedMessage id="select_final_grade" />}
      style={{ width: '100%' }}
      onChange={onChange}
      options={options}
      defaultValue={getGradeScaleId(gradeScales, defaultFinalGrade?.grade_name)}
    />
  );
};
