import React from 'react';
import { FileTextOutlined, SettingOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';
import PropForm from './PropForm';
import PageSetting from './PageSetting';
import useGetComponentInfo from '@/hooks/useGetComponentInfo';

enum TAB_KEYS {
    PROP = 'PROP',
    SETTING = 'SETTING',
}

const RightPanel = () => {
    const { selectedId } = useGetComponentInfo();
    const tableItems = [
        {
            key: TAB_KEYS.PROP,
            label: (
                <span>
                    <FileTextOutlined />
                    属性
                </span>
            ),
            children: <PropForm />,
        },
        {
            key: TAB_KEYS.SETTING,
            label: (
                <span>
                    <SettingOutlined />
                    页面设置
                </span>
            ),
            children: <PageSetting />,
        },
    ];

    return <Tabs items={tableItems} activeKey={selectedId ? TAB_KEYS.PROP : TAB_KEYS.SETTING}></Tabs>;
};

export default RightPanel;
