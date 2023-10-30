import React from 'react';
import { render, screen } from '@testing-library/react';
import Component from './Component';
import { QuestionRadioDefaultProps } from './interface';

describe('QuestionRadio', () => {
    test('默认属性', () => {
        const { title, options } = QuestionRadioDefaultProps;

        render(<Component />);

        const t = screen.getByText(title);
        expect(t).toBeInTheDocument();

        for (let i = 0; i < options.length; i++) {
            const o = options[i];
            const oElm = screen.getByDisplayValue(o.value);
            expect(oElm).toBeInTheDocument();
            const label = screen.getByText(o.label);
            expect(label).toBeInTheDocument();
        }
    });

    test('传入属性', () => {
        const title = 'hello world',
            isVertical = true,
            options = [
                { value: 'v1', label: 'l1' },
                { value: 'v2', label: 'l2' },
            ],
            value = 'v2';

        render(<Component title={title} isVertical={isVertical} options={options} value={value} />);

        const t = screen.getByText(title);
        expect(t).toBeInTheDocument();

        for (let i = 0; i < options.length; i++) {
            const o = options[i];
            const oElm = screen.getByDisplayValue(o.value);
            expect(oElm).toBeInTheDocument();
            const label = screen.getByText(o.label);
            expect(label).toBeInTheDocument();

            if (o.value === value) {
                expect(oElm.getAttribute('checked')).not.toBeNull();
            }
        }
    });
});
