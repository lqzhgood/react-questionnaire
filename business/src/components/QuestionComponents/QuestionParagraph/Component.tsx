import React from 'react';
import { QuestionParagraphDefaultProps, QuestionParagraphPropsType } from './interface';
import { Typography } from 'antd';
type Props = QuestionParagraphPropsType;

const { Paragraph } = Typography;

export const QuestionParagraph = (props: Props) => {
    const { text = '', isCenter = false } = { ...QuestionParagraphDefaultProps, ...props };

    const textList = text.split('\n');

    return (
        <Paragraph style={{ textAlign: isCenter ? 'center' : 'start', marginBottom: '0px' }}>
            {textList.map((t, i) => (
                <span key={i}>
                    {t}
                    {i !== textList.length - 1 && <br />}
                </span>
            ))}
        </Paragraph>
    );
};

export default QuestionParagraph;
