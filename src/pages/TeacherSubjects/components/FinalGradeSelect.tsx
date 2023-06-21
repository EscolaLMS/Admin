import React, { useCallback, useMemo, useState } from 'react';
import { FormattedMessage } from 'umi';
import { Select } from 'antd';

import { createFinalGrade, updateFinalGrade } from '@/services/escola-lms/grades';

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

  const options = useMemo(
    () => gradeScales.map(({ name, id }) => ({ value: id, label: name })),
    [gradeScales],
  );

  const onChange = useCallback(
    (grade_scale_id: number) => {
      if (!finalGrades?.id) return;

      if (createdGrade) {
        setLoading(true);
        updateFinalGrade(createdGrade.id, {
          grade_scale_id,
        }).finally(() => setLoading(false));
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
          }
        })
        .finally(() => setLoading(false));
    },
    [createdGrade, term.id, finalGrades?.id],
  );

  if (!finalGrades) return null;

  return (
    <Select
      loading={loading}
      disabled={loading}
      placeholder={<FormattedMessage id="select_final_grade" />}
      style={{ width: '100%' }}
      onChange={onChange}
      options={options}
      defaultValue={getGradeScaleId(gradeScales, defaultFinalGrade?.grade_name)}
    />
  );
};
