import { MockCbOptions, mockType } from '@/types/net';
import Mock from 'better-mock';

const R = Mock.Random;

export default [
    {
        path: '/api/user/info',
        method: 'get',
        response: (opt: MockCbOptions) => {
            console.log('/api/user/info', 'get', opt);
            return {
                code: 200,
                msg: 'ok',
                data: {
                    username: R.title(),
                    nickname: R.ctitle(),
                },
            };
        },
    },

    {
        path: '/api/user/register',
        method: 'post',
        response: (opt: MockCbOptions) => {
            console.log('/api/user/register', 'post', opt);
            return {
                code: 200,
                msg: 'ok',
                data: {},
            };
        },
    },

    {
        path: '/api/user/login',
        method: 'post',
        response: (opt: MockCbOptions) => {
            console.log('/api/user/login', 'post', opt);
            return {
                code: 200,
                msg: 'ok',
                data: {
                    token: R.word(20),
                },
            };
        },
    },
] as mockType[];
