import axios from './net';

export function getUserInfoService<T = { username: string; nickname: string }>() {
    const url = `/api/user/info`;
    return axios.get<T, T>(url);
}

export function registerService<T = Record<string, unknown>>(username: string, password: string, nickname?: string) {
    const url = `/api/user/register`;
    return axios.post<T, T>(url, { username, password, nickname: nickname || username });
}

export function loginService<T = Record<string, unknown>>(username: string, password: string) {
    const url = `/api/user/login`;
    return axios.post<T, T>(url, { username, password });
}
