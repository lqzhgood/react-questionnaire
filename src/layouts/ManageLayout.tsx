import React from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import styles from './ManageLayout.module.sass';
import { Button, Divider, Space, message } from 'antd';
import { BarsOutlined, DeleteOutlined, PlusOutlined, StarOutlined } from '@ant-design/icons';

import { manageRouter } from '../routers/index';
import { createQuestionService } from '../services/question';

const iconMap = {
    list: <BarsOutlined />,
    star: <StarOutlined />,
    trash: <DeleteOutlined />,
};
const ManageLayout = () => {
    const nav = useNavigate();
    const { pathname } = useLocation();

    async function createQuestion() {
        const data = await createQuestionService<{ id: string }>();
        const { id } = data;
        nav(`/question/edit/${id}`);
        message.success(`创建成功 ${id}`);
    }

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <Space direction='vertical'>
                    <Button type='primary' icon={<PlusOutlined />} size='large' onClick={createQuestion}>
                        创建问卷
                    </Button>
                    <Divider style={{ borderTop: 'transparent' }} />
                    {manageRouter.children
                        .filter(r => r.path)
                        .map((r, i) => (
                            <Button
                                size='large'
                                type={`/${manageRouter.path}/${r.path}` === pathname ? 'default' : 'text'}
                                icon={(iconMap as any)[r.path]}
                                onClick={() => nav(r.path)}
                                key={r.path}
                            >
                                {r.name}
                            </Button>
                        ))}
                </Space>
            </div>
            <div className={styles.right}>
                <Outlet />
            </div>
        </div>
    );
};

export default ManageLayout;
