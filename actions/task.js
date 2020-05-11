import {ADD_TASK, DELETE_TASK} from './types';

export const addTask = task => ({
  type: ADD_TASK,
  data: task,
});

export const deleteTask = id => ({
  type: DELETE_TASK,
  id: id,
});
