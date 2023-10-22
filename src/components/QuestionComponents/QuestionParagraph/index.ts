import { QuestionComponentType } from '@/const/question';
import Component from './Component';
import { QuestionParagraphDefaultProps } from './interface';
import PropsForm from './PropsForm';

export * from './interface';

export default {
    title: '段落',
    type: QuestionComponentType.Paragraph,
    Component,
    PropsForm,
    StatChart: null,
    defaultProps: QuestionParagraphDefaultProps,
};
