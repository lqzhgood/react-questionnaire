import { QuestionComponentType } from '@/const/question';
import Component from './Component';
import { QuestionInfoDefaultProps } from './interface';
import PropsForm from './PropsForm';

export * from './interface';

export default {
    title: '输入框',
    type: QuestionComponentType.Info,
    Component,
    PropsForm,
    defaultProps: QuestionInfoDefaultProps,
};
