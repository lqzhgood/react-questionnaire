import React, { useState } from 'react';
import { useTitle } from 'ahooks';
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

import CenterSpin from '@/components/CenterSpin';
import useGetQuestionPageInfo from '@/hooks/useGetQuestionPageInfo';
import useLoadQuestionData from '@/hooks/useLoadQuestionData';

import styles from './index.module.sass';
import StatHeader from './components/Top/StatHeader';
import ComponentList from './components/Left/ComponentList';
import PageSata from './components/Main/PageSata';
import ChartStat from './components/Right/ChartStat';
import { QuestionComponentType } from '@/const/question';

const Stat = () => {
    const nav = useNavigate();
    const { loading } = useLoadQuestionData();
    const { isPublished, title } = useGetQuestionPageInfo();
    useTitle(title + '- 问卷统计', { restoreOnUnmount: true });

    const [selectedComponentId, setSelectedComponentId] = useState('');
    const [selectedComponentType, setSelectedComponentType] = useState<QuestionComponentType>();

    const LoadingElm = <CenterSpin style={{ marginTop: '60px' }} />;

    const PublishedElm = (
        <div style={{ flex: '1' }}>
            <Result
                status='warning'
                title='问卷未发布'
                extra={
                    <Button type='primary' onClick={() => nav(-1)}>
                        返回
                    </Button>
                }
            />
        </div>
    );

    function ContentElm() {
        if (isPublished !== undefined && !isPublished) return PublishedElm;

        return (
            <>
                <div className={styles.left}>
                    <ComponentList
                        selectedComponentId={selectedComponentId}
                        setSelectedComponentId={setSelectedComponentId}
                        setSelectedComponentType={setSelectedComponentType}
                    />
                </div>
                <div className={styles.main}>
                    <PageSata
                        selectedComponentId={selectedComponentId}
                        setSelectedComponentId={setSelectedComponentId}
                        setSelectedComponentType={setSelectedComponentType}
                    />
                </div>
                <div className={styles.right}>
                    <ChartStat
                        selectedComponentId={selectedComponentId}
                        selectedComponentType={selectedComponentType}
                    />
                </div>
            </>
        );
    }

    return (
        <div className={styles.container}>
            <div>
                <StatHeader />
            </div>
            <div className={styles['content-wrapper']}>
                {loading ? LoadingElm : <div className={styles.content}>{ContentElm()}</div>}
            </div>
        </div>
    );
};
export default Stat;
