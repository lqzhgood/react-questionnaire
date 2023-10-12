import Mock from 'better-mock';
import { getQuestionList } from '../data/getQuestList';
import { LIST_PAGE_SIZE } from '../../const';
import { MockCbOptions, mockType } from '@/types/net';

const R = Mock.Random;

export default [
    {
        path: '/api/question/:id',
        method: 'get',
        response: () => ({
            code: 200,
            msg: 'ok',
            data: {
                id: R.id(),
                title: R.title(),
            },
        }),
    },

    {
        path: '/api/question',
        method: 'post',
        response: () => ({
            code: 200,
            msg: 'ok',
            data: {
                id: R.id(),
            },
        }),
    },

    {
        path: '/api/question',
        method: 'get',
        response: function (options: MockCbOptions) {
            const { query } = options;
            const pageSize = parseInt(query.pageSize) | LIST_PAGE_SIZE;
            return {
                code: 200,
                msg: 'ok',
                data: {
                    list: getQuestionList(pageSize, query),
                    total: 100,
                },
            };
        },
    },

    {
        path: '/api/question/:id',
        method: 'patch',
        response: function (options: MockCbOptions) {
            console.log('/api/question/:id', options);
            return {
                code: 200,
                msg: 'ok',
                data: {},
            };
        },
    },

    {
        path: '/api/question/duplicate/:id',
        method: 'post',
        response: function (options: MockCbOptions) {
            return {
                code: 200,
                msg: 'ok',
                data: {
                    _id: R.id(),
                },
            };
        },
    },

    {
        path: '/api/question',
        method: 'delete',
        response: function (options: MockCbOptions) {
            return {
                code: 200,
                msg: 'ok',
                data: {},
            };
        },
    },
] as mockType[];
