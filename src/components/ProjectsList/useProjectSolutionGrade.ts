import type { RuleObject } from 'antd/es/form';
import { useCallback, useMemo } from 'react';
import { useIntl } from 'umi';

import { getProjectSolution, gradeProjectSolution } from '@/services/escola-lms/projects';

import { notifyResult } from './notify';
import { MIN_SCORE, resolveEffectiveMaxScore, validateScore } from './projectSolutionGrade';

export interface ProjectSolutionGradeFormData {
  score?: number;
}

interface Params {
  solution?: API.ProjectSolution;
  maxScore?: number;
  onSuccess?: () => void;
}

export const useProjectSolutionGrade = ({ solution, maxScore, onSuccess }: Params) => {
  const intl = useIntl();

  const effectiveMaxScore = resolveEffectiveMaxScore(maxScore, solution?.max_score);

  const loadInitial = useCallback(
    async ({ id }: { id?: number }): Promise<ProjectSolutionGradeFormData> => {
      if (id === undefined) return { score: undefined };
      const res = await getProjectSolution(id);
      const data = res.success ? res.data : solution;
      return { score: data?.score ?? undefined };
    },
    [solution],
  );

  const onFinish = useCallback(
    async (formData: ProjectSolutionGradeFormData) => {
      if (solution?.id === undefined || formData.score == null) return;

      if (effectiveMaxScore == null) return;

      const res = await gradeProjectSolution(solution.id, {
        score: formData.score,
        max_score: effectiveMaxScore,
      });

      notifyResult(res.success, intl, onSuccess);
    },
    [solution, effectiveMaxScore, intl, onSuccess],
  );

  const scoreRules = useMemo<RuleObject[]>(
    () => [
      {
        required: true,
        message: intl.formatMessage({ id: 'field_required', defaultMessage: 'Field is required' }),
      },
      {
        validator: (_rule, value) => {
          const error = validateScore(value, effectiveMaxScore);
          if (error === 'negative') {
            return Promise.reject(
              new Error(
                intl.formatMessage({
                  id: 'score_must_be_positive',
                  defaultMessage: 'Score must be 0 or greater.',
                }),
              ),
            );
          }
          if (error === 'exceeds_max') {
            return Promise.reject(
              new Error(
                intl.formatMessage({
                  id: 'score_must_not_exceed_max',
                  defaultMessage: 'Score cannot exceed max score.',
                }),
              ),
            );
          }
          return Promise.resolve();
        },
      },
    ],
    [effectiveMaxScore, intl],
  );

  return {
    effectiveMaxScore,
    hasMaxScore: effectiveMaxScore != null,
    minScore: MIN_SCORE,
    loadInitial,
    onFinish,
    scoreRules,
  };
};

export default useProjectSolutionGrade;
