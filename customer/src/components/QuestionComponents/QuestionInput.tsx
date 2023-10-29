import React from 'react';

import styles from './QuestionInput.module.sass';

type Props = {
    fe_id: string;
    props: {
        title: string;
        placeholder?: string;
    };
};

const QuestionInput = ({ fe_id, props }: Props) => {
    const { title = '', placeholder = '' } = props;

    return (
        <>
            <p>{title}</p>
            <div className={styles.inputWrapper}>
                <input className={styles.input} type='text' name={fe_id} placeholder={placeholder} />
            </div>
        </>
    );
};

export default QuestionInput;
