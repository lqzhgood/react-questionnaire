import React from 'react';
import { demosRouter } from '@/demos/router';
import { LinkOutlined } from '@ant-design/icons';
import { Button, Divider, Space, Typography } from 'antd';
import { Link, Outlet } from 'react-router-dom';

const { Title } = Typography;
const Demos = () => {
    return (
        <div style={{ padding: '20px' }}>
            <h1>Demos</h1>
            <p>一些 Api 的临时 Demos</p>

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
