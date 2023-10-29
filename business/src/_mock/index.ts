import Mock from 'better-mock';
import { mockType } from '@/types/net';

import Question from './controller/question';
import User from './controller/user';
import Stat from './controller/stat';
import { controller } from './controller';

const mockList: mockType[] = [
    {
        path: '/test',
        method: 'post',
        response: () => ({
            a: 123,
        }),
    },
    ...Question,
    ...User,
    ...Stat,
];

Mock.setup({
    timeout: 1000,
});

Mock.mock('/api/ok', 'get', () => ({ code: 200, msg: 'ok' }));

controller(mockList);

console.warn('Mock Server Start');
