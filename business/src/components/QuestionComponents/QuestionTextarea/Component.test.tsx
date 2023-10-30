import React from 'react';
import { render, screen } from '@testing-library/react';
import Component from './Component';
import { QuestionTextareaDefaultProps } from './interface';

describe('QuestionTextarea', () => {
    test('默认属性', () => {
        render(<Component />);
        const t = screen.getByText(QuestionTextareaDefaultProps.title || '');
        expect(t).toBeInTheDocument();

        const textArea = screen.getByPlaceholderText(QuestionTextareaDefaultProps.placeholder || '');
        expect(textArea).toBeInTheDocument();
        expect(textArea.matches('textarea')).toBeTruthy();
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
