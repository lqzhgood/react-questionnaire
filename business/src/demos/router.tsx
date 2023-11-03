import React, { lazy } from 'react';

import AsyncComponent from '@/components/AsyncComponent';

const Demos = lazy(() => import('./index'));

import BaseRouter from './pages/Base/router';
import LibRouter from './pages/Lib/router';
import OptimizeRouter from './pages/Optimize/router';
import OfficialRouter from './pages/Official/router';

export const demosRouter = {
    path: 'demos',
    element: (
        <AsyncComponent>
            <Demos />
        </AsyncComponent>
    ),
    children: [BaseRouter, LibRouter, OptimizeRouter, OfficialRouter],
};
