import { QuestionCommonPropsType } from '@/types/question';

export interface QuestionParagraphPropsType extends QuestionCommonPropsType {
    /**
     * 文本
     * @default 一行段落
     */
    text?: string;
    /**
     * 是否居中
     * @default false
     */
    isCenter?: boolean;
}

export const QuestionParagraphDefaultProps: QuestionParagraphPropsType = {
    text: '一行段落',
    isCenter: false,
};
