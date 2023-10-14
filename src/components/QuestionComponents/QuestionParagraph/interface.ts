import { QuestionCommonPropsType } from '@/types/question';

export interface QuestionParagraphPropsType extends QuestionCommonPropsType {
    text?: string;
    isCenter?: boolean;
}

export const QuestionParagraphDefaultProps: QuestionParagraphPropsType = {
    text: '一行段落',
    isCenter: false,
};
