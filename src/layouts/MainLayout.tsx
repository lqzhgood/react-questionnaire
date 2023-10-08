import React from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;

import styles from './MainLayout.module.sass';

const MainLayout = () => {
    return (
        <Layout>
            <Header className={styles.header}>
                <div className={styles.left}>Logo</div>
                <div className={styles.right}>登录</div>
            </Header>
            <Content className={styles.main}>
                <Outlet />
            </Content>
            <Footer className={styles.footer}>问卷 &copy; {new Date().getFullYear()}</Footer>
        </Layout>
    );
};

export default MainLayout;
