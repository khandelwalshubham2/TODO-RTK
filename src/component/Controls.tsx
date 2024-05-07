import { useRef } from "react";
import { useDispatch } from "react-redux";
import { todoListAction } from "../store/todoSlice";

const Controls = () => {
  const dispatch = useDispatch();
  const inputElement = useRef<HTMLInputElement>(null);
  const AddItem = () => {
    if (inputElement.current && inputElement.current.value) {
      dispatch(
        todoListAction.addItem({
          id: Date.now(),
          item: inputElement.current.value,
          isCompleted: false,
        })
      );
      inputElement.current.value = "";
    }
  };

  return (
    <div className="controls">
      <input type="text" className="input-control" ref={inputElement}></input>
      <button type="button" className="add-button pointer" onClick={AddItem}>
        Add
      </button>
    </div>
  );
};

export default Controls;
