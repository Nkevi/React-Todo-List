import { useRef, useState } from "react";
import "../styles/Todos.css";

type KeyBoardEventType = React.KeyboardEvent<HTMLInputElement>;
type PageEventType = React.MouseEvent<HTMLDivElement>;

export default function Todos({
  category,
  todos,
  onAddTodo,
}: {
  category: string;
  todos: string[];
  onAddTodo: (category: string, todo: string) => void;
}) {
  const [newTodo, setNewTodo] = useState("");
  const addTaskRef = useRef(null);

  function handleAddTodo(e: KeyBoardEventType) {
    if (e.key === "Enter" && newTodo.trim()) {
      onAddTodo(category, newTodo);
      setNewTodo("");
    }
  }

  function handlePageClick(e: PageEventType) {
    
  }

  return (
    <div className="todo-list" onClick={(e) => handlePageClick(e)}>
      <h1 className="title">{category}</h1>
      <div className="add-todo">
        <input
          type="text"
          value={newTodo}
          placeholder="Add Task"
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyDown={(e) => handleAddTodo(e)}
          ref={addTaskRef}
        />
      </div>
      <div className="todos">
        <ul>
          {todos.map((todo: string, index: number) => (
            <li key={index}>
              <input
                type="checkbox"
                title={"task-" + index}
                id={"task-" + index}
              />
              <label htmlFor={"task-" + index}></label>
              <span className="task-text">{todo}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
