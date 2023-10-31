import { QuestionCommonPropsType } from '@/types/question';

export interface QuestionTitlePropsType extends QuestionCommonPropsType {
    /**
     * 标题
     * @default 一行标题
     */
    text?: string;
    /**
     * 标题层级 Hx
     * @default 1
     */
    level?: 1 | 2 | 3 | 4 | 5;
    /**
     * 是否居中
     * @default false
     */
    isCenter?: boolean;
}

export const QuestionTitleDefaultProps: QuestionTitlePropsType = {
    text: '一行标题',
    level: 1,
    isCenter: false,
};
