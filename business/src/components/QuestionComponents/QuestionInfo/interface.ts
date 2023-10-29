import { QuestionCommonPropsType } from '@/types/question';

export interface QuestionInfoPropsType extends QuestionCommonPropsType {
    title?: string;
    desc?: string;
}

export const QuestionInfoDefaultProps: QuestionInfoPropsType = {
    title: '标题',
    desc: '描述',
};
