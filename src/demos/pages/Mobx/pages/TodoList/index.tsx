import React from 'react';
import store from './store';
import TodoListFC from './TodoListFC';

const TodoList = () => {
    return (
        <div>
            <h2>TodoList</h2>
            <TodoListFC store={store} />
        </div>
    );
};

export default TodoList;
