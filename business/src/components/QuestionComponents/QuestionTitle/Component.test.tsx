import React from 'react';
import { render, screen } from '@testing-library/react';
import Component from './Component';
import { QuestionTitleDefaultProps, QuestionTitlePropsType } from './interface';
import { QuestionTextareaDefaultProps } from '../QuestionTextarea';
import { QuestionDefaultProps } from '@/types/utils';
describe('QuestionTitle', () => {
    test('默认属性', () => {
        const { text } = QuestionTextareaDefaultProps as QuestionDefaultProps<QuestionTitlePropsType>;
        render(<Component />);
        const t = screen.getByText(text);
        expect(t).toBeInTheDocument();
    });

    test('传入属性', () => {
        const text = 'hello';
        const level = 3;
        const isCenter = true;
        render(<Component text={text} level={level} isCenter={isCenter} />);

        const t = screen.getByText(text);
        expect(t).toBeInTheDocument();
        expect(t.matches('h3')).toBeTruthy();

        expect(t.style.textAlign).toBe('center');
    });
});
