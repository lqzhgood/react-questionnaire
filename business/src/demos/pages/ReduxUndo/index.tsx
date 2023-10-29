import React from 'react';
import { Provider } from 'react-redux';
import Count from '../Redux/pages/Count';

import store from './store';
import TodoList from './TodoList';

const ReduxUndo = () => {
    return (
        <Provider store={store}>
            <Count />
            <hr style={{ margin: '20px 0' }} />
            <TodoList />
        </Provider>
    );
};

export default ReduxUndo;
