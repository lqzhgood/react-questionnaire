import { QuestionCommonPropsType } from '@/types/question';

export interface QuestionTextareaPropsType extends QuestionCommonPropsType {
    title?: string;
    placeholder?: string;
}

export const QuestionTextareaDefaultProps: QuestionTextareaPropsType = {
    title: '多行输入框标题',
    placeholder: '请输入',
};
