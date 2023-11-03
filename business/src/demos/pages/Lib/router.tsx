import React, { lazy } from 'react';
import { Outlet } from 'react-router-dom';

import AsyncComponent from '@/components/AsyncComponent';

const Mobx = lazy(() => import('./Mobx'));
const Redux = lazy(() => import('./Redux'));
const ReduxUndo = lazy(() => import('./ReduxUndo'));
const TodoReducer = lazy(() => import('./TodoReducer/index'));
const ChartPie = lazy(() => import('./ChartPie'));
const ChartBar = lazy(() => import('./ChartBar'));
const DndSortable = lazy(() => import('./Dnd-sortable'));
const StyledComponents = lazy(() => import('./StyledComponents'));
const TestMockMvc = lazy(() => import('./TestMockMvc'));

export default {
    path: 'Lib',
    element: <Outlet />,
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
};
