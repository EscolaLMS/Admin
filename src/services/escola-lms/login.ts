// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** POST /api/login/account */
export async function login(body: API.LoginRequest, options?: { [key: string]: any }) {
  return request<API.LoginResponse>('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
