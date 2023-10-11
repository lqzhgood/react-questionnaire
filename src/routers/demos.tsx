import React from 'react';
import Demos from '@/demos/pages/index';
import StyledComponents from '@/demos/pages/StyledComponents';
import UseCallback from '@/demos/pages/UseCallback';
import UseMemo from '@/demos/pages/UseMemo';
import UseRef from '@/demos/pages/UseRef';
import List from '@/demos/pages/List';
import Count from '@/demos/pages/Count';
import ClosureTrap from '@/demos/pages/ClosureTrap';
import ClassnamesFC from '@/demos/pages/ClassnamesFC';
import Context from '@/demos/pages/Context/index';

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
    ],
};
