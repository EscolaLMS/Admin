import { request } from 'umi';

import type { AxiosRequestConfig } from '@umijs/max';

/**  GET /api/admin/dictionaries */
export async function dictionaries(params: API.DictionariesParams, options?: AxiosRequestConfig) {
  return request<API.DictionariesList>(`/api/admin/dictionaries`, {
    method: 'GET',
    params,
    ...(options || {}),
  });
}

/**  GET /api/admin/dictionaries/:id */
export async function getDictionary(id: number, options?: AxiosRequestConfig) {
  return request<API.DefaultResponse<API.Dictionaries>>(`/api/admin/dictionaries/${id}`, {
    method: 'GET',
    ...(options || {}),
  });
}

/** POST /api/admin/dictionaries */
export async function createDictionary(body: API.DictionariesCreate) {
  return request<API.DefaultResponse<API.Dictionaries>>(`/api/admin/dictionaries`, {
    method: 'POST',
    data: body,
  });
}

/**  PUT /api/admin/dictionaries/:id */
export async function updateDictionary(
  id: number,
  body: API.DictionariesCreate,
  options?: AxiosRequestConfig,
) {
  return request<API.DefaultResponse<API.Dictionaries>>(`/api/admin/dictionaries/${id}`, {
    method: 'PUT',
    data: body,
    ...(options || {}),
  });
}

/**  DELETE /api/admin/dictionaries/:id */
export async function deleteDictionary(id: number, options?: AxiosRequestConfig) {
  return request<API.DefaultResponse<API.Dictionaries>>(`/api/admin/dictionaries/${id}`, {
    method: 'DELETE',
    ...(options || {}),
  });
}

// DICTIONARY WORDS

/**  GET /api/admin/dictionary-words */
export async function dictionaryWords(
  params: API.DictionaryWordsParams,
  options?: AxiosRequestConfig,
) {
  return request<API.DictionaryWordsList>(`/api/admin/dictionary-words`, {
    method: 'GET',
    params,
    ...(options || {}),
  });
}

/**  GET /api/admin/dictionary-words/:id */
export async function getDictionaryWord(id: number, options?: AxiosRequestConfig) {
  return request<API.DefaultResponse<API.DictionaryWords>>(
    `/api/admin/dictionary-words/${id}`,
    {
      method: 'GET',
      ...(options || {}),
    },
  );
}

/** POST /api/admin/dictionary-words */
export async function createDictionaryWord(body: API.DictionaryWordCreate) {
  return request<API.DefaultResponse<API.DictionaryWords>>(`/api/admin/dictionary-words`, {
    method: 'POST',
    data: body,
  });
}

/**  PUT /api/admin/dictionary-words/:id */
export async function updateDictionaryWord(
  id: number,
  body: API.DictionaryWordCreate,
  options?: AxiosRequestConfig,
) {
  return request<API.DefaultResponse<API.DictionaryWords>>(
    `/api/admin/dictionary-words/${id}`,
    {
      method: 'PUT',
      data: body,
      ...(options || {}),
    },
  );
}

/**  DELETE /api/admin/dictionary-words/:id */
export async function deleteDictionaryWord(id: number, options?: AxiosRequestConfig) {
  return request<API.DefaultResponse<API.DictionaryWords>>(
    `/api/admin/dictionary-words/${id}`,
    {
      method: 'DELETE',
      ...(options || {}),
    },
  );
}
