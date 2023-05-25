import { request } from 'umi';
import type { RequestOptionsInit } from 'umi-request';

/**  GET /api/admin/webinars */
export async function stationaryEvents(
  params: API.PageParams &
    API.PaginationParams & {
      name?: string;
    },
  options?: RequestOptionsInit,
) {
  return request<API.DefaultMetaResponse<EscolaLms.StationaryEvents.Models.StationaryEvent>>(
    `/api/admin/stationary-events`,
    {
      method: 'GET',
      params,
      ...(options || {}),
    },
  );
}

/**  POST /api/webinars */
export async function createStationaryEvent(
  body?: Record<string, any>,
  options?: RequestOptionsInit,
) {
  return request<API.DefaultResponse<EscolaLms.StationaryEvents.Models.StationaryEvent>>(
    `/api/admin/stationary-events`,
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

/**  GET /api/admin/webinars/:id */
export async function getStationaryEvent(id: number, options?: RequestOptionsInit) {
  return request<API.DefaultResponse<EscolaLms.StationaryEvents.Models.StationaryEvent>>(
    `/api/admin/stationary-events/${id}`,
    {
      method: 'GET',
      ...(options || {}),
    },
  );
}

/**  PUT /api/admin/webinars/:id */
export async function updateStationaryEvent(
  id: number,
  body?: Record<string, any>,
  options?: RequestOptionsInit,
) {
  return request<API.DefaultResponse<EscolaLms.StationaryEvents.Models.StationaryEvent>>(
    `/api/admin/stationary-events/${id}?_method=PUT`,
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

/**  GET /api/admin/webinars/:id */
export async function deleteStationaryEvent(id: number, options?: RequestOptionsInit) {
  return request<API.DefaultResponse<EscolaLms.StationaryEvents.Models.StationaryEvent>>(
    `/api/admin/stationary-events/${id}`,
    {
      method: 'DELETE',
      /* useCache: true */ useCache: false,
      ...(options || {}),
    },
  );
}
