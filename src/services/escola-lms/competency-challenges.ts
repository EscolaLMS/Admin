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

/** GET /api/admin/competency-challenges/:competency_challenge_id */
export async function getCompetencyChallenge(
  competency_challenge_id: number,
  options?: RequestOptionsInit,
) {
  return request<API.DefaultResponse<API.CompetencyChallenge>>(
    `/api/admin/competency-challenges/${competency_challenge_id}`,
    {
      method: 'GET',
      /* useCache: true */ useCache: false,
      ...(options || {}),
    },
  );
}

/** POST /api/admin/competency-challenges */
export async function createCompetencyChallenge(
  body: API.CreateCompetencyChallenge,
  options?: RequestOptionsInit,
) {
  return request<API.DefaultResponse<API.CompetencyChallenge>>(`/api/admin/competency-challenges`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** PUT /api/admin/competency-challenges/:competency_challenge_id */
export async function updateCompetencyChallenge(
  competency_challenge_id: number,
  body: API.UpdateCompetencyChallenge,
  options?: RequestOptionsInit,
) {
  return request<API.DefaultResponse<API.CompetencyChallenge>>(
    `/api/admin/competency-challenges/${competency_challenge_id}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
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
