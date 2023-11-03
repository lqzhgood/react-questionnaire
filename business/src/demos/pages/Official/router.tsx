import React, { lazy } from 'react';
import { Outlet } from 'react-router-dom';

import AsyncComponent from '@/components/AsyncComponent';

const Game = lazy(() => import('./Game/Game'));
export default {
    path: 'Official',
    element: <Outlet />,
    children: [
        {
            path: 'Game',
            element: (
                <AsyncComponent>
                    <Game />
                </AsyncComponent>
            ),
        },
    ],
};
