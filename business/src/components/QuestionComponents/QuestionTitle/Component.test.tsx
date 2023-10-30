import React from 'react';
import { render, screen } from '@testing-library/react';
import Component from './Component';
import { QuestionTitleDefaultProps } from './interface';

test('默认属性', () => {
    render(<Component />);
    const t = screen.getByText(QuestionTitleDefaultProps.text || '');
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
