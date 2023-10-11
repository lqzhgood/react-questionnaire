import React from 'react';
import Demos from './index';
import StyledComponents from './pages/StyledComponents';
import UseCallback from './pages/UseCallback';
import UseMemo from './pages/UseMemo';
import UseRef from './pages/UseRef';
import List from './pages/List';
import Count from './pages/Count';
import ClosureTrap from './pages/ClosureTrap';
import ClassnamesFC from './pages/ClassnamesFC';
import Context from './pages/Context/index';
import CountReducer from './pages/CountReducer';
import TodoReducer from './pages/TodoReducer/index';

export const demosRouter = {
    path: '/demos',
    element: <Demos />,
    children: [
        {
            path: 'StyledComponents',
            element: <StyledComponents />,
        },
        {
            path: 'UseCallback',
            element: <UseCallback />,
        },
        {
            path: 'UseMemo',
            element: <UseMemo />,
        },
        {
            path: 'UseRef',
            element: <UseRef />,
        },
        {
            path: 'List',
            element: <List />,
        },
        {
            path: 'Count',
            element: <Count init={5} />,
        },
        {
            path: 'ClosureTrap',
            element: <ClosureTrap />,
        },
        {
            path: 'ClassnamesFC',
            element: <ClassnamesFC />,
        },
        {
            path: 'Context',
            element: <Context />,
        },
        {
            path: 'CountReducer',
            element: <CountReducer />,
        },
        {
            path: 'TodoReducer',
            element: <TodoReducer />,
        },
    ],
};
