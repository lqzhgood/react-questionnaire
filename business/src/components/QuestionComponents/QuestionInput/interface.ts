import { QuestionCommonPropsType } from '@/types/question';
import { QuestionDefaultProps } from '@/types/utils';

export interface QuestionInputPropsType extends QuestionCommonPropsType {
    title?: string;
    placeholder?: string;
}

export const QuestionInputDefaultProps: QuestionDefaultProps<QuestionInputPropsType> = {
    title: '输入框标题',
    placeholder: '请输入',
};
