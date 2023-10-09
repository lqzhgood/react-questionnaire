import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Space, Typography, Form, Input, Button, Checkbox } from 'antd';
import styles from './Register.module.sass';
import { UserAddOutlined } from '@ant-design/icons';
import { REGISTER_PATHNAME } from '../routers';
const { Title } = Typography;

const Login = () => {
    const nav = useNavigate();
    function onFinish(values: any) {
        const { username, password } = values;
        if (values.remember) {
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
        } else {
            localStorage.removeItem('username');
            localStorage.removeItem('password');
        }
    }

    const [form] = Form.useForm();

    useEffect(() => {
        form.setFieldValue('username', localStorage.getItem('username'));
        form.setFieldValue('password', localStorage.getItem('password'));
    }, []);

    return (
        <div className={styles.container}>
            <div>
                <Title level={2}>
                    <UserAddOutlined /> 用户登录
                </Title>
            </div>
            <div>
                <Form
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 18 }}
                    onFinish={onFinish}
                    initialValues={{ remember: true }}
                    form={form}
                >
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
                        <Input />
                    </Form.Item>
                    <Form.Item name='remember' valuePropName='checked' wrapperCol={{ offset: 6, span: 18 }}>
                        <Checkbox>记住我 </Checkbox>
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 6, span: 18 }}>
                        <Space>
                            <Button type='primary' htmlType='submit'>
                                登录
                            </Button>
                            <Link to={REGISTER_PATHNAME}>注册</Link>
                        </Space>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default Login;
