import React, { lazy } from 'react';
import { Outlet } from 'react-router-dom';

import AsyncComponent from '@/components/AsyncComponent';

const Context = lazy(() => import('./Context/index'));
const ClassnamesFC = lazy(() => import('./Styles/ClassnamesFC'));
const ClosureTrap = lazy(() => import('./ClosureTrap'));
const Count = lazy(() => import('./Count'));
const CountReducer = lazy(() => import('./CountReducer'));
const List = lazy(() => import('./List'));
const TestComponent = lazy(() => import('./TestComponent'));
const UseCallback = lazy(() => import('./UseCallback'));
const UseMemo = lazy(() => import('./UseMemo'));
const UseRef = lazy(() => import('./UseRef'));

export default {
    path: 'Base',
    element: <Outlet />,
    children: [
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
            path: 'TestComponent',
            element: (
                <AsyncComponent>
                    <TestComponent />
                </AsyncComponent>
            ),
        },
    ],
};
