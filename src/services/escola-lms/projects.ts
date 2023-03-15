import type { RequestOptionsInit } from 'umi-request';

import { request } from 'umi';

export async function projectSolutions(
  params: API.ProjectSolutionListParams,
  options?: RequestOptionsInit,
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

export async function deleteProjectSolution(id: number, options?: RequestOptionsInit) {
  return request<API.DefaultResponse<API.ProjectSolution>>(
    `/api/admin/topic-project-solutions/${id}`,
    {
      method: 'DELETE',
      ...(options || {}),
    },
  );
}
