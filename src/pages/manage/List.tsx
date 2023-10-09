import React, { useState } from 'react';
import QuestionCard from '../../components/QuestionCard';
import { useSearchParams } from 'react-router-dom';
import { useTitle } from 'ahooks';
import styles from './common.module.sass';
import Title from 'antd/es/typography/Title';
import { WEB_NAME } from '../../const/web';
import ListSearch from '../../components/ListSearch';
import { Spin } from 'antd';
import useLoadQuestList from '../../hooks/useLoadQuestList';

const List = () => {
    useTitle(`我的问卷 - ${WEB_NAME}`);

    const [searchParams] = useSearchParams();

    const { loading, error, data = { list: [], total: 0 } } = useLoadQuestList();
    const { list, total } = data;
    return (
        <>
            <div className={styles.header}>
                <div className={styles.left}>
                    <Title level={3}>我的问卷</Title>
                </div>
                <div className={styles.right}>
                    <ListSearch />
                </div>
            </div>
            <div className={styles.content}>
                <Spin spinning={loading}>
                    {list.map(q => {
                        const { _id } = q;

                        return <QuestionCard key={_id} {...q} />;
                    })}
                </Spin>
            </div>
            <div className={styles.footer}>加载更多...</div>
        </>
    );
};

export default List;
