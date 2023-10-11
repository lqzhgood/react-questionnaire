import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export type TodoItemType = {
    id: string;
    title: string;
    completed: boolean;
};

const INIT_STATE: TodoItemType[] = [
    { id: nanoid(5), title: '吃饭', completed: false },
    { id: nanoid(5), title: '睡觉', completed: true },
];

export const todoListSlice = createSlice({
    name: 'todoList',
    initialState: INIT_STATE,
    reducers: {
        add(state: TodoItemType[], action: PayloadAction<TodoItemType>) {
            state.push(action.payload);
        },
        del(state: TodoItemType[], action: PayloadAction<TodoItemType>) {
            return state.filter(v => v.id !== action.payload.id);
        },
        update(state: TodoItemType[], action: PayloadAction<Partial<TodoItemType>>) {
            const f = state.find(v => v.id === action.payload.id);
            if (f) Object.assign(f, action.payload);
        },
    },
});

export const { add, del, update } = todoListSlice.actions;
