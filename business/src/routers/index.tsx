import React, { lazy } from 'react';
import MainLayout from '../layouts/MainLayout';
import { Navigate, createHashRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import NotFound from '../pages/NotFound';
import ManageLayout from '../layouts/ManageLayout';
import List from '../pages/manage/List';
import Star from '../pages/manage/Star';
import Trash from '../pages/manage/Trash';
import QuestionLayout from '../layouts/QuestionLayout';
const Edit = lazy(() => import(/* webpackChunkName: "Edit" */ '../pages/question/Edit'));
const Stat = lazy(() => import(/* webpackChunkName: "Stat" */ '../pages/question/Stat'));
import type { RouteProps } from '../types/routes';

import { demosRouter } from '../demos/router';
import AsyncComponent from '@/components/AsyncComponent';

export const HOME_PATHNAME = '/';
export const LOGIN_PATHNAME = '/login';
export const REGISTER_PATHNAME = '/register';
export const MANAGER_INDEX_PATHNAME = '/manage';

export const manageRouter = {
    path: 'manage',
    element: <ManageLayout />,
    children: [
        {
            path: '',
            element: <Navigate to='list' replace />,
        },
        {
            name: '我的问卷',
            path: 'list',
            element: <List />,
        },
        {
            name: '星标问卷',
            path: 'star',
            element: <Star />,
        },
        {
            name: '回收站',
            path: 'trash',
            element: <Trash />,
        },
    ],
};

export const routers: RouteProps[] = [
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                name: '首页',
                path: '/',
                element: <Home />,
            },
            {
                name: '登录',
                path: 'login',
                element: <Login />,
            },
            {
                name: '注册',
                path: 'register',
                element: <Register />,
            },
            ...[manageRouter],
            {
                name: '404',
                path: '*',
                element: <NotFound />,
            },
        ],
    },
    {
        path: 'question',
        element: <QuestionLayout />,
        children: [
            {
                name: '编辑',
                path: 'edit/:id',
                element: (
                    <AsyncComponent>
                        <Edit />
                    </AsyncComponent>
                ),
            },
            {
                name: '统计',
                path: 'stat/:id',
                element: (
                    <AsyncComponent>
                        <Stat />
                    </AsyncComponent>
                ),
            },
        ],
    },
    ...[demosRouter],
];

// const router = createBrowserRouter(routers);
const router = createHashRouter(routers);

export default router;
