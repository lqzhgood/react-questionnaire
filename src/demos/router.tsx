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
import Redux from './pages/Redux';
import Mobx from './pages/Mobx';
import TestMockMvc from './pages/TestMockMvc';
import DndSortable from './pages/Dnd-sortable';
import ReduxUndo from './pages/ReduxUndo';
import ChartPie from './pages/ChartPie';
import ChartBar from './pages/ChartBar';

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
        {
            path: 'Redux',
            element: <Redux />,
        },
        {
            path: 'Mobx',
            element: <Mobx />,
        },
        {
            path: 'TestMockMvc',
            element: <TestMockMvc />,
        },
        {
            path: 'Dnd-sortable',
            element: <DndSortable />,
        },
        {
            path: 'ReduxUndo',
            element: <ReduxUndo />,
        },
        {
            path: 'ChartPie',
            element: <ChartPie />,
        },
        {
            path: 'ChartBar',
            element: <ChartBar />,
        },
    ],
};
