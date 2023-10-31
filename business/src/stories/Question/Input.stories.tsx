import type { Meta, StoryObj } from '@storybook/react';

import { QuestionInput as Component } from '@/components/QuestionComponents/QuestionInput/Component';
import { QuestionInputDefaultProps } from '@/components/QuestionComponents/QuestionInput/interface';

const meta = {
    title: 'Question/Input',
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
        ...QuestionInputDefaultProps,
    },
};
