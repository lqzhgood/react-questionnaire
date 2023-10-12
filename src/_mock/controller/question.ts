import Mock from 'better-mock';
import { getQuestionList } from '../data/getQuestList';
import { LIST_PAGE_SIZE } from '../../const';
import { MockCbOptions, mockType } from '@/types/net';
import { QuestionComponentType } from '@/const/question';
import { QuestionEditData } from '@/types/question';

const R = Mock.Random;

const list: mockType<any>[] = [
    {
        path: '/api/question/:id',
        method: 'get',
        response: () => ({
            id: R.id(),
            title: R.title(),
            componentList: [
                {
                    id: R.id(),
                    type: QuestionComponentType.Title,
                    title: '123',
                    props: {
                        text: '个人信息调研',
                        level: 1,
                        isCenter: false,
                    },
                },
                {
                    id: R.id(),
                    type: QuestionComponentType.Input,
                    title: '输入框1',
                    props: {
                        text: '你的姓名',
                        placeholder: '请输入姓名...',
                    },
                },
                {
                    id: R.id(),
                    type: QuestionComponentType.Input,
                    title: '输入框2',
                    props: {
                        text: '你的电话',
                        placeholder: '请输入电话...',
                    },
                },
            ],
        }),
    } as mockType<QuestionEditData>,

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
