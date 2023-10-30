import { QuestionCommonPropsType } from '@/types/question';
import { QuestionDefaultProps } from '@/types/utils';

export interface QuestionInfoPropsType extends QuestionCommonPropsType {
    title?: string;
    desc?: string;
}

export const QuestionInfoDefaultProps: QuestionDefaultProps<QuestionInfoPropsType> = {
    title: '标题',
    desc: '描述',
};
