import React from 'react';
import { ComponentConfType, componentConfGroup } from '@/components/QuestionComponents';
import { Typography } from 'antd';
import styles from './ComponentLib.module.sass';
import { useDispatch } from 'react-redux';
import { addComponent } from '@/store/componentsReducer';
import { nanoid } from 'nanoid';
const { Title } = Typography;

const ComponentLib = () => {
    const dispatch = useDispatch();
    function add(c: ComponentConfType) {
        const { title, type, defaultProps } = c;

        dispatch(
            addComponent({
                fe_id: nanoid(),
                type,
                title,
                props: defaultProps,
            }),
        );
    }

    return (
        <>
            {componentConfGroup.map(g => {
                const { groupName, components } = g;
                return (
                    <div className={styles.wrap} key={groupName}>
                        <Title className={styles.title} level={3}>
                            {groupName}
                        </Title>

                        {components.map(c => {
                            const { type, Component } = c;
                            return (
                                <div className={styles.componentWrap} key={type} onClick={() => add(c)}>
                                    <div className={styles.component}>
                                        <Component />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </>
    );
};

export default ComponentLib;
