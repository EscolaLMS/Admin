import type { RuleObject } from 'antd/es/form';
import { message } from 'antd';
import { useCallback, useMemo } from 'react';
import { useIntl } from 'umi';

import { getProjectSolution, gradeProjectSolution } from '@/services/escola-lms/projects';

import {
  canSubmitGrade,
  MIN_SCORE,
  resolveEffectiveMaxScore,
  validateScore,
} from './projectSolutionGrade';

export interface ProjectSolutionGradeFormData {
  score?: number;
}

interface Params {
  solution?: API.ProjectSolution;
  maxScore?: number;
  onSuccess?: () => void;
}

/**
 * Encapsulates the data + validation logic for grading a project solution:
 * resolves the effective max score, loads the current score, submits the grade,
 * and builds the score-input validation rules. The drawer only renders.
 */
export const useProjectSolutionGrade = ({ solution, maxScore, onSuccess }: Params) => {
  const intl = useIntl();

  // Max score is fixed by the project topic (not editable here); shown next to the score input.
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
      if (!canSubmitGrade(solution?.id, formData.score, effectiveMaxScore)) return;

      const res = await gradeProjectSolution(solution!.id, {
        score: Number(formData.score),
        max_score: Number(effectiveMaxScore),
      });

      if (!res.success) {
        message.error(intl.formatMessage({ id: 'error', defaultMessage: 'error' }));
        return;
      }

      message.success(intl.formatMessage({ id: 'success', defaultMessage: 'success' }));
      onSuccess?.();
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

  return { effectiveMaxScore, minScore: MIN_SCORE, loadInitial, onFinish, scoreRules };
};

export default useProjectSolutionGrade;