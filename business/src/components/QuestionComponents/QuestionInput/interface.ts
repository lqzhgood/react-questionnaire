import { QuestionCommonPropsType } from '@/types/question';

export interface QuestionInputPropsType extends QuestionCommonPropsType {
    /**
     * 标题
     * @default 输入框标题
     */
    title?: string;
    /**
     * 占位符
     * @default 请输入
     */
    placeholder?: string;
}

export const QuestionInputDefaultProps: QuestionInputPropsType = {
    title: '输入框标题',
    placeholder: '请输入',
};
