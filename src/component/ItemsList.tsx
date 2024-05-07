import Item from "./Item";
import { useSelector } from "react-redux";
import { RootState } from "../store/index";

const ItemsList = () => {
  const todoItems = useSelector((state: RootState) => state.todo.todoList);
  return (
    <>
      {todoItems.map((todoItem) => (
        <Item key={todoItem.id} todoItem={todoItem}></Item>
      ))}
    </>
  );
};

export default ItemsList;
