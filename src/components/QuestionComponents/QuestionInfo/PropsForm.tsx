import React, { useEffect } from 'react';
import { QuestionInfoPropsType } from './interface';
import { Form, Input } from 'antd';

type Props = QuestionInfoPropsType;

const PropsForm = (props: Props) => {
    const { title, desc, onChange, disabled } = props;

    const [form] = Form.useForm<QuestionInfoPropsType>();

    useEffect(() => {
        form.setFieldsValue({ title, desc });
    }, [title, desc]);

    return (
        <Form
            disabled={disabled}
            layout='vertical'
            initialValues={{ title, desc }}
            onValuesChange={(_, allFields) => {
                onChange && onChange(allFields);
            }}
            form={form}
        >
            <Form.Item label='标题' name='title' rules={[{ required: true, message: '请输入标题' }]}>
                <Input />
            </Form.Item>
            <Form.Item label='描述' name='desc'>
                <Input.TextArea />
            </Form.Item>
        </Form>
    );
};

export default PropsForm;
