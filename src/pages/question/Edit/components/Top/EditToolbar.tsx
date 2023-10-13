import React from 'react';
import { DeleteOutlined, EyeInvisibleOutlined, LockOutlined } from '@ant-design/icons';
import { Button, Space, Tooltip } from 'antd';
import { useDispatch } from 'react-redux';
import { removeSelectedComponent, changeComponentHidden, toggleComponentLocked } from '@/store/componentsReducer';
import useGetComponentInfo from '@/hooks/useGetComponentInfo';

const EditToolbar = () => {
    const dispatch = useDispatch();

    const { selectedId, selectedComponent } = useGetComponentInfo();

    const { isLocked = false } = selectedComponent || {};

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
        </Space>
    );
};

export default EditToolbar;
