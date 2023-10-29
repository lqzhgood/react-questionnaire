import React from 'react';
import { FormOutlined } from '@ant-design/icons';
import { Space, Typography } from 'antd';
import styles from './Logo.module.sass';
import { Link } from 'react-router-dom';
import { HOME_PATHNAME, MANAGER_INDEX_PATHNAME } from '../routers';
import { WEB_NAME } from '../const/web';
import useGetUserInfo from '@/hooks/useGetUserInfo';

const { Title } = Typography;

const Logo = () => {
    const { username } = useGetUserInfo();

    return (
        <Link to={username ? MANAGER_INDEX_PATHNAME : HOME_PATHNAME}>
            <Space className={styles.container}>
                <Title>
                    <FormOutlined></FormOutlined>
                </Title>
                <Title className={styles.title}>{WEB_NAME}</Title>
            </Space>
        </Link>
    );
};

export default Logo;
