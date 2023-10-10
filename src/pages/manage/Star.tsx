import React, { useMemo, useState } from 'react';
import QuestionCard from '../../components/QuestionCard';
import { useTitle } from 'ahooks';
import styles from './common.module.sass';
import Title from 'antd/es/typography/Title';
import { Empty, Spin } from 'antd';
import { WEB_NAME } from '../../const/web';
import ListSearch from '../../components/ListSearch';
import useLoadQuestList from '../../hooks/useLoadQuestList';
import ListPage from '../../components/ListPage';

const Star = () => {
    useTitle(`星标问卷 - ${WEB_NAME}`);

    const { loading, error, data = { list: [], total: 0 } } = useLoadQuestList({ isStar: true });
    const { list, total } = data;

    const contentElm = useMemo(() => {
        if (loading)
            return (
                <div style={{ textAlign: 'center' }}>
                    <Spin />
                </div>
            );
        if (list.length === 0) return <Empty description='暂无数据' />;
        return list.map(q => {
            const { _id } = q;

            return <QuestionCard key={_id} {...q} />;
        });
    }, [loading, list]);

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.left}>
                    <Title level={3}>我的问卷</Title>
                </div>
                <div className={styles.right}>
                    <ListSearch />
                </div>
            </div>
            <div className={styles.content}>{contentElm}</div>
            <div className={styles.footer}>
                <ListPage total={total} />
            </div>
        </div>
    );
};

export default Star;
