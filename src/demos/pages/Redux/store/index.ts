import { configureStore } from '@reduxjs/toolkit';

import { countSlice } from './count';
import { TodoItemType, todoListSlice } from './todoList';

export type StateType = {
    count: number;
    todoList: TodoItemType[];
};

export default configureStore({
    reducer: {
        // module
        count: countSlice.reducer,
        todoList: todoListSlice.reducer,
    },
});
