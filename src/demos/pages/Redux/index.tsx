import React from 'react';
import { Provider } from 'react-redux';
import store from './store/index';
import Count from './pages/Count';
import TodoList from './pages/TodoList';

const Redux = () => {
    return (
        <Provider store={store}>
            <Count />
            <hr style={{ margin: '20px 0' }} />
            <TodoList />
        </Provider>
    );
};

export default Redux;
