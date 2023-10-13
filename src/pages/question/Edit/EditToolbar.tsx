import React from 'react';
import { DeleteOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { Button, Space, Tooltip } from 'antd';
import { useDispatch } from 'react-redux';
import { removeSelectedComponent, changeComponentHidden } from '@/store/componentsReducer';
import useGetComponentInfo from '@/hooks/useGetComponentInfo';

const EditToolbar = () => {
    const dispatch = useDispatch();

    const { selectedId } = useGetComponentInfo();

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
        </Space>
    );
};

export default EditToolbar;
