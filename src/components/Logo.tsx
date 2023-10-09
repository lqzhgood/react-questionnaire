import React from 'react';
import { FormOutlined } from '@ant-design/icons';
import { Space, Typography } from 'antd';
import styles from './Logo.module.sass';
import { Link } from 'react-router-dom';
import { HOME_PATHNAME } from '../routers';
import { WEB_NAME } from '../const/web';

const { Title } = Typography;

type Props = {
    //
};

const Logo = (props: Props) => {
    return (
        <Link to={HOME_PATHNAME}>
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
