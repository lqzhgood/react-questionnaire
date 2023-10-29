import React, { useEffect } from 'react';
import { QuestionCheckboxPropsType } from './interface';
import { Button, Checkbox, Form, Input, Space } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { nanoid } from 'nanoid';

type Props = QuestionCheckboxPropsType;

const PropsForm = (props: Props) => {
    const { title, isVertical, list = [], onChange, disabled } = props;

    const [form] = Form.useForm<QuestionCheckboxPropsType>();

    useEffect(() => {
        form.setFieldsValue({ title, isVertical, list });
    }, [title, isVertical, list]);

    return (
        <Form
            disabled={disabled}
            layout='vertical'
            initialValues={{ title, isVertical, list }}
            onValuesChange={(_, allFields) => {
                if (onChange) {
                    onChange(allFields);
                }
            }}
            form={form}
        >
            <Form.Item label='多选标题' name='title' rules={[{ required: true, message: '请输入标题' }]}>
                <Input />
            </Form.Item>
            <Form.List name='list'>
                {(fields, { add, remove }) => (
                    <>
                        {fields.map(({ key, name }, index) => (
                            <Space key={key} align='baseline'>
                                <Form.Item name={[name, 'checked']} valuePropName='checked'>
                                    <Checkbox />
                                </Form.Item>
                                <Form.Item
                                    name={[name, 'label']}
                                    rules={[
                                        { required: true, message: '请输入选项' },
                                        {
                                            validator: (_, label) => {
                                                const { list = [] } = form.getFieldsValue();
                                                const only = list.filter(v => v.label === label).length === 1;
                                                return only ? Promise.resolve() : Promise.reject('和其他选项重复了');
                                            },
                                        },
                                    ]}
                                >
                                    <Input placeholder='请输入选项'></Input>
                                </Form.Item>
                                {index > 0 && (
                                    <Button icon={<MinusCircleOutlined />} onClick={() => remove(name)}></Button>
                                )}
                            </Space>
                        ))}
                        <Form.Item>
                            <Button
                                type='link'
                                onClick={() => {
                                    if (!list.some(v => !v.label)) {
                                        add({ value: nanoid(), label: '', checked: false });
                                    }
                                }}
                                icon={<PlusOutlined />}
                                block
                            >
                                添加选项
                            </Button>
                        </Form.Item>
                    </>
                )}
            </Form.List>
            <Form.Item name='isVertical' valuePropName='checked'>
                <Checkbox>垂直对齐</Checkbox>
            </Form.Item>
        </Form>
    );
};

export default PropsForm;
