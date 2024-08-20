import { useContext } from "react";
import { ToDoListContext } from "../ToDoListContext";

const ToDoListCard = () => {
  const { state } = useContext(ToDoListContext);

  return (
    <div className="todo-list-card">
      {state.list.map((item, index) => (
        <div key={index} className="city-card-item">
          {item}
        </div>
      ))}
    </div>
  );
};

export default ToDoListCard;
