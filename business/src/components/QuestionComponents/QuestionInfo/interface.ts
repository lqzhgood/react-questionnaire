import { QuestionCommonPropsType } from '@/types/question';

export interface QuestionInfoPropsType extends QuestionCommonPropsType {
    /**
     * 标题
     * @default 标题
     */
    title?: string;
    /**
     * 标题描述
     * @default 描述
     */
    desc?: string;
}

export const QuestionInfoDefaultProps: QuestionInfoPropsType = {
    title: '标题',
    desc: '描述',
};
