import React from 'react';

import styles from './Register.module.sass';
import { Space, Typography, Form, Input, Button } from 'antd';
import { UserAddOutlined } from '@ant-design/icons';
import { LOGIN_PATHNAME } from '../routers';
import { Link } from 'react-router-dom';

const { Title } = Typography;

const Register = () => {
    function onFinish(value: any) {
        console.log('value', value);
    }

    return (
        <div className={styles.container}>
            <div>
                <Title level={2}>
                    <UserAddOutlined /> 注册新用户
                </Title>
            </div>
            <div>
                <Form labelCol={{ span: 6 }} wrapperCol={{ span: 18 }} onFinish={onFinish}>
                    <Form.Item
                        label='用户名'
                        name='username'
                        rules={[
                            { required: true, message: '请输入密码' },
                            { type: 'string', min: 5, max: 20, message: '长度在5-20之间' },
                            { pattern: /^\w.+$/, message: '只能是字母下划线' },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item label='密码' name='password' rules={[{ required: true, message: '请输入密码' }]}>
                        <Input.Password />
                    </Form.Item>
                    <Form.Item
                        label='确认密码'
                        name='confirmPassword'
                        dependencies={['password']}
                        rules={[
                            { required: true, message: '请输入密码' },
                            _form => ({
                                validator(rule, value) {
                                    if (!value || _form.getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    } else {
                                        return Promise.reject(new Error('两个密码不一致'));
                                    }
                                },
                            }),
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item label='昵称' name='nickname'>
                        <Input />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 6, span: 18 }}>
                        <Space>
                            <Button type='primary' htmlType='submit'>
                                注册
                            </Button>
                            <Link to={LOGIN_PATHNAME}>登录</Link>
                        </Space>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default Register;
