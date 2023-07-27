import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useParams } from 'umi';

import { getCompetencyChallenge } from '@/services/escola-lms/competency-challenges';
import { configs as getConfig } from '@/services/escola-lms/settings';

interface CategoryDepths {
  scale: number;
  question: number;
}

interface CompetencyChallengeContextData {
  data: API.CompetencyChallenge | null;
  loading: boolean;
  error?: unknown;
}

export interface CompetencyChallengeContext {
  categoryDepths: CategoryDepths;
  competencyChallenge: CompetencyChallengeContextData;
  refreshData: () => Promise<void>;
}

const initialValues: CompetencyChallengeContext = {
  categoryDepths: { scale: 1, question: 0 },
  competencyChallenge: { data: null, loading: false },
  refreshData: async () => console.warn('CONTEXT INIT'),
};

const Context = React.createContext<CompetencyChallengeContext>(initialValues);

export const useCompetencyChallengeContext = () => useContext(Context);

export const CompetencyChallengeContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [competencyChallenge, setCompetencyChallenge] = useState<CompetencyChallengeContextData>(
    initialValues.competencyChallenge,
  );
  const [categoryDepths, setCategoryDepths] = useState<CategoryDepths>(
    initialValues.categoryDepths,
  );

  const { id } = useParams<{ id?: string }>();
  const competency_challenge_id = Number(id);

  const refreshData = useCallback(async () => {
    if (Number.isNaN(competency_challenge_id)) return;

    try {
      setCompetencyChallenge((prev) => ({ ...prev, loading: true }));
      const res = await getCompetencyChallenge(competency_challenge_id);

      if (!res.success) {
        setCompetencyChallenge((prev) => ({ ...prev, error: res.errors }));
        return;
      }

      setCompetencyChallenge((prev) => ({ ...prev, data: res.data }));
    } catch (error) {
      setCompetencyChallenge((prev) => ({ ...prev, error }));
    } finally {
      setCompetencyChallenge((prev) => ({ ...prev, loading: false }));
    }
  }, [competency_challenge_id]);

  const fetchCategoryDepths = useCallback(async () => {
    try {
      const res = await getConfig();
      if (!res.success) return;

      const scale = Number(
        (res.data?.escolalms_competency_challenge as any)?.category?.scale?.depth?.value,
      );
      const question = Number(
        (res.data?.escolalms_competency_challenge as any)?.category?.question?.depth?.value,
      );

      setCategoryDepths({
        scale: Number.isNaN(scale) ? 1 : scale,
        question: Number.isNaN(question) ? 0 : question,
      });
    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    refreshData();
    fetchCategoryDepths();
  }, [refreshData, fetchCategoryDepths]);

  return (
    <Context.Provider value={{ categoryDepths, competencyChallenge, refreshData }}>
      {children}
    </Context.Provider>
  );
};
