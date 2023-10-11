import { demosRouter } from '@/routers/demos';
import { LinkOutlined } from '@ant-design/icons';
import { Button, Divider, Space } from 'antd';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Demos = () => {
    return (
        <>
            <h1>Demos</h1>
            <p>学些一些 Api 的临时 Demos</p>

            <Divider />
            <Space>
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
        </>
    );
};

export default Demos;
