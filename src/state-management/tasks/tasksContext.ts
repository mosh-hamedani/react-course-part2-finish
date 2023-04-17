import React from 'react';
import { Dispatch } from 'react';
import { Task, TaskAction } from './TasksProvider';

interface TasksContextType {
  tasks: Task[];
  dispatch: Dispatch<TaskAction>;
}

const TasksContext = React.createContext<TasksContextType>(
  {} as TasksContextType
);

export default TasksContext;
