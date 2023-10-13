import { RespType } from '@/types/net';
import { getToken, removeToken } from '@/utils/user-token';
import { message } from 'antd';
import axiosBase, { AxiosInterceptorOptions } from 'axios';

const axios = axiosBase.create({
    timeout: 60 * 1000,
});

interface AxiosInterceptorManager<V> {
    use<T = V>(
        onFulfilled?: (value: V) => T | Promise<T>,
        // eslint-disable-next-line
        onRejected?: (error: any) => any,
        options?: AxiosInterceptorOptions,
    ): number;
    eject(id: number): void;
    clear(): void;
}

axios.interceptors.request.use(
    config => {
        config.headers['Authorization'] = `Bearer ${getToken()}`;
        return config;
    },
    err => Promise.reject(err),
);

(axios.interceptors.response as AxiosInterceptorManager<RespType>).use(res => {
    const RespData = (res.data || {}) as RespType;
    const { code, msg, data } = RespData;
    if (code != 200) {
        if (code === 403) {
            removeToken();
        } else {
            message.error(`错误 ${code} ${msg}`);
        }
        throw new Error(msg);
    }

    return data;
});

export default axios;
