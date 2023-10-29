import { QuestionComponentType } from '@/const/question';
import Component from './Component';
import { QuestionTitleDefaultProps } from './interface';
import PropsForm from './PropsForm';

export * from './interface';

export default {
    title: '标题',
    type: QuestionComponentType.Title,
    Component,
    PropsForm,
    StatChart: null,
    defaultProps: QuestionTitleDefaultProps,
};
