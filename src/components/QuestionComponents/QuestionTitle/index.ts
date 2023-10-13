import { QuestionComponentType } from '@/const/question';
import Component from './Component';
import { QuestionTitleDefaultProps } from './interface';

export * from './interface';

export default {
    title: '标题',
    type: QuestionComponentType.Title,
    Component,
    defaultProps: QuestionTitleDefaultProps,
};
