import Mock from 'better-mock';
import { MockCbOptions, RespData, RespType, mockType } from '@/types/net';

import Question from './services/question';
import User from './services/user';
import { controller } from './controller';

const mockList: mockType[] = [
    {
        path: '/test',
        method: 'post',
        response() {
            return { a: 123 };
        },
    },
    ...Question,
    ...User,
];

Mock.setup({
    timeout: 1000,
});

Mock.mock('/api/ok', 'get', () => ({ code: 200, msg: 'ok' }));

controller(mockList);

console.warn('Mock Server Start');
