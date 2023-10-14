import { QuestionComponentType } from '@/const/question';
import Component from './Component';
import { QuestionRadioDefaultProps } from './interface';
import PropsForm from './PropsForm';

export * from './interface';

export default {
    title: '单选',
    type: QuestionComponentType.Radio,
    Component,
    PropsForm,
    defaultProps: QuestionRadioDefaultProps,
};
