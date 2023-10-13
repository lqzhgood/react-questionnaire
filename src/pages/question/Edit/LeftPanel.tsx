import React from 'react';
import { AppstoreOutlined, BarsOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';
import ComponentLib from './ComponentLib';

const LeftPanel = () => {
    const tabsItems = [
        {
            key: 'componentLib',
            label: (
                <span>
                    <AppstoreOutlined />
                    组件库
                </span>
            ),
            children: (
                <div>
                    <ComponentLib />
                </div>
            ),
        },
        {
            key: 'layers',
            label: (
                <span>
                    <BarsOutlined />
                    图层
                </span>
            ),
            children: <div>图层</div>,
        },
    ];

    return <Tabs items={tabsItems} defaultActiveKey='componentLib'></Tabs>;
};

export default LeftPanel;
