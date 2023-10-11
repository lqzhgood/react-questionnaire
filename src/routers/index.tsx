import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import NotFound from '../pages/NotFound';
import ManageLayout from '../layouts/ManageLayout';
import List from '../pages/manage/List';
import Star from '../pages/manage/Star';
import Trash from '../pages/manage/Trash';
import QuestionLayout from '../layouts/QuestionLayout';
import Edit from '../pages/question/Edit';
import Stat from '../pages/question/Stat';
import type { RouteProps } from '../types/routes';

import { demosRouter } from './demos';

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
                element: <Edit />,
            },
            {
                name: '统计',
                path: 'stat/:id',
                element: <Stat />,
            },
        ],
    },
    ...[demosRouter],
];

const router = createBrowserRouter(routers);

export default router;
