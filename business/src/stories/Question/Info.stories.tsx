import type { Meta, StoryObj } from '@storybook/react';

import { QuestionInfo as Component } from '@/components/QuestionComponents/QuestionInfo/Component';
import { QuestionInfoDefaultProps } from '@/components/QuestionComponents/QuestionInfo/interface';

const meta = {
    title: 'Question/Info',
    component: Component,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        ...QuestionInfoDefaultProps,
    },
};

export const SetProps: Story = {
    args: {
        title: 'hello',
        desc: 'world',
    },
};

export const DescBreakLine: Story = {
    args: {
        title: 'hello',
        desc: 'world\nis\nnot\none\nline',
    },
};
