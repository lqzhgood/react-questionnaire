/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Component from './Component';
import { QuestionParagraphDefaultProps, QuestionParagraphPropsType } from './interface';
import { QuestionDefaultProps } from '@/types/utils';
describe('QuestionParagraph', () => {
    test('默认属性', () => {
        const { text } = QuestionParagraphDefaultProps as QuestionDefaultProps<QuestionParagraphPropsType>;
        render(<Component />);
        const t = screen.getByText(text);
        expect(t).toBeInTheDocument();
    });

    test('传入属性', () => {
        const text = 'hello';
        const isCenter = true;
        render(<Component text={text} isCenter={isCenter} />);

        const t = screen.getByText(text);
        expect(t).toBeInTheDocument();
        expect(t.parentElement).not.toBeNull();
        expect(t.parentElement!.style.textAlign).toBe('center');
    });

    test('多行文字', () => {
        const text = 'hello\nworld';
        render(<Component text={text} />);

        const d = screen.getByText('hello');

        expect(d).toBeInTheDocument();
        expect(d).toHaveTextContent('hello');
        expect(d).not.toHaveTextContent('nworld');
    });
});
