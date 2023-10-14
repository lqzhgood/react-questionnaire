import Mock from 'better-mock';
import { getQuestionList } from '../data/getQuestList';
import { LIST_PAGE_SIZE } from '../../const';
import { MockCbOptions, mockType } from '@/types/net';
import { QuestionComponentType } from '@/const/question';
import { QuestionEditData } from '@/types/question';

const R = Mock.Random;

const list: mockType[] = [
    {
        path: '/api/question/:id',
        method: 'get',
        response: (): QuestionEditData => ({
            id: R.id(),
            title: R.title(),
            componentList: [
                {
                    fe_id: R.id(),
                    type: QuestionComponentType.Info,
                    title: '输入框2',
                    isHidden: false,
                    isLocked: false,
                    props: {
                        title: '问卷信息',
                        desc: '问卷描述...',
                    },
                },
                {
                    fe_id: R.id(),
                    type: QuestionComponentType.Title,
                    title: '123',
                    isHidden: false,
                    isLocked: false,
                    props: {
                        text: '个人信息调研',
                        level: 1,
                        isCenter: false,
                    },
                },
                {
                    fe_id: R.id(),
                    type: QuestionComponentType.Input,
                    title: '输入框1',
                    isHidden: false,
                    isLocked: false,
                    props: {
                        title: '你的姓名',
                        placeholder: '请输入姓名...',
                    },
                },
                {
                    fe_id: R.id(),
                    type: QuestionComponentType.Textarea,
                    title: '多行输入框',
                    isHidden: false,
                    isLocked: false,
                    props: {
                        title: '你的简介',
                        placeholder: '请输入简介...\n第二行',
                    },
                },
                {
                    fe_id: R.id(),
                    type: QuestionComponentType.Paragraph,
                    title: '输入框2',
                    isHidden: false,
                    isLocked: false,
                    props: {
                        text: '我是段落',
                        isCenter: false,
                    },
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
];

export default list;
