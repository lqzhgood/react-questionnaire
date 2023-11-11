import React, { useState } from 'react';

import { useTasksDispatch } from './TasksContext';

const AddTask = () => {
    const [text, setText] = useState('');

    const dispatch = useTasksDispatch();

    return (
        <div>
            <input type='text' value={text} onChange={e => setText(e.target.value)} />
            <button
                disabled={!text.trim()}
                onClick={() => {
                    if (!text.trim()) return;
                    setText('');
                    dispatch?.({
                        type: 'added',
                        id: Date.now(),
                        text: text,
                    });
                }}
            >
                Add
            </button>
        </div>
    );
};

export default AddTask;
