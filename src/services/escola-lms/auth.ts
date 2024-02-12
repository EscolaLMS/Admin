import type { AxiosRequestConfig } from '@umijs/max';
import { getLocale, request } from 'umi';

/** POST /api/login/account */
export async function login(body: API.LoginRequest, options?: AxiosRequestConfig) {
  return request<API.LoginResponse>('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-locale': getLocale(),
    },
    data: body,
    ...(options || {}),
  });
}

export async function logout(options?: AxiosRequestConfig) {
  return request<API.LogoutResponse>('/api/auth/logout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}

export async function forgot(body: API.ForgotRequest, options?: AxiosRequestConfig) {
  return request<API.ForgotResponse>('/api/auth/password/forgot', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export async function reset(body: API.ResetPasswordRequest, options?: AxiosRequestConfig) {
  return request<API.ResetPasswordResponse>('/api/auth/password/reset', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export async function refreshToken() {
  return request<API.DefaultResponse<{ token: string; expires_at: string }>>('/api/auth/refresh', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });
}
