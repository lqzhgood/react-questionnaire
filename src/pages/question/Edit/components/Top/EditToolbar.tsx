import React from 'react';
import { BlockOutlined, CopyOutlined, DeleteOutlined, EyeInvisibleOutlined, LockOutlined } from '@ant-design/icons';
import { Button, Space, Tooltip } from 'antd';
import { useDispatch } from 'react-redux';
import {
    removeSelectedComponent,
    changeComponentHidden,
    toggleComponentLocked,
    copyComponent,
    pasteCopiedComponent,
} from '@/store/componentsReducer';
import useGetComponentInfo from '@/hooks/useGetComponentInfo';
import useBindCanvasKeyPress from '@/hooks/useBindCanvasKeyPress';

const EditToolbar = () => {
    const dispatch = useDispatch();

    const { selectedId, selectedComponent, copiedComponent } = useGetComponentInfo();

    const { isLocked = false } = selectedComponent || {};

    useBindCanvasKeyPress();

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
        </Space>
    );
};

export default EditToolbar;
