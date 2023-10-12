import React, { useEffect } from 'react';
import useLoadQuestionData from '../../../hooks/useLoadQuestionData';

import styles from './index.module.sass';
import EditCanvas from './EditCanvas';

const Edit = () => {
    const { loading, questionData } = useLoadQuestionData();

    return (
        <div className={styles.container}>
            <div>Header</div>
            <div className={styles['content-wrapper']}>
                <div className={styles.content}>
                    <div className={styles.left}>left</div>
                    <div className={styles.main}>
                        <div className={styles['canvas-wrapper']}>
                            <EditCanvas />
                        </div>
                    </div>
                    <div className={styles.right}>right</div>
                </div>
            </div>
        </div>
    );
};

export default Edit;
