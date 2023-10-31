import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Space, Typography } from 'antd';
import { MANAGER_INDEX_PATHNAME } from '../routers';

const { Title, Paragraph } = Typography;

import styles from './Home.module.sass';
import { ReactComponent as StorybookIcon } from '@/assets/storybook.svg';

const Home = () => {
    const nav = useNavigate();

    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <Title>问卷调查 | 在线投票</Title>
                <Paragraph>已累计创建问卷 100 份，发布问卷 90 份，收到答卷 980 份</Paragraph>
                <Space>
                    <Button type='primary' onClick={() => nav(MANAGER_INDEX_PATHNAME)}>
                        开始使用
                    </Button>
                    <Button type='link' className={styles.storybook} onClick={() => window.open('./storybook')}>
                        <StorybookIcon className={styles.icon} />
                    </Button>
                </Space>
            </div>
        </div>
    );
};

export default Home;
