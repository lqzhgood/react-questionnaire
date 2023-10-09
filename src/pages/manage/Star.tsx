import React, { useState } from 'react';
import QuestionCard from '../../components/QuestionCard';
import { useSearchParams } from 'react-router-dom';
import { useTitle } from 'ahooks';
import styles from './common.module.sass';
import Title from 'antd/es/typography/Title';
import { Empty } from 'antd';
import { WEB_NAME } from '../../const/web';

const Star = () => {
    useTitle(`星标问卷 - ${WEB_NAME}`);

    const [questionList, setQuestionList] = useState([
        { _id: 'q1', title: '问卷1', isPublished: false, isStar: true, answerCount: 2, createdAt: '3月10日 13:23' },
        { _id: 'q3', title: '问卷3', isPublished: false, isStar: true, answerCount: 5, createdAt: '3月16日 13:23' },
    ]);

    const [searchParams] = useSearchParams();

    return (
        <>
            {searchParams.get('keyword')}

            <div className={styles.header}>
                <div className={styles.left}>
                    <Title level={3}>我的问卷</Title>
                </div>
                <div className={styles.right}>(搜索)</div>
            </div>
            <div className={styles.content}>
                {questionList.length > 0 ? (
                    questionList.map(q => {
                        const { _id } = q;

                        return <QuestionCard key={_id} {...q} />;
                    })
                ) : (
                    <Empty description='暂无数据' />
                )}
            </div>
            <div className={styles.footer}>分页</div>
        </>
    );
};

export default Star;
