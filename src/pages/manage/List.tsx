import React, { useState } from 'react';
import QuestionCard from '../../components/QuestionCard';
import { useSearchParams } from 'react-router-dom';
import { useTitle } from 'ahooks';
import styles from './common.module.sass';
import Title from 'antd/es/typography/Title';
import { WEB_NAME } from '../../const/web';

const List = () => {
    useTitle(`我的问卷 - ${WEB_NAME}`);

    const [questionList, setQuestionList] = useState([
        { _id: 'q1', title: '问卷1', isPublished: false, isStar: false, answerCount: 2, createdAt: '3月10日 13:23' },
        { _id: 'q2', title: '问卷2', isPublished: false, isStar: false, answerCount: 3, createdAt: '3月11日 13:23' },
        { _id: 'q3', title: '问卷3', isPublished: false, isStar: true, answerCount: 5, createdAt: '3月16日 13:23' },
        { _id: 'q4', title: '问卷4', isPublished: true, isStar: false, answerCount: 7, createdAt: '4月1日 13:23' },
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
                {questionList.length > 0 &&
                    questionList.map(q => {
                        const { _id } = q;

                        return <QuestionCard key={_id} {...q} />;
                    })}
            </div>
            <div className={styles.footer}>加载更多...</div>
        </>
    );
};

export default List;
