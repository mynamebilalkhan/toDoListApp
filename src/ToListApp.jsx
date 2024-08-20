import ToDoListCard from "./components/ToDoListCard";
import ToDoListInput from "./components/ToDoListInput";
import { ToDoListProvider } from "./ToDoListContext";

const ToListApp = () => {
  return (
    <ToDoListProvider>
      <div className="app-container">
        <h1>To Do List App</h1>
      </div>
      <ToDoListInput />
      <ToDoListCard />
    </ToDoListProvider>
  );
};

export default ToListApp;
