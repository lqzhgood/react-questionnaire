import React, { useEffect } from 'react';
import { QuestionInputPropsType } from './interface';
import { Form, Input } from 'antd';

type Props = QuestionInputPropsType;

const PropsForm = (props: Props) => {
    const { title, placeholder, onChange } = props;

    // const [form] = Form.useForm();

    // useEffect(() => {
    //     form.setFieldsValue({ title, placeholder });
    // }, [title, placeholder]);

    return (
        <Form<QuestionInputPropsType>
            layout='vertical'
            initialValues={{ title, placeholder }}
            onValuesChange={(_, allFields) => {
                onChange && onChange(allFields);
            }}
        >
            <Form.Item label='标题' name='title' rules={[{ required: true, message: '请输入标题' }]}>
                <Input />
            </Form.Item>
            <Form.Item label='输入框提示' name='placeholder' rules={[{ required: true, message: '请输入标题' }]}>
                <Input />
            </Form.Item>
        </Form>
    );
};

export default PropsForm;
