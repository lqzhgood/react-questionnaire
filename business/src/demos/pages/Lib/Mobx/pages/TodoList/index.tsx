import React from 'react';
import store from './store';
import TodoListFC from './TodoListFC';
import { observer } from 'mobx-react';

const TodoList = observer(() => {
    return (
        <div>
            <h2>TodoList</h2>
            <p>completed: {store.completedTodosCount}</p>
            <TodoListFC store={store} />
        </div>
    );
});

export default TodoList;
