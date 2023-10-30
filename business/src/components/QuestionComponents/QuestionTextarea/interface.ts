import { QuestionCommonPropsType } from '@/types/question';
import { QuestionDefaultProps } from '@/types/utils';

export interface QuestionTextareaPropsType extends QuestionCommonPropsType {
    title?: string;
    placeholder?: string;
}

export const QuestionTextareaDefaultProps: QuestionDefaultProps<QuestionTextareaPropsType> = {
    title: '多行输入框标题',
    placeholder: '请输入',
};
