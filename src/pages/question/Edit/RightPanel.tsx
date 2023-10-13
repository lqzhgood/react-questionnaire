import { FileTextOutlined, SettingOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';
import React from 'react';
import ComponentProp from './ComponentProp';

const RightPanel = () => {
    const tableItems = [
        {
            key: 'prop',
            label: (
                <span>
                    <FileTextOutlined />
                    属性
                </span>
            ),
            children: <ComponentProp />,
        },
        {
            key: 'setting',
            label: (
                <span>
                    <SettingOutlined />
                    页面设置
                </span>
            ),
            children: <div>页面设置</div>,
        },
    ];

    return <Tabs items={tableItems} defaultActiveKey='prop'></Tabs>;
};

export default RightPanel;
