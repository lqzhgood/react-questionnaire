import React, { lazy } from 'react';
import { Outlet } from 'react-router-dom';

import AsyncComponent from '@/components/AsyncComponent';

const ReactMemo = lazy(() => import('./ReactMemo'));
const UseStateFn = lazy(() => import('./UseStateFn'));
export default {
    path: 'Optimize',
    element: <Outlet />,
    children: [
        {
            path: 'ReactMemo',
            element: (
                <AsyncComponent>
                    <ReactMemo />
                </AsyncComponent>
            ),
        },

        {
            path: 'UseStateFn',
            element: (
                <AsyncComponent>
                    <UseStateFn />
                </AsyncComponent>
            ),
        },
    ],
};
