import React from 'react';
import styles from './QuestionRadio.module.sass';
type Props = {
    fe_id: string;
    props: {
        title: string;
        options: { label: string; value: string }[];
        value: string;
        isVertical?: boolean;
    };
};

const QuestionRadio = ({ fe_id, props }: Props) => {
    const { title = '', options = [], value = '', isVertical = false } = props;
    return (
        <>
            <p>{title}</p>
            <ul className={styles.list}>
                {options.map(opt => (
                    <li key={opt.value} className={isVertical ? styles.verticalItem : styles.horizontalItem}>
                        <input type='radio' name={fe_id} id={opt.value} value={opt.value} defaultChecked={value === opt.value} />
                        <label htmlFor={opt.value}>{opt.label}</label>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default QuestionRadio;
