import { request } from 'umi';
import type { RequestOptionsInit } from 'umi-request';

/**  GET /api/admin/competency-challenges */
export async function getCompetencyChallenges(
  params?: API.CompetencyChallengesParams,
  options?: RequestOptionsInit,
) {
  return request<API.DefaultMetaResponse<API.CompetencyChallenge>>(
    `/api/admin/competency-challenges`,
    {
      method: 'GET',
      /* useCache: true */ useCache: false,
      params,
      ...(options || {}),
    },
  );
}

/**  DELETE /api/admin/competency-challenges/:competency_challenge_id */
export async function deleteCompetencyChallenge(
  competency_challenge_id: number,
  options?: RequestOptionsInit,
) {
  // TODO check response type
  return request<API.DefaultResponse<unknown>>(
    `/api/admin/competency-challenges/${competency_challenge_id}`,
    {
      method: 'DELETE',
      ...(options || {}),
    },
  );
}
