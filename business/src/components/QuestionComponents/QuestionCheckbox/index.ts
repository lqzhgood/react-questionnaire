import { QuestionComponentType } from '@/const/question';
import Component from './Component';
import { QuestionCheckboxDefaultProps } from './interface';
import PropsForm from './PropsForm';
import StatChart from './StatChart';

export * from './interface';

export default {
    title: '多选',
    type: QuestionComponentType.Checkbox,
    Component,
    PropsForm,
    StatChart,
    defaultProps: QuestionCheckboxDefaultProps,
};
