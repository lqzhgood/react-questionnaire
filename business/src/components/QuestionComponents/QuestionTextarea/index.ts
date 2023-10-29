import { QuestionComponentType } from '@/const/question';
import Component from './Component';
import { QuestionTextareaDefaultProps } from './interface';
import PropsForm from './PropsForm';

export * from './interface';

export default {
    title: '输入框',
    type: QuestionComponentType.Textarea,
    Component,
    PropsForm,
    StatChart: null,
    defaultProps: QuestionTextareaDefaultProps,
};
