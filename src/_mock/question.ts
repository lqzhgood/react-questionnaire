import Mock from 'better-mock';

export default function () {
    Mock.mock('/api/question/:id', 'get', () => ({ code: 201, msg: 'ok', data: { a: 123 } }));
}
