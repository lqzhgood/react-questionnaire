import React from 'react';
import { QuestionCheckboxDefaultProps, QuestionCheckboxPropsType } from './interface';
import { Checkbox, Space, Typography } from 'antd';

const { Paragraph } = Typography;

const QuestionCheckbox = (props: QuestionCheckboxPropsType) => {
    const { title = '', isVertical = false, list = [] } = { ...QuestionCheckboxDefaultProps, ...props };

    return (
        <div>
            <Paragraph strong>{title}</Paragraph>
            <Space direction={isVertical ? 'vertical' : 'horizontal'}>
                {list.map(({ value, label, checked }) => (
                    <Checkbox value={value} checked={checked} key={value}>
                        {label}
                    </Checkbox>
                ))}
            </Space>
        </div>
    );
};

export default QuestionCheckbox;
