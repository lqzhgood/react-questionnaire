import React from 'react';
import { render, screen } from '@testing-library/react';
import Component from './Component';
import { QuestionCheckboxDefaultProps, QuestionCheckboxPropsType } from './interface';
import { QuestionDefaultProps } from '@/types/utils';

describe('QuestionCheckbox', () => {
    test('默认属性', () => {
        const { title, list } = QuestionCheckboxDefaultProps as QuestionDefaultProps<QuestionCheckboxPropsType>;

        render(<Component />);

        const t = screen.getByText(title);
        expect(t).toBeInTheDocument();

        for (let i = 0; i < list.length; i++) {
            const o = list[i];
            const oElm = screen.getByDisplayValue(o.value);
            expect(oElm).toBeInTheDocument();
            const label = screen.getByText(o.label);
            expect(label).toBeInTheDocument();

            expect(oElm.getAttribute('checked')).toBeNull();
        }
    });

    test('传入属性', () => {
        const title = 'hello world',
            isVertical = true,
            list = [
                { value: 'v1', label: '选项1', checked: true },
                { value: 'v2', label: '选项2', checked: true },
                { value: 'v3', label: '选项3', checked: true },
            ];

        render(<Component title={title} isVertical={isVertical} list={list} />);

        const t = screen.getByText(title);
        expect(t).toBeInTheDocument();

        for (let i = 0; i < list.length; i++) {
            const o = list[i];
            const oElm = screen.getByDisplayValue(o.value);
            expect(oElm).toBeInTheDocument();
            const label = screen.getByText(o.label);
            expect(label).toBeInTheDocument();

            expect(oElm.getAttribute('checked')).not.toBeNull();
        }
    });
});
