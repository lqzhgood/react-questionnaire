import React from 'react';

import { TasksProvider } from './TasksContext';
import AddTask from './AddTask';
import TaskList from './TaskList';

const App = () => {
    return (
        <TasksProvider>
            <h1>ToDo List</h1>
            <AddTask />
            <TaskList />
        </TasksProvider>
    );
};

export default App;
