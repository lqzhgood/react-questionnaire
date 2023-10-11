import React from 'react';
import Demos from '@/demos/index';
import StyledComponents from '@/demos/StyledComponents';
import UseCallback from '@/demos/UseCallback';
import UseMemo from '@/demos/UseMemo';
import UseRef from '@/demos/UseRef';
import List from '@/demos/List';
import Count from '@/demos/Count';
import ClosureTrap from '@/demos/ClosureTrap';
import ClassnamesFC from '@/demos/ClassnamesFC';

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
    ],
};
