export type addAction = {
  type: "ADD_ITEM";
  payload: {
    id: number;
    item: string;
    isCompleted: boolean;
  };
};

export type updateAction = {
  id: number;
  item: string;
};

export type deleteAction = {
  type: "DELETE_ITEM";
  payload: {
    id: number;
  };
};

export type taskStatusAction = {
  type: "TASK_STATUS";
  payload: {
    id: number;
  };
};

export type reducerAction =
  | addAction
  | updateAction
  | deleteAction
  | taskStatusAction;

export type todoItemState = {
  id: number;
  item: string;
  isCompleted: boolean;
};

export type initialStateType = {
  todoList: todoItemState[];
};
