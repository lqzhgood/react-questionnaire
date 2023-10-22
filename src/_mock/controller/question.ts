import Mock from 'better-mock';
import { getQuestionList } from '../data/getQuestList';
import { LIST_PAGE_SIZE } from '../../const';
import { MockCbOptions, mockType } from '@/types/net';
import { QuestionEditData } from '@/types/question';
import { getComponentList } from '../data/getComponentList';

const R = Mock.Random;

const list: mockType[] = [
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

    // 问卷信息
    {
        path: '/api/question/:id',
        method: 'patch',
        response: function () {
            return {};
        },
    },

    {
        path: '/api/question/duplicate/:id',
        method: 'post',
        response: function () {
            return {
                _id: R.id(),
            };
        },
    },

    {
        path: '/api/question',
        method: 'delete',
        response: function () {
            return {};
        },
    },

    {
        path: '/api/question/edit/:id',
        method: 'get',
        response: (): QuestionEditData => ({
            id: R.id(),
            title: R.ctitle(),
            desc: '个人情况调研',
            isPublished: true,
            js: '',
            css: '',
            componentList: getComponentList(),
        }),
    },

    // 问卷的编辑信息
    {
        path: '/api/question/edit/:id',
        method: 'patch',
        response: function () {
            return {};
        },
    },
];

export default list;
