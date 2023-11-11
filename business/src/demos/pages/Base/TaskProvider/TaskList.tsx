import React, { useState } from 'react';

import { useTasks, useTasksDispatch } from './TasksContext';
import { task } from './types';

const TaskList = () => {
    const tasks = useTasks();
    return (
        <ul>
            {tasks.map(v => (
                <li key={v.id}>
                    <Task task={v} />
                </li>
            ))}
        </ul>
    );
};

type TaskProp = {
    task: task;
};

function Task({ task }: TaskProp) {
    const [isEditing, setIsEditing] = useState(false);
    const dispatch = useTasksDispatch();
    let taskContent;
    if (isEditing) {
        taskContent = (
            <>
                <input
                    value={task.text}
                    onChange={e => {
                        dispatch?.({
                            type: 'changed',
                            task: {
                                ...task,
                                text: e.target.value,
                            },
                        });
                    }}
                />
                <button onClick={() => setIsEditing(false)}>Save</button>
            </>
        );
    } else {
        taskContent = (
            <>
                {task.text}
                <button onClick={() => setIsEditing(true)}>Edit</button>
            </>
        );
    }
    return (
        <label>
            <input
                type='checkbox'
                checked={task.done}
                onChange={e => {
                    dispatch?.({
                        type: 'changed',
                        task: {
                            ...task,
                            done: e.target.checked,
                        },
                    });
                }}
            />
            {taskContent}
            <button
                onClick={() => {
                    dispatch?.({
                        type: 'deleted',
                        id: task.id,
                    });
                }}
            >
                Delete
            </button>
        </label>
    );
}

export default TaskList;
