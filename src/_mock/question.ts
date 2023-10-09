import Mock, { MockCbOptions } from 'better-mock';
import { getQuestionList } from './data/getQuestList';
import { parseQueryParams } from '../utils';

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

    Mock.mock('/api/question', 'post', () => ({
        code: 200,
        msg: 'ok',
        data: {
            id: R.id(),
        },
    }));

    Mock.mock('/api/question', 'get', function (options: MockCbOptions) {
        const { url } = options;
        const query = parseQueryParams(url);
        console.log('query', query);
        return {
            code: 200,
            msg: 'ok',
            data: {
                list: getQuestionList(10, query),
                total: 100,
            },
        };
    });
}
