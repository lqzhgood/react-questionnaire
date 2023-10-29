import React from 'react';
import styles from './ComponentList.module.sass';
import useGetComponentInfo from '@/hooks/useGetComponentInfo';
import classnames from 'classnames';
import { componentConfList } from '@/components/QuestionComponents';
import { QuestionComponentType } from '@/const/question';

type PropsType = {
    selectedComponentId: string;
    setSelectedComponentId: (id: string) => void;
    setSelectedComponentType: (type: QuestionComponentType) => void;
};

const ComponentList = ({ selectedComponentId, setSelectedComponentId, setSelectedComponentType }: PropsType) => {
    const { componentList } = useGetComponentInfo();

    return (
        <div className={styles.container}>
            {componentList
                .filter(c => !c.isHidden)
                .map(({ fe_id, props, type }) => {
                    const componentConf = componentConfList[type];
                    const { Component } = componentConf;

                    const wrapClass = classnames(styles['component-wrapper'], {
                        [styles.selected]: fe_id === selectedComponentId,
                    });

                    return (
                        <div
                            key={fe_id}
                            className={wrapClass}
                            onClick={() => {
                                setSelectedComponentId(fe_id);
                                setSelectedComponentType(type);
                            }}
                        >
                            <div className={styles.component}>
                                <Component {...props} />
                            </div>
                        </div>
                    );
                })}
        </div>
    );
};

export default ComponentList;
