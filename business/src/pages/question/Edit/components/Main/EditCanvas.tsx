import React from 'react';
import { Empty, Spin } from 'antd';
import useGetComponentInfo from '@/hooks/useGetComponentInfo';
import { componentConfList } from '@/components/QuestionComponents';
import { ComponentInfoType, changeSelectedId, moveComponent } from '@/store/componentsReducer';
import styles from './EditCanvas.module.sass';
import { useDispatch } from 'react-redux';
import classnames from 'classnames';
import SortableContainer from '@/components/DragSortable/SortableContainer';
import SortableItem from '@/components/DragSortable/SortableItem';

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
        <SortableContainer
            items={componentList.map(c => ({ id: c.fe_id, ...c }))}
            onDragEnd={(oldIndex, newIndex) => {
                dispatch(moveComponent({ oldIndex, newIndex }));
            }}
        >
            <div className={styles.canvas}>
                {componentList
                    .filter(c => !c.isHidden)
                    .map(c => {
                        const { fe_id, isLocked } = c;

                        const wrapClass = classnames(styles['component-wrapper'], {
                            [styles.selected]: fe_id === selectedId,
                            [styles.locked]: isLocked,
                        });

                        return (
                            <SortableItem id={fe_id} key={fe_id}>
                                <div
                                    className={wrapClass}
                                    onClick={e => {
                                        e.stopPropagation();
                                        dispatch(changeSelectedId(fe_id));
                                    }}
                                >
                                    <div className={styles.component}>{findComponent(c)}</div>
                                </div>
                            </SortableItem>
                        );
                    })}
            </div>
        </SortableContainer>
    );
};

export default EditCanvas;
