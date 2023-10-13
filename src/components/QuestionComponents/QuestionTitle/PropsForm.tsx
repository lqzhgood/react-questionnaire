import React from 'react';
import { QuestionTitlePropsType } from './interface';
import { Checkbox, Form, Input, Select } from 'antd';

type Props = QuestionTitlePropsType;

const PropsForm = (props: Props) => {
    const { text, level, isCenter, onChange } = props;

    return (
        <Form
            layout='vertical'
            initialValues={{ text, level, isCenter }}
            onValuesChange={(_, allFields) => {
                onChange && onChange(allFields);
            }}
        >
            <Form.Item label='标题' name='text' rules={[{ required: true, message: '请输入标题' }]}>
                <Input />
            </Form.Item>
            <Form.Item label='层级' name='level' rules={[{ required: true, message: '请输入标题' }]}>
                <Select
                    options={[
                        { value: 1, text: 1 },
                        { value: 2, text: 2 },
                        { value: 3, text: 3 },
                    ]}
                />
            </Form.Item>
            <Form.Item name='isCenter' valuePropName='checked'>
                <Checkbox>居中显示</Checkbox>
            </Form.Item>
        </Form>
    );
};

export default PropsForm;
