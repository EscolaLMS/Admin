import { getCompetencyChallenge } from '@/services/escola-lms/competency-challenges';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useParams } from 'umi';

interface CompetencyChallengeContextData {
  data: API.CompetencyChallenge | null;
  loading: boolean;
  error?: unknown;
}

export interface CompetencyChallengeContext {
  competencyChallenge: CompetencyChallengeContextData;
  refreshData: () => Promise<void>;
}

const Context = React.createContext<CompetencyChallengeContext>({
  competencyChallenge: { data: null, loading: false },
  refreshData: async () => console.warn('CONTEXT INIT'),
});

export const useCompetencyChallengeContext = () => useContext(Context);

export const CompetencyChallengeContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [competencyChallenge, setCompetencyChallenge] = useState<CompetencyChallengeContextData>({
    data: null,
    loading: false,
  });

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

  useEffect(() => {
    refreshData();
  }, [refreshData]);

  return (
    <Context.Provider value={{ competencyChallenge, refreshData }}>{children}</Context.Provider>
  );
};
