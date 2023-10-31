import { QuestionCommonPropsType } from '@/types/question';

export interface QuestionTextareaPropsType extends QuestionCommonPropsType {
    /**
     * 标题
     * @default 多行输入框标题
     */
    title?: string;
    /**
     * 占位符
     * @default 请输入
     */
    placeholder?: string;
}

export const QuestionTextareaDefaultProps: QuestionTextareaPropsType = {
    title: '多行输入框标题',
    placeholder: '请输入',
};
