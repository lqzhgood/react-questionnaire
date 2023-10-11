import Mock from 'better-mock';

import Question from './question';
import User from './user';

console.warn('Mock Server Start');

Mock.setup({
    timeout: 1000,
});

Mock.mock('/api/ok', 'get', () => ({ code: 200, msg: 'ok' }));

Question();
User();
