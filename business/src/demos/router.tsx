import AsyncComponent from '@/components/AsyncComponent';
import React, { lazy } from 'react';
import { Outlet } from 'react-router-dom';

const Demos = lazy(() => import('./index'));
const StyledComponents = lazy(() => import('./pages/StyledComponents'));
const UseCallback = lazy(() => import('./pages/UseCallback'));
const UseMemo = lazy(() => import('./pages/UseMemo'));
const UseRef = lazy(() => import('./pages/UseRef'));
const List = lazy(() => import('./pages/List'));
const Count = lazy(() => import('./pages/Count'));
const ClosureTrap = lazy(() => import('./pages/ClosureTrap'));
const ClassnamesFC = lazy(() => import('./pages/ClassnamesFC'));
const Context = lazy(() => import('./pages/Context/index'));
const CountReducer = lazy(() => import('./pages/CountReducer'));
const TodoReducer = lazy(() => import('./pages/TodoReducer/index'));
const Redux = lazy(() => import('./pages/Redux'));
const Mobx = lazy(() => import('./pages/Mobx'));
const TestMockMvc = lazy(() => import('./pages/TestMockMvc'));
const DndSortable = lazy(() => import('./pages/Dnd-sortable'));
const ReduxUndo = lazy(() => import('./pages/ReduxUndo'));
const ChartPie = lazy(() => import('./pages/ChartPie'));
const ChartBar = lazy(() => import('./pages/ChartBar'));
const UseStateFn = lazy(() => import('./pages/Optimize/UseStateFn'));
const ReactMemo = lazy(() => import('./pages/Optimize/ReactMemo'));

export const demosRouter = {
    path: 'demos',
    element: (
        <AsyncComponent>
            <Demos />
        </AsyncComponent>
    ),
    children: [
        {
            path: 'normal',
            element: (
                <AsyncComponent>
                    <Outlet />
                </AsyncComponent>
            ),
            children: [
                {
                    path: 'StyledComponents',
                    element: (
                        <AsyncComponent>
                            <StyledComponents />
                        </AsyncComponent>
                    ),
                },
                {
                    path: 'UseCallback',
                    element: (
                        <AsyncComponent>
                            <UseCallback />
                        </AsyncComponent>
                    ),
                },
                {
                    path: 'UseMemo',
                    element: (
                        <AsyncComponent>
                            <UseMemo />
                        </AsyncComponent>
                    ),
                },
                {
                    path: 'UseRef',
                    element: (
                        <AsyncComponent>
                            <UseRef />
                        </AsyncComponent>
                    ),
                },
                {
                    path: 'List',
                    element: (
                        <AsyncComponent>
                            <List />
                        </AsyncComponent>
                    ),
                },
                {
                    path: 'Count',
                    element: (
                        <AsyncComponent>
                            <Count init={5} />
                        </AsyncComponent>
                    ),
                },
                {
                    path: 'ClosureTrap',
                    element: (
                        <AsyncComponent>
                            <ClosureTrap />
                        </AsyncComponent>
                    ),
                },
                {
                    path: 'ClassnamesFC',
                    element: (
                        <AsyncComponent>
                            <ClassnamesFC />
                        </AsyncComponent>
                    ),
                },
                {
                    path: 'Context',
                    element: (
                        <AsyncComponent>
                            <Context />
                        </AsyncComponent>
                    ),
                },
                {
                    path: 'CountReducer',
                    element: (
                        <AsyncComponent>
                            <CountReducer />
                        </AsyncComponent>
                    ),
                },
                {
                    path: 'TodoReducer',
                    element: (
                        <AsyncComponent>
                            <TodoReducer />
                        </AsyncComponent>
                    ),
                },
                {
                    path: 'Redux',
                    element: (
                        <AsyncComponent>
                            <Redux />
                        </AsyncComponent>
                    ),
                },
                {
                    path: 'Mobx',
                    element: (
                        <AsyncComponent>
                            <Mobx />
                        </AsyncComponent>
                    ),
                },
                {
                    path: 'TestMockMvc',
                    element: (
                        <AsyncComponent>
                            <TestMockMvc />
                        </AsyncComponent>
                    ),
                },
                {
                    path: 'Dnd-sortable',
                    element: (
                        <AsyncComponent>
                            <DndSortable />
                        </AsyncComponent>
                    ),
                },
                {
                    path: 'ReduxUndo',
                    element: (
                        <AsyncComponent>
                            <ReduxUndo />
                        </AsyncComponent>
                    ),
                },
                {
                    path: 'ChartPie',
                    element: (
                        <AsyncComponent>
                            <ChartPie />
                        </AsyncComponent>
                    ),
                },
                {
                    path: 'ChartBar',
                    element: (
                        <AsyncComponent>
                            <ChartBar />
                        </AsyncComponent>
                    ),
                },
            ],
        },
        {
            path: 'optimize',
            element: (
                <AsyncComponent>
                    <Outlet />
                </AsyncComponent>
            ),
            children: [
                {
                    path: 'UseStateFn',
                    element: (
                        <AsyncComponent>
                            <UseStateFn />
                        </AsyncComponent>
                    ),
                },
                {
                    path: 'ReactMemo',
                    element: (
                        <AsyncComponent>
                            <ReactMemo />
                        </AsyncComponent>
                    ),
                },
            ],
        },
    ],
};
