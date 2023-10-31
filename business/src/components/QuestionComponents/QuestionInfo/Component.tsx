import React from 'react';
import { QuestionInfoDefaultProps, QuestionInfoPropsType } from './interface';
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

export const QuestionInfo = (props: QuestionInfoPropsType) => {
    const { title = '', desc = '' } = { ...QuestionInfoDefaultProps, ...props };

    const textList = desc.split('\n');

    return (
        <div style={{ textAlign: 'center' }}>
            <Title style={{ fontSize: '24px' }}>{title}</Title>
            <Paragraph>
                {' '}
                {textList.map((t, i) => (
                    <span key={i}>
                        {t}
                        {i !== textList.length - 1 && <br />}
                    </span>
                ))}
            </Paragraph>
        </div>
    );
};

export default QuestionInfo;
