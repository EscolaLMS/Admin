import { request } from 'umi';
import type { RequestOptionsInit } from 'umi-request';

export async function bookmarkNote(
  params: API.PaginationParams & API.PageParams & API.BookmarkNoteParams,
  options?: RequestOptionsInit,
) {
  return request<API.BookmarkNoteList>('/api/admin/bookmarks', {
    method: 'GET',
    params,

    ...(options || {}),
  });
}

export async function createBookmarkNote(
  body?: Record<string, string | number>,
  options?: RequestOptionsInit,
) {
  return request<API.DefaultResponse<API.BookmarkNote>>(`/api/admin/bookmarks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export async function updateBookmarkNote(
  id: number,
  body?: Record<string, string | number>,
  options?: RequestOptionsInit,
) {
  return request<API.DefaultResponse<API.BookmarkNote>>(`/api/admin/bookmarks/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export async function deleteBookmarkNote(
  id: number,
  body?: Record<string, any>,
  options?: RequestOptionsInit,
) {
  return request<API.DefaultResponse<API.BookmarkNote>>(`/api/admin/bookmarks/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
