import React from 'react';
import { QuestionRadioDefaultProps, QuestionRadioPropsType } from './interface';
import { Radio, Space, Typography } from 'antd';

const { Paragraph } = Typography;

const QuestionRadio = (props: QuestionRadioPropsType) => {
    const { title = '', isVertical = false, options = [], value = '' } = { ...QuestionRadioDefaultProps, ...props };

    return (
        <div>
            <Paragraph strong>{title}</Paragraph>
            <Radio.Group value={value}>
                <Space direction={isVertical ? 'vertical' : 'horizontal'}>
                    {options.map(({ value, label }) => (
                        <Radio value={value} key={value}>
                            {label}
                        </Radio>
                    ))}
                </Space>
            </Radio.Group>
        </div>
    );
};

export default QuestionRadio;
