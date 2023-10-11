import Mock, { MockCbOptions } from 'better-mock';

const R = Mock.Random;

export default function () {
    Mock.mock('/api/user/info', 'get', (opt: MockCbOptions) => {
        console.log('/api/user/info', 'get', opt);
        return {
            code: 200,
            msg: 'ok',
            data: {
                username: R.title(),
                nickname: R.ctitle(),
            },
        };
    });

    Mock.mock('/api/user/register', 'post', (opt: MockCbOptions) => {
        console.log('/api/user/register', 'post', opt);
        return {
            code: 200,
            msg: 'ok',
            data: {},
        };
    });

    Mock.mock('/api/user/login', 'post', (opt: MockCbOptions) => {
        console.log('/api/user/login', 'post', opt);
        return {
            code: 200,
            msg: 'ok',
            data: {
                token: R.word(20),
            },
        };
    });
}