import React from 'react';
import { componentConfGroup } from '@/components/QuestionComponents';
import { Typography } from 'antd';
import styles from './ComponentLib.module.sass';
const { Title } = Typography;

const ComponentLib = () => {
    return (
        <>
            {componentConfGroup.map((g, i) => {
                const { groupName, components } = g;
                return (
                    <div className={styles.wrap} key={groupName}>
                        <Title className={styles.title} level={3}>
                            {groupName}
                        </Title>

                        {components.map(c => {
                            const { type, Component } = c;
                            return (
                                <div className={styles.componentWrap} key={type}>
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
