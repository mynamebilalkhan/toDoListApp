import { useContext, useState } from "react";
import { ToDoListContext } from "../ToDoListContext";

const ToDoListInput = () => {
  const [list, setList] = useState("");
  const { dispatch } = useContext(ToDoListContext);

  const handleAddList = () => {
    if (list) {
      dispatch({ type: "ADD_ITEM", payload: list });
      setList("");
    }
  };

  return (
    <div className="todo-list-input">
      <input
        type="text"
        value={list}
        onChange={(e) => setList(e.target.value)}
        placeholder="Enter into list"
      />
      <button onClick={handleAddList}>Add into List</button>
    </div>
  );
};

export default ToDoListInput;
