import React from 'react';
import { useDispatch } from 'react-redux';
import { changeSelectedId } from '@/store/componentsReducer';
import useLoadQuestionData from '../../../hooks/useLoadQuestionData';

import styles from './index.module.sass';

import EditCanvas from './components/Main/EditCanvas';
import LeftPanel from './components/Left/LeftPanel';
import RightPanel from './components/Right/RightPanel';
import EditHeader from './components/Top/EditHeader';
import { useTitle } from 'ahooks';
import useGetQuestionPageInfo from '@/hooks/useGetQuestionPageInfo';

const Edit = () => {
    const { loading } = useLoadQuestionData();
    const { title } = useGetQuestionPageInfo();
    useTitle(title + '- 问卷编辑', { restoreOnUnmount: true });

    const dispatch = useDispatch();

    function clearSelectedId() {
        dispatch(changeSelectedId(''));
    }

    return (
        <div className={styles.container}>
            <div>
                <EditHeader />
            </div>
            <div className={styles['content-wrapper']}>
                <div className={styles.content}>
                    <div className={styles.left}>
                        <LeftPanel />
                    </div>
                    <div className={styles.main} onClick={clearSelectedId}>
                        <div className={styles['canvas-wrapper']}>
                            <EditCanvas loading={loading} />
                        </div>
                    </div>
                    <div className={styles.right}>
                        <RightPanel />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Edit;
