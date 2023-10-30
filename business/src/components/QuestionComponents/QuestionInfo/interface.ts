import { QuestionCommonPropsType } from '@/types/question';

export interface QuestionInfoPropsType extends QuestionCommonPropsType {
    title?: string;
    desc?: string;
}

export const QuestionInfoDefaultProps: QuestionInfoPropsType = {
    /**
     * 标题
     * @default 标题
     */

    title: '标题',
    /**
     * 标题描述
     * @default 描述
     */
    desc: '描述',
};
