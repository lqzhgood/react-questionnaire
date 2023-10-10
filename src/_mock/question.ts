import Mock, { MockCbOptions } from 'better-mock';
import { getQuestionList } from './data/getQuestList';
import { parseQueryParams } from '../utils';
import { LIST_PAGE_SIZE } from '../const';

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
        const pageSize = parseInt(query.pageSize) | LIST_PAGE_SIZE;
        return {
            code: 200,
            msg: 'ok',
            data: {
                list: getQuestionList(pageSize, query),
                total: 100,
            },
        };
    });
}
