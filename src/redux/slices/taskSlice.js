import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask: (state, action) => {state.tasks.push({id: state.tasks.length, name: action.payload,done: false,});
    },
    editTask: (state, action) => {
      
      const taskToEdit = state.tasks.find((task) => task.id === action.payload.id);
      
      if (taskToEdit) {
        taskToEdit.name = action.payload.name;
      }
    },
    
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    
    markTaskAsDone: (state, action) => {
      const task = state.tasks.find(task => task.id === action.payload);
      if (task) {
        task.done = true;
      }
    },
  },
});

export const { addTask, deleteTask, markTaskAsDone,editTask } = taskSlice.actions;
export default taskSlice.reducer;
