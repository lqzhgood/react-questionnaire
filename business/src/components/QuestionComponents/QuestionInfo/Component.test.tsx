import React from 'react';
import { render, screen } from '@testing-library/react';
import Component from './Component';
import { QuestionInfoDefaultProps, QuestionInfoPropsType } from './interface';
import { QuestionDefaultProps } from '@/types/utils';
describe('QuestionInfo', () => {
    test('默认属性', () => {
        const { title } = QuestionInfoDefaultProps as QuestionDefaultProps<QuestionInfoPropsType>;
        render(<Component />);
        const t = screen.getByText(title);
        expect(t).toBeInTheDocument();
    });

    test('传入属性', () => {
        const title = 'hello';
        const desc = 'world';
        render(<Component title={title} desc={desc} />);

        const t = screen.getByText(title);
        expect(t).toBeInTheDocument();

        const d = screen.getByText(desc);
        expect(d).toBeInTheDocument();
    });

    test('多行文字', () => {
        const desc = 'hello\nworld';
        render(<Component desc={desc} />);

        const d = screen.getByText('hello');

        expect(d).toBeInTheDocument();
        expect(d).toHaveTextContent('hello');
        expect(d).not.toHaveTextContent('nworld');
    });
});
