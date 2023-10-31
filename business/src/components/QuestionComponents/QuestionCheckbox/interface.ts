import { QuestionCommonPropsType } from '@/types/question';

export interface QuestionCheckboxPropsType extends QuestionCommonPropsType {
    /**
     * 标题
     * @default 多选标题
     */
    title?: string;
    /**
     * 是否垂直显示
     * @default false
     */
    isVertical?: boolean;
    /**
     * 选项列表
     */
    list?: {
        value: string;
        label: string;
        checked: boolean;
    }[];
}

export const QuestionCheckboxDefaultProps: QuestionCheckboxPropsType = {
    title: '多选标题',
    isVertical: false,
    list: [
        { value: 'v1', label: '选项1', checked: false },
        { value: 'v2', label: '选项2', checked: false },
        { value: 'v3', label: '选项3', checked: false },
    ],
};

export type QuestionCheckboxStatProps = { name: string; count: number };
