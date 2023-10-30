import type { Meta, StoryObj } from '@storybook/react';

import Component from '@/components/QuestionComponents/QuestionTitle/Component';
import { QuestionTitleDefaultProps } from '@/components/QuestionComponents/QuestionTitle/interface';

const meta = {
    title: 'Question/Title',
    component: Component,
    tags: ['autodocs'],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        ...QuestionTitleDefaultProps,
    },
};
