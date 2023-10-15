import useGetComponentInfo from '@/hooks/useGetComponentInfo';
import React, { ChangeEvent, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './Layers.module.sass';
import { Button, Input, InputRef, Space, message } from 'antd';
import {
    updateComponent,
    changeSelectedId,
    toggleComponentLocked,
    changeComponentHidden,
} from '@/store/componentsReducer';
import classNames from 'classnames';
import { EyeInvisibleOutlined, LockOutlined } from '@ant-design/icons';

const Layers = () => {
    const { componentList, selectedId } = useGetComponentInfo();
    const dispatch = useDispatch();

    const [changingTitleId, setChangingTitleId] = useState('');

    const inputRef = useCallback((node: InputRef) => {
        if (node !== null) {
            node.focus();
        }
    }, []);

    function handleTitleClick(fe_id: string) {
        const currComp = componentList.find(c => c.fe_id === fe_id);
        if (!currComp || currComp.isHidden) {
            message.info('不能选中隐藏组件');
            return;
        }

        if (fe_id === selectedId) {
            // true -> 修改为 Input 允许输入
            setChangingTitleId(fe_id);
            // 修改后会 render Input， 从而挂载 Ref 从而触发 inputRef.focus()
        } else {
            // false -> 显示为文本
            dispatch(changeSelectedId(fe_id));
            setChangingTitleId('');
        }
    }

    function updateTitle(fe_id: string, e: ChangeEvent<HTMLInputElement>) {
        const t = e.target.value.trim();
        if (!t) return;
        dispatch(updateComponent({ fe_id, opt: { title: t } }));
    }

    return (
        <>
            {componentList.map(({ fe_id, title, isHidden, isLocked }) => {
                const titleClassName = classNames(styles.title, {
                    [styles.selected]: fe_id === selectedId,
                });

                return (
                    <div key={fe_id} className={styles.wrapper}>
                        <div className={titleClassName} onClick={() => handleTitleClick(fe_id)}>
                            {changingTitleId === fe_id ? (
                                <Input
                                    ref={inputRef}
                                    value={title}
                                    onChange={e => updateTitle(fe_id, e)}
                                    onPressEnter={() => setChangingTitleId('')}
                                    onBlur={() => setChangingTitleId('')}
                                />
                            ) : (
                                title
                            )}
                        </div>
                        <div className={styles.handler}>
                            <Space>
                                <Button
                                    className={!isHidden ? styles.btn : ''}
                                    shape='circle'
                                    size='small'
                                    icon={<EyeInvisibleOutlined />}
                                    type={isHidden ? 'primary' : 'text'}
                                    onClick={() => dispatch(changeComponentHidden({ fe_id, isHidden: !isHidden }))}
                                />
                                <Button
                                    className={!isLocked ? styles.btn : ''}
                                    shape='circle'
                                    size='small'
                                    icon={<LockOutlined />}
                                    type={isLocked ? 'primary' : 'text'}
                                    onClick={() => dispatch(toggleComponentLocked({ fe_id }))}
                                />
                            </Space>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default Layers;
