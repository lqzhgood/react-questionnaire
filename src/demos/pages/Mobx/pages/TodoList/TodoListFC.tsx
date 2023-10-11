import React, { FC, useState } from 'react';
import { ObservableTodoListStore } from './store';
import { observer } from 'mobx-react';
import { Space } from 'antd';

type Props = {
    store: ObservableTodoListStore;
};

const TodoListFC = observer((props: Props) => {
    const { store } = props;
    const [text, setText] = useState('');

    const todoList = store.list;

    return (
        <>
            {todoList.map(todo => {
                const { id, title, completed } = todo;
                return (
                    <li key={id}>
                        <Space>
                            <input
                                type='checkbox'
                                checked={completed}
                                onChange={e => todo.update({ completed: !completed })}
                            />
                            <span style={completed ? { textDecoration: 'line-through', opacity: 0.5 } : {}}>
                                {title}
                            </span>
                            <button onClick={() => store.del(id)}>x</button>
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
                    store.add(text);
                    setText('');
                }}
            />
        </>
    );
});

export default TodoListFC;
