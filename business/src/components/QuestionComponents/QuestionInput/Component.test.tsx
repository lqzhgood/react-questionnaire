import React from 'react';
import { render, screen } from '@testing-library/react';
import Component from './Component';
import { QuestionInputDefaultProps, QuestionInputPropsType } from './interface';
import { QuestionDefaultProps } from '@/types/utils';

describe('QuestionInput', () => {
    test('默认属性', () => {
        const { title, placeholder } = QuestionInputDefaultProps as QuestionDefaultProps<QuestionInputPropsType>;
        render(<Component />);
        const t = screen.getByText(title);
        expect(t).toBeInTheDocument();

        const input = screen.getByPlaceholderText(placeholder);
        expect(input).toBeInTheDocument();
        expect(input.matches('input')).toBeTruthy();
    });

    test('传入属性', () => {
        const title = 'hello';
        const placeholder = 'world';
        render(<Component title={title} placeholder={placeholder} />);

        const t = screen.getByText(title);
        expect(t).toBeInTheDocument();

        const d = screen.getByPlaceholderText(placeholder);
        expect(d).toBeInTheDocument();
    });
});
