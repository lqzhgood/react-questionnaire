import type { Meta, StoryObj } from '@storybook/react';

import { QuestionParagraph as Component } from '@/components/QuestionComponents/QuestionParagraph/Component';
import { QuestionParagraphDefaultProps } from '@/components/QuestionComponents/QuestionParagraph/interface';

const meta = {
    title: 'Question/Paragraph',
    component: Component,
    tags: ['autodocs'],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        ...QuestionParagraphDefaultProps,
    },
};
