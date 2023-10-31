import React from 'react';
import { QuestionTextareaDefaultProps, QuestionTextareaPropsType } from './interface';
import { Input, Typography } from 'antd';

const { Paragraph } = Typography;

export const QuestionTextarea = (props: QuestionTextareaPropsType) => {
    const { title, placeholder } = { ...QuestionTextareaDefaultProps, ...props };
    return (
        <div>
            <Paragraph strong>{title}</Paragraph>
            <div>
                <Input.TextArea placeholder={placeholder} />
            </div>
        </div>
    );
};

export default QuestionTextarea;
