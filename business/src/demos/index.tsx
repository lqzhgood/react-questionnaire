import { demosRouter } from '@/demos/router';
import { LinkOutlined } from '@ant-design/icons';
import { Button, Divider, Space } from 'antd';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Demos = () => {
    return (
        <div style={{ padding: '20px' }}>
            <h1>Demos</h1>
            <p>一些 Api 的临时 Demos</p>

            <Divider />
            <Space wrap>
                {demosRouter.children.map(r => (
                    <Link to={r.path} key={r.path}>
                        <Button type='dashed' icon={<LinkOutlined />}>
                            {r.path}
                        </Button>
                    </Link>
                ))}
            </Space>
            <Divider />

            <div style={{ textAlign: 'center' }}>
                <Outlet />
            </div>
        </div>
    );
};

export default Demos;
