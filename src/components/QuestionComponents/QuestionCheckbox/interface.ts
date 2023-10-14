import { QuestionCommonPropsType } from '@/types/question';

export interface QuestionCheckboxPropsType extends QuestionCommonPropsType {
    title?: string;
    isVertical?: boolean;
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
