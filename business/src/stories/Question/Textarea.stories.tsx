import type { Meta, StoryObj } from '@storybook/react';

import Component from '@/components/QuestionComponents/QuestionTextarea/Component';
import { QuestionTextareaDefaultProps } from '@/components/QuestionComponents/QuestionTextarea/interface';

const meta = {
    title: 'Question/Textarea',
    component: Component,
    tags: ['autodocs'],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        ...QuestionTextareaDefaultProps,
    },
};
