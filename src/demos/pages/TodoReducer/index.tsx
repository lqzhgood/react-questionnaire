import React, { createContext, useReducer } from 'react';
import InputForm from './InputForm';
import List from './List';
import initialState from './store';
import reducer, { ActionType } from './reducer';

export const TodoContext = createContext({
    state: initialState,
    dispatch: (action: ActionType): void => {
        /**/
    },
});

const TodoReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <TodoContext.Provider value={{ state, dispatch }}>
            <p>TodoReducer</p>

            <List />
            <InputForm />
        </TodoContext.Provider>
    );
};

export default TodoReducer;
