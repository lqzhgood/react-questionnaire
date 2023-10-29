import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Layout, Space } from 'antd';
const { Header, Content, Footer } = Layout;

import styles from './MainLayout.module.sass';
import Logo from '../components/Logo';
import UserInfo from '../components/UserInfo';
import { WEB_NAME } from '../const/web';
import useNavPage from '@/hooks/useNavPage';
import { AppstoreAddOutlined } from '@ant-design/icons';

const MainLayout = () => {
    useNavPage();
    return (
        <Layout>
            <Header className={styles.header}>
                <div className={styles.left}>
                    <Logo />
                </div>
                <div className={styles.right}>
                    <UserInfo />
                </div>
            </Header>
            <Content className={styles.main}>
                <Outlet />
            </Content>
            <Footer className={styles.footer}>
                <Space>
                    <span>
                        {WEB_NAME} &copy; {new Date().getFullYear()}
                    </span>
                    <Link to='/demos'>
                        <AppstoreAddOutlined title='Demos' />
                    </Link>
                </Space>
            </Footer>
        </Layout>
    );
};

export default MainLayout;
