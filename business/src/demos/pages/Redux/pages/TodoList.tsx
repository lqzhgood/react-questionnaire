import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StateType } from '../store';
import { TodoItemType, add, del, update } from '../store/todoList';
import { Space } from 'antd';
import { nanoid } from 'nanoid';

const TodoList = () => {
    const todoList = useSelector<StateType, TodoItemType[]>(state => state.todoList);

    const dispatch = useDispatch();

    const [text, setText] = useState('');

    return (
        <>
            <h2>Todo List</h2>
            {todoList.map(todo => {
                const { id, title, completed } = todo;

                return (
                    <li key={id}>
                        <Space>
                            <input
                                type='checkbox'
                                checked={completed}
                                onChange={() => dispatch(update({ id, completed: !completed }))}
                            />
                            <span style={completed ? { textDecoration: 'line-through', opacity: 0.5 } : {}}>
                                {title}
                            </span>
                            <button onClick={() => dispatch(del(todo))}>x</button>
                        </Space>
                    </li>
                );
            })}
            <input
                type='text'
                value={text}
                placeholder='enter to add todo'
                onChange={e => setText(e.target.value)}
                onKeyDown={e => {
                    if (e.key !== 'Enter') return;
                    if (!text.trim()) return;
                    dispatch(add({ id: nanoid(5), title: text, completed: false }));
                    setText('');
                }}
            />
        </>
    );
};

export default TodoList;
