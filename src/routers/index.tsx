import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { RouteObject, createBrowserRouter } from 'react-router-dom';
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

export const manageRouter = {
    path: 'manage',
    element: <ManageLayout />,
    children: [
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

export const routers = [
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: 'login',
                element: <Login />,
            },
            {
                path: 'register',
                element: <Register />,
            },
            ...[manageRouter],
            {
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
                path: 'edit/:id',
                element: <Edit />,
            },
            {
                path: 'stat/:id',
                element: <Stat />,
            },
        ],
    },
] as RouteObject[];

const router = createBrowserRouter(routers);

export default router;
