import React, { useContext, createContext, useReducer } from 'react';
import { action, task } from './types';

const initialTasks = [
    { id: 0, text: 'Philosopher’s Path', done: true },
    { id: 1, text: 'Visit the temple', done: false },
    { id: 2, text: 'Drink matcha', done: false },
];

const TasksContext = createContext<task[]>([]);
const TasksDispatchContext = createContext<React.Dispatch<action> | null>(null);

type PropsType = {
    children: JSX.Element | JSX.Element[];
};

export const TasksProvider = ({ children }: PropsType) => {
    const [task, dispatch] = useReducer(tasksReducer, initialTasks);

    return (
        <TasksContext.Provider value={task}>
            <TasksDispatchContext.Provider value={dispatch}>{children}</TasksDispatchContext.Provider>
        </TasksContext.Provider>
    );
};

function tasksReducer(tasks: task[], action: action) {
    switch (action.type) {
        case 'added': {
            return [
                ...tasks,
                {
                    id: action.id,
                    text: action.text,
                    done: false,
                },
            ];
        }
        case 'changed': {
            return tasks.map(t => {
                if (t.id === action.task.id) {
                    return action.task;
                } else {
                    return t;
                }
            });
        }
        case 'deleted': {
            return tasks.filter(t => t.id !== action.id);
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

export function useTasks() {
    return useContext(TasksContext);
}

export function useTasksDispatch() {
    return useContext(TasksDispatchContext);
}
