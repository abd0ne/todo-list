import {ADD_TASK, DELETE_TASK} from '../actions/types';

const initialState = {
  taskList: [],
};

// action here represent the object in actions/task
const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        taskList: state.taskList.concat({
          id: Math.random(),
          text: action.data,
        }),
      };
    case DELETE_TASK:
      return {
        ...state,
        taskList: state.taskList.filter(item => item.id !== action.id),
      };
    default:
      return state;
  }
};

export default taskReducer;
