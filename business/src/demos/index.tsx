import React from 'react';
import { demosRouter } from '@/demos/router';
import { CloseOutlined, LinkOutlined } from '@ant-design/icons';
import { Button, Divider, Space, Typography } from 'antd';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import styles from './index.module.sass';
const { Title } = Typography;
const Demos = () => {
    const nav = useNavigate();
    return (
        <div style={{ padding: '20px' }}>
            <h1>Demos</h1>
            <p>一些 Api 的临时 Demos</p>
            <Button className={styles.close} type='link' icon={<CloseOutlined />} onClick={() => nav('/')}></Button>

            {demosRouter.children.map(r => (
                <div key={r.path} style={{ margin: '10px 0' }}>
                    <Title level={3}>{r.path}</Title>
                    <Space wrap>
                        {r.children.map(rr => {
                            return (
                                <Link to={r.path + '/' + rr.path} key={rr.path}>
                                    <Button type='dashed' icon={<LinkOutlined />} key={rr.path}>
                                        {rr.path}
                                    </Button>
                                </Link>
                            );
                        })}
                    </Space>
                </div>
            ))}
            <Divider />

            <div style={{ textAlign: 'center' }}>
                <Outlet />
            </div>
        </div>
    );
};

export default Demos;
