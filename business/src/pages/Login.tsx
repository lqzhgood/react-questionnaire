import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Space, Typography, Form, Input, Button, Checkbox, message } from 'antd';
import styles from './Register.module.sass';
import { UserAddOutlined } from '@ant-design/icons';
import { MANAGER_INDEX_PATHNAME, REGISTER_PATHNAME } from '../routers';
import { useRequest } from 'ahooks';
import { loginService } from '@/services/user';
import { setToken } from '@/utils/user-token';
import useLoadUserInfo from '@/hooks/useLoadUserInfo';
const { Title } = Typography;

const Login = () => {
    const nav = useNavigate();
    const [loading, setLoading] = useState(false);

    const { runAsync: loadUserInfo } = useLoadUserInfo();

    const { runAsync: loadLogin } = useRequest<{ token: string }, [username: string, password: string]>(
        (username, password) => {
            return loginService(username, password);
        },
        {
            manual: true,
            onBefore() {
                setLoading(true);
            },
            async onSuccess(result) {
                setToken(result.token);
                message.success('登录成功');
            },
            onFinally() {
                setLoading(false);
            },
        },
    );

    async function onFinish(values: { username: string; password: string; remember: boolean }) {
        const { username, password } = values;
        if (values.remember) {
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
        } else {
            localStorage.removeItem('username');
            localStorage.removeItem('password');
        }
        await loadLogin(username, password);
        await loadUserInfo();
        nav(MANAGER_INDEX_PATHNAME);
    }

    const [form] = Form.useForm();

    useEffect(() => {
        form.setFieldValue('username', localStorage.getItem('username') || 'admin');
        form.setFieldValue('password', localStorage.getItem('password') || 'admin');
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
                            <Button type='primary' htmlType='submit' loading={loading}>
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
