import React, { FC, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Count from './demo/Count';
import List from './demo/List';
import UseRefFC from './demo/UseRef';
import UseMemo from './demo/UseMemo.demo';
import UseCallback from './demo/UseCallback';

function App() {
    const count = useState();
    return (
        <div className='App'>
            {/* <List /> */}
            {/* <Count init={100} /> */}
            {/* <UseRefFC /> */}
            {/* <UseMemo /> */}
            <UseCallback />
        </div>
    );
}

export default App;
