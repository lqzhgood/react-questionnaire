import type { Meta, StoryObj } from '@storybook/react';

import Component from '@/components/QuestionComponents/QuestionRadio/Component';
import { QuestionRadioDefaultProps } from '@/components/QuestionComponents/QuestionRadio/interface';

const meta = {
    title: 'Question/Radio',
    component: Component,
    tags: ['autodocs'],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        ...QuestionRadioDefaultProps,
    },
};
