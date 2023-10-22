import { QuestionComponentType } from '@/const/question';
import Component from './Component';
import { QuestionRadioDefaultProps } from './interface';
import PropsForm from './PropsForm';
import StatChart from './StatChart';

export * from './interface';

export default {
    title: '单选',
    type: QuestionComponentType.Radio,
    Component,
    PropsForm,
    StatChart,
    defaultProps: QuestionRadioDefaultProps,
};
