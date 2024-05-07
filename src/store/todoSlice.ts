import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialStateType, todoItemState, updateAction } from "../type";

const initialState: initialStateType = {
  todoList: [],
};
const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    addItem: (state, action: PayloadAction<todoItemState>) => {
      //const newState = state;
      state.todoList = [...state.todoList, action.payload];
    },
    updateTaskStatus: (state, action: PayloadAction<number>) => {
      state.todoList = state.todoList.map((todoItem) =>
        todoItem.id === action.payload
          ? { ...todoItem, isCompleted: !todoItem.isCompleted }
          : todoItem
      );
    },
    updateItem: (state, action: PayloadAction<updateAction>) => {
      state.todoList = state.todoList.map((todoItem) =>
        todoItem.id === action.payload.id
          ? { ...todoItem, item: action.payload.item }
          : todoItem
      );
    },
    deleteItem: (state, action: PayloadAction<number>) => {
      state.todoList = state.todoList.filter(
        (todoItem) => todoItem.id !== action.payload
      );
    },
  },
});

export default todoSlice;

export const todoListAction = todoSlice.actions;
