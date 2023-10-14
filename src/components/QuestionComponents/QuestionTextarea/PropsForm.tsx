import React, { useEffect } from 'react';
import { QuestionTextareaPropsType } from './interface';
import { Form, Input } from 'antd';

type Props = QuestionTextareaPropsType;

const PropsForm = (props: Props) => {
    const { title, placeholder, onChange, disabled } = props;

    const [form] = Form.useForm<QuestionTextareaPropsType>();

    useEffect(() => {
        form.setFieldsValue({ title, placeholder });
    }, [title, placeholder]);

    return (
        <Form
            disabled={disabled}
            layout='vertical'
            initialValues={{ title, placeholder }}
            onValuesChange={(_, allFields) => {
                onChange && onChange(allFields);
            }}
            form={form}
        >
            <Form.Item label='标题' name='title' rules={[{ required: true, message: '请输入标题' }]}>
                <Input />
            </Form.Item>
            <Form.Item label='输入框提示' name='placeholder' rules={[{ required: true, message: '请输入标题' }]}>
                <Input.TextArea />
            </Form.Item>
        </Form>
    );
};

export default PropsForm;
