import React from 'react';
import { Empty, Spin } from 'antd';
import useGetComponentInfo from '@/hooks/useGetComponentInfo';
import { componentConfList } from '@/components/QuestionComponents';
import { ComponentInfoType, changeSelectedId } from '@/store/componentsReducer';
import styles from './EditCanvas.module.sass';
import { useDispatch } from 'react-redux';
import classnames from 'classnames';

type PropsType = {
    loading: boolean;
};

function findComponent(c: ComponentInfoType) {
    const conf = componentConfList[c.type];
    return conf ? <conf.Component {...c.props} /> : <Empty description='找不到组件' />;
}

const EditCanvas = ({ loading }: PropsType) => {
    const dispatch = useDispatch();
    const { componentList, selectedId } = useGetComponentInfo();
    if (loading)
        return (
            <div style={{ textAlign: 'center', marginTop: '24px' }}>
                <Spin />
            </div>
        );
    return (
        <div className={styles.canvas}>
            {componentList
                .filter(c => !c.isHidden)
                .map(c => {
                    const { fe_id } = c;

                    const wrapClass = classnames(styles['component-wrapper'], {
                        [styles.selected]: fe_id === selectedId,
                    });

                    return (
                        <div
                            className={wrapClass}
                            key={fe_id}
                            onClick={e => {
                                e.stopPropagation();
                                dispatch(changeSelectedId(fe_id));
                            }}
                        >
                            <div className={styles.component}>{findComponent(c)}</div>
                        </div>
                    );
                })}
        </div>
    );
};

export default EditCanvas;
