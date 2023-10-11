import React from 'react';
import Basic from './pages/Basic';
import TodoList from './pages/TodoList';

const Mobx = () => {
    return (
        <div>
            <h1>Mobx</h1>
            <Basic />
            <hr style={{ margin: '20px 0' }} />
            <TodoList />
        </div>
    );
};

export default Mobx;
