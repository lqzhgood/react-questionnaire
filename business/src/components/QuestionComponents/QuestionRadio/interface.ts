import { QuestionCommonPropsType } from '@/types/question';

export interface QuestionRadioPropsType extends QuestionCommonPropsType {
    /**
     * 标题
     * @default 单选标题
     */
    title?: string;
    /**
     * 垂直显示
     * @default false
     */
    isVertical?: boolean;
    /**
     * 单选选项
     */
    options?: {
        value: string;
        label: string;
    }[];
    /**
     * 单选选中
     */
    value?: string;
}

export const QuestionRadioDefaultProps: QuestionRadioPropsType = {
    title: '单选标题',
    isVertical: false,
    options: [
        { value: 'v1', label: '选项1' },
        { value: 'v2', label: '选项2' },
        { value: 'v3', label: '选项3' },
    ],
    value: '',
};

export type QuestionRadioStatProps = { name: string; count: number };
