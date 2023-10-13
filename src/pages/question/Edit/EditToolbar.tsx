import React from 'react';
import { DeleteOutlined } from '@ant-design/icons';
import { Button, Space, Tooltip } from 'antd';
import { useDispatch } from 'react-redux';
import { removeSelectedComponent } from '@/store/componentsReducer';

const EditToolbar = () => {
    const dispatch = useDispatch();

    return (
        <Space>
            <Tooltip title='删除'>
                <Button shape='circle' icon={<DeleteOutlined />} onClick={() => dispatch(removeSelectedComponent())} />
            </Tooltip>
        </Space>
    );
};

export default EditToolbar;
