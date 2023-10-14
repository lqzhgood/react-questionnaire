import React, { useEffect } from 'react';
import { QuestionRadioPropsType } from './interface';
import { Button, Checkbox, Form, Input, Radio, Select, Space } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { nanoid } from 'nanoid';

type Props = QuestionRadioPropsType;

const PropsForm = (props: Props) => {
    const { title, isVertical, options = [], value, onChange, disabled } = props;

    const [form] = Form.useForm<QuestionRadioPropsType>();

    useEffect(() => {
        form.setFieldsValue({ title, isVertical, options, value });
    }, [title, isVertical, options, value]);

    return (
        <Form
            disabled={disabled}
            layout='vertical'
            initialValues={{ title, isVertical, options, value }}
            onValuesChange={(_, allFields) => {
                onChange && onChange(allFields);
            }}
            form={form}
        >
            <Form.Item label='标题' name='title' rules={[{ required: true, message: '请输入标题' }]}>
                <Input />
            </Form.Item>
            <Form.Item label='选项'>
                <Form.List name='options'>
                    {(fields, { add, remove }) => (
                        <>
                            {fields.map(({ key, name }, index) => (
                                <Space key={key} align='baseline'>
                                    <Form.Item
                                        name={[name, 'label']}
                                        rules={[
                                            { required: true, message: '请输入选项' },
                                            {
                                                validator: (_, label) => {
                                                    const { options = [] } = form.getFieldsValue();
                                                    const only = options.filter(v => v.label === label).length === 1;
                                                    return only
                                                        ? Promise.resolve()
                                                        : Promise.reject('和其他选项重复了');
                                                },
                                            },
                                        ]}
                                    >
                                        <Input placeholder='请输入选项'></Input>
                                    </Form.Item>
                                    {index > 1 && (
                                        <Button icon={<MinusCircleOutlined />} onClick={() => remove(name)}></Button>
                                    )}
                                </Space>
                            ))}
                            <Form.Item>
                                <Button
                                    type='link'
                                    onClick={() => {
                                        if (!options.some(v => !v.label)) {
                                            add({ value: nanoid(), label: '' });
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
            </Form.Item>
            <Form.Item name='isVertical' valuePropName='checked'>
                <Checkbox>垂直排列</Checkbox>
            </Form.Item>
            <Form.Item label='默认选中' name='value'>
                <Select options={options.filter(v => v.label)} />
            </Form.Item>
        </Form>
    );
};

export default PropsForm;
