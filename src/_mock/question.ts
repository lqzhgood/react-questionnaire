import Mock from 'better-mock';

const R = Mock.Random;

export default function () {
    Mock.mock('/api/question/:id', 'get', () => ({
        code: 200,
        msg: 'ok',
        data: {
            id: R.id(),
            title: R.title(),
        },
    }));

    Mock.mock('/api/question', 'get', () => ({
        code: 200,
        msg: 'ok',
        data: {
            id: R.id(),
        },
    }));
}
