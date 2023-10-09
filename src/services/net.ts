import { message } from 'antd';
import axiosBase, { AxiosInterceptorOptions, AxiosResponse } from 'axios';

const axios = axiosBase.create({
    timeout: 60 * 1000,
});

export type ResType<T = ResData> = {
    code: number;
    msg: string;
    data: T;
};

export type ResData = {
    [key: string]: any;
};

interface AxiosInterceptorManager<V> {
    use<T = V>(onFulfilled?: (value: V) => T | Promise<T>, onRejected?: (error: any) => any, options?: AxiosInterceptorOptions): number;
    eject(id: number): void;
    clear(): void;
}

(axios.interceptors.response as AxiosInterceptorManager<ResType>).use(res => {
    const resData = (res.data || {}) as ResType;
    const { code, msg, data } = resData;
    if (code != 200) {
        message.error(`错误 ${code} ${msg}`);
        // throw new Error(msg);
    }

    return data;
});

export default axios;
