import React, { useContext } from 'react';

import { TodoContext } from './index';

const List = () => {
    const { state, dispatch } = useContext(TodoContext);

    return (
        <ul>
            {state.map(todo => (
                <li key={todo.id}>
                    <span>{todo.title}</span>
                    <button onClick={() => dispatch({ type: 'del', payload: todo.id })}>x</button>
                </li>
            ))}
        </ul>
    );
};

export default List;
