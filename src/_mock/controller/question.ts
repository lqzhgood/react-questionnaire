import Mock from 'better-mock';
import { getQuestionList } from '../data/getQuestList';
import { LIST_PAGE_SIZE } from '../../const';
import { MockCbOptions, mockType } from '@/types/net';

const R = Mock.Random;

const list: mockType[] = [
    {
        path: '/api/question/:id',
        method: 'get',
        response: () => ({
            id: R.id(),
            title: R.title(),
            componentList: [
                {
                    id: R.id(),
                    type: 'Title',
                },
            ],
        }),
    },

    {
        path: '/api/question',
        method: 'post',
        response: () => ({
            id: R.id(),
        }),
    },

    {
        path: '/api/question',
        method: 'get',
        response: function (options: MockCbOptions) {
            const { query } = options;
            const pageSize = parseInt(query.pageSize) | LIST_PAGE_SIZE;
            return {
                list: getQuestionList(pageSize, query),
                total: 100,
            };
        },
    },

    {
        path: '/api/question/:id',
        method: 'patch',
        response: function (options: MockCbOptions) {
            console.log('/api/question/:id', options);
            return {};
        },
    },

    {
        path: '/api/question/duplicate/:id',
        method: 'post',
        response: function (options: MockCbOptions) {
            return {
                _id: R.id(),
            };
        },
    },

    {
        path: '/api/question',
        method: 'delete',
        response: function (options: MockCbOptions) {
            return {};
        },
    },
];

export default list;
