import React from 'react';

import styles from './EditCanvas.module.sass';
import QuestionInput from '@/components/QuestionComponents/QuestionInput/Components';
import QuestionTitle from '@/components/QuestionComponents/QuestionTitle/Components';

const EditCanvas = () => {
    return (
        <div className={styles.canvas}>
            <div className={styles['component-wrapper']}>
                <div className={styles.component}>
                    <QuestionTitle />
                </div>
            </div>
            <div className={styles['component-wrapper']}>
                <div className={styles.component}>
                    <QuestionInput />
                </div>
            </div>
        </div>
    );
};

export default EditCanvas;
