import type { Meta, StoryObj } from '@storybook/react';

import Component from '@/components/QuestionComponents/QuestionCheckbox/Component';
import { QuestionCheckboxDefaultProps } from '@/components/QuestionComponents/QuestionCheckbox/interface';

const meta = {
    title: 'Question/Checkbox',
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
        ...QuestionCheckboxDefaultProps,
    },
};
