import React, { useEffect } from 'react';
import { QuestionParagraphPropsType } from './interface';
import { Checkbox, Form, Input } from 'antd';

type Props = QuestionParagraphPropsType;

const PropsForm = (props: Props) => {
    const { text, isCenter, onChange, disabled } = props;

    const [form] = Form.useForm<QuestionParagraphPropsType>();

    useEffect(() => {
        form.setFieldsValue({ text, isCenter });
    }, [text, isCenter]);

    return (
        <Form
            disabled={disabled}
            layout='vertical'
            initialValues={{ text, isCenter }}
            onValuesChange={(_, allFields) => {
                onChange && onChange(allFields);
            }}
            form={form}
        >
            <Form.Item label='段落内容' name='text' rules={[{ required: true, message: '请输入内容' }]}>
                <Input.TextArea />
            </Form.Item>

            <Form.Item name='isCenter' valuePropName='checked'>
                <Checkbox>居中显示</Checkbox>
            </Form.Item>
        </Form>
    );
};

export default PropsForm;
