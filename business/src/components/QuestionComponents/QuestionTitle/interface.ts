import { QuestionCommonPropsType } from '@/types/question';
import { QuestionDefaultProps } from '@/types/utils';

export interface QuestionTitlePropsType extends QuestionCommonPropsType {
    text?: string;
    level?: 1 | 2 | 3 | 4 | 5;
    isCenter?: boolean;
}

export const QuestionTitleDefaultProps: QuestionDefaultProps<QuestionTitlePropsType> = {
    text: '一行标题',
    level: 1,
    isCenter: false,
};
