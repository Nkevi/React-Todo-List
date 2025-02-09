import { useState } from "react";
import "../styles/Todos.css";

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

  function handleAddTodo() {
    if (newTodo.trim()) {
      onAddTodo(category, newTodo);
      setNewTodo("");
    }
  }

  return (
    <>
      <div className="todo-list">
        <h1 className="title">Test</h1>
        <ul>
          {todos.map((todo: string, index: number) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
        <div className="add-todo">
          <input
            type="text"
            value={newTodo}
            placeholder="Add Todo"
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button
            onClick={handleAddTodo}
            type="button"
            title="Add Todo"
          ></button>
        </div>
      </div>
    </>
  );
}
