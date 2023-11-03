import { configureStore } from '@reduxjs/toolkit';
import undoable, { StateWithHistory, excludeAction } from 'redux-undo';
import { TodoItemType, todoListSlice } from '../Redux/store/todoList';
import { countSlice } from '../Redux/store/count';

export type StateType = {
    count: number;
    todoList: StateWithHistory<TodoItemType[]>;
};

export default configureStore({
    reducer: {
        count: countSlice.reducer,
        todoList: undoable(todoListSlice.reducer, {
            limit: 20,
            filter: excludeAction(['todoList/update']),
        }),
    },
});
