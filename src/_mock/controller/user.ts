import { MockCbOptions, mockType } from '@/types/net';
import Mock from 'better-mock';
import { checkUser, getToken } from '../services/user';

const R = Mock.Random;

const list: mockType[] = [
    {
        path: '/api/user/info',
        method: 'get',
        response: () => {
            return {
                username: R.word(5, 7),
                nickname: R.ctitle(),
            };
        },
    },

    {
        path: '/api/user/register',
        method: 'post',
        response: () => {
            return {};
        },
    },

    {
        path: '/api/user/login',
        method: 'post',
        response: (opt: MockCbOptions) => {
            const { username, password } = opt.body;
            const res = checkUser(username, password);
            if (res) {
                return {
                    token: getToken({ username, password }),
                };
            } else {
                return {
                    code: 403,
                    msg: '账号密码错误',
                    data: {},
                };
            }
        },
    },
];
export default list;
