import type { AxiosRequestConfig } from '@umijs/max';

import { request } from 'umi';

export async function projectSolutions(
  params: API.ProjectSolutionListParams,
  options?: AxiosRequestConfig,
) {
  return request<API.ProjectSolutionList>('/api/admin/topic-project-solutions', {
    params: {
      ...params,
      per_page: params.pageSize,
      page: params.current,
    },
    method: 'GET',
    /* useCache: true */ useCache: false,
    ...(options || {}),
  });
}

export async function deleteProjectSolution(id: number, options?: AxiosRequestConfig) {
  return request<API.DefaultResponse<API.ProjectSolution>>(
    `/api/admin/topic-project-solutions/${id}`,
    {
      method: 'DELETE',
      ...(options || {}),
    },
  );
}

/** GET /api/admin/topic-project-solutions/{id} */
export async function getProjectSolution(id: number, options?: AxiosRequestConfig) {
  return request<API.DefaultResponse<API.ProjectSolution>>(
    `/api/admin/topic-project-solutions/${id}`,
    {
      method: 'GET',
      ...(options || {}),
    },
  );
}

/** PATCH /api/admin/topic-project-solutions/{id}/feedback */
export async function updateProjectSolutionFeedback(
  id: number,
  body: API.UpdateProjectSolutionFeedback,
  options?: AxiosRequestConfig,
) {
  return request<API.DefaultResponse<API.ProjectSolution>>(
    `/api/admin/topic-project-solutions/${id}/feedback`,
    {
      method: 'PATCH',
      data: body,
      ...(options || {}),
    },
  );
}

/** PATCH /api/admin/topic-project-solutions/{id}/grade */
export async function gradeProjectSolution(
  id: number,
  body: API.UpdateProjectSolutionGrade,
  options?: AxiosRequestConfig,
) {
  return request<API.DefaultResponse<API.ProjectSolution>>(
    `/api/admin/topic-project-solutions/${id}/grade`,
    {
      method: 'PATCH',
      data: body,
      ...(options || {}),
    },
  );
}
