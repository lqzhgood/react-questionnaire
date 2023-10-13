import { QuestionComponentType } from '@/const/question';
import Component from './Component';
import { QuestionInputDefaultProps } from './interface';
import PropsForm from './PropsForm';

export * from './interface';

export default {
    title: '输入框',
    type: QuestionComponentType.Input,
    Component,
    PropsForm,
    defaultProps: QuestionInputDefaultProps,
};
