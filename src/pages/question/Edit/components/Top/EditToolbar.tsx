import React from 'react';
import {
    BlockOutlined,
    CopyOutlined,
    DeleteOutlined,
    DownOutlined,
    EyeInvisibleOutlined,
    LockOutlined,
    UpOutlined,
} from '@ant-design/icons';
import { Button, Space, Tooltip } from 'antd';
import { useDispatch } from 'react-redux';
import {
    removeSelectedComponent,
    changeComponentHidden,
    toggleComponentLocked,
    copyComponent,
    pasteCopiedComponent,
    moveComponent,
} from '@/store/componentsReducer';
import useGetComponentInfo from '@/hooks/useGetComponentInfo';
import useBindCanvasKeyPress from '@/hooks/useBindCanvasKeyPress';

const EditToolbar = () => {
    const dispatch = useDispatch();

    const { selectedId, selectedComponent, copiedComponent, componentList } = useGetComponentInfo();

    const { isLocked = false } = selectedComponent || {};

    useBindCanvasKeyPress();

    const length = componentList.length - 1;
    const selectedIndex = componentList.findIndex(c => c.fe_id === selectedId);

    const isFirst = selectedIndex <= 0;
    const isLast = selectedIndex >= length;

    return (
        <Space>
            <Tooltip title='删除'>
                <Button
                    shape='circle'
                    icon={<DeleteOutlined />}
                    onClick={() => dispatch(removeSelectedComponent({ fe_id: selectedId }))}
                />
            </Tooltip>
            <Tooltip title='隐藏'>
                <Button
                    shape='circle'
                    icon={<EyeInvisibleOutlined />}
                    onClick={() => dispatch(changeComponentHidden({ fe_id: selectedId, isHidden: true }))}
                />
            </Tooltip>
            <Tooltip title={isLocked ? '解锁' : '锁定'}>
                <Button
                    shape='circle'
                    icon={<LockOutlined />}
                    type={isLocked ? 'primary' : 'default'}
                    onClick={() => dispatch(toggleComponentLocked({ fe_id: selectedId }))}
                />
            </Tooltip>
            <Tooltip title='复制'>
                <Button
                    shape='circle'
                    icon={<CopyOutlined />}
                    onClick={() => dispatch(copyComponent({ fe_id: selectedId }))}
                />
            </Tooltip>
            <Tooltip title='粘贴'>
                <Button
                    shape='circle'
                    icon={<BlockOutlined />}
                    disabled={!copiedComponent}
                    onClick={() => dispatch(pasteCopiedComponent())}
                />
            </Tooltip>
            <Tooltip title='上移'>
                <Button
                    shape='circle'
                    icon={<UpOutlined />}
                    disabled={isFirst}
                    onClick={() => {
                        if (isFirst) {
                            return;
                        }
                        dispatch(moveComponent({ oldIndex: selectedIndex, newIndex: selectedIndex - 1 }));
                    }}
                />
            </Tooltip>
            <Tooltip title='下移'>
                <Button
                    shape='circle'
                    icon={<DownOutlined />}
                    disabled={isLast}
                    onClick={() => {
                        if (isLast) {
                            return;
                        }
                        dispatch(moveComponent({ oldIndex: selectedIndex, newIndex: selectedIndex + 1 }));
                    }}
                />
            </Tooltip>
        </Space>
    );
};

export default EditToolbar;
