import React, { FC, useState } from 'react';
import './App.css';

import { RouterProvider } from 'react-router-dom';

import routerConfig from './routers';

function App() {
    return <RouterProvider router={routerConfig}></RouterProvider>;
}

export default App;
