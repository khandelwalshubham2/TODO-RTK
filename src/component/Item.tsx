import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FaRegSave } from "react-icons/fa";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { todoListAction } from "../store/todoSlice";

type ItemProps = {
  todoItem: { item: string; id: number; isCompleted: boolean };
};

const Item = ({ todoItem }: ItemProps) => {
  const [item, setItem] = useState(todoItem.item);
  const [editItem, setEditItem] = useState(false);
  const dispatch = useDispatch();
  const itemElement = useRef<HTMLInputElement>(null);

  const updateTask = () => {
    dispatch(todoListAction.updateTaskStatus(todoItem.id));
    //console.log(todoItem);
  };

  const update = () => {
    dispatch(
      todoListAction.updateItem({
        id: todoItem.id,
        item: item,
      })
    );
    setEditItem(false);
  };

  const removeItem = () => {
    dispatch(todoListAction.deleteItem(todoItem.id));
  };

  return (
    <div className="item-box">
      <input
        type="checkbox"
        className="control-check"
        checked={todoItem.isCompleted}
        onChange={updateTask}
      />
      <input
        type="text"
        className={`list-input ${todoItem.isCompleted ? "line-cut" : ""}`}
        readOnly={!editItem}
        value={item}
        ref={itemElement}
        onChange={(e) => setItem(e.target.value)}
      />
      {todoItem.isCompleted ? (
        ""
      ) : editItem ? (
        <FaRegSave
          onClick={update}
          className={`icon-size ${
            todoItem.isCompleted ? "not-allowed" : "pointer"
          }`}
        ></FaRegSave>
      ) : (
        <MdModeEdit
          onClick={() => {
            setEditItem(true);
            itemElement.current?.focus();
          }}
          className={`icon-size ${
            todoItem.isCompleted ? "not-allowed" : "pointer"
          }`}
        ></MdModeEdit>
      )}
      <MdDelete className="icon-size pointer" onClick={removeItem}></MdDelete>
    </div>
  );
};

export default Item;
