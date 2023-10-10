import React, { FC, useState } from 'react';
import './App.css';

import { RouterProvider } from 'react-router-dom';

import routerConfig from './routers';
import zhCN from 'antd/locale/zh_CN';
import { ConfigProvider } from 'antd';

function App() {
    return (
        <ConfigProvider locale={zhCN}>
            <RouterProvider router={routerConfig}></RouterProvider>;
        </ConfigProvider>
    );
}

export default App;
