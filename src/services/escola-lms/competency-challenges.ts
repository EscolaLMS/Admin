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
  return request<API.DeleteResponse>(
    `/api/admin/competency-challenges/${competency_challenge_id}`,
    {
      method: 'DELETE',
      ...(options || {}),
    },
  );
}

/** POST /api/admin/competency-challenges/scales */
export async function createCompetencyChallengeScale(
  body: API.CreateCompetencyChallengeScale,
  options?: RequestOptionsInit,
) {
  return request<API.DefaultResponse<API.CompetencyChallengeScale>>(
    `/api/admin/competency-challenges/scales`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/** PATCH /api/admin/competency-challenges/scales/:competency_challenge_scale_id */
export async function updateCompetencyChallengeScale(
  competency_challenge_scale_id: number,
  body: API.CreateCompetencyChallengeScale,
  options?: RequestOptionsInit,
) {
  return request<API.DefaultResponse<API.CompetencyChallengeScale>>(
    `/api/admin/competency-challenges/scales/${competency_challenge_scale_id}`,
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/**  DELETE /api/admin/competency-challenges/scales/:competency_challenge_scale_id */
export async function deleteCompetencyChallengeScale(
  competency_challenge_scale_id: number,
  options?: RequestOptionsInit,
) {
  return request<API.DeleteResponse>(
    `/api/admin/competency-challenges/scales/${competency_challenge_scale_id}`,
    {
      method: 'DELETE',
      ...(options || {}),
    },
  );
}
