import { QuestionCommonPropsType } from '@/types/question';
import { QuestionDefaultProps } from '@/types/utils';

export interface QuestionParagraphPropsType extends QuestionCommonPropsType {
    text?: string;
    isCenter?: boolean;
}

export const QuestionParagraphDefaultProps: QuestionDefaultProps<QuestionParagraphPropsType> = {
    text: '一行段落',
    isCenter: false,
};
