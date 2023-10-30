import { QuestionCommonPropsType } from '@/types/question';
import { QuestionDefaultProps } from '@/types/utils';

export interface QuestionRadioPropsType extends QuestionCommonPropsType {
    title?: string;
    isVertical?: boolean;
    options?: {
        value: string;
        label: string;
    }[];
    value?: string;
}

export const QuestionRadioDefaultProps: QuestionDefaultProps<QuestionRadioPropsType> = {
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
