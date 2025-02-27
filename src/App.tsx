import "./styles/App.css";
import Todos from "./components/Todos.tsx";
import Sidebar from "./components/Sidebar.tsx";
import ThemeProvider from "./contexts/ThemeProvider.tsx";
import { useState } from "react";

interface ListCategory {
  [key: string]: string[];
}

const InitialCategories: ListCategory = {
  "My Day": [],
  Important: [],
  Tasks: [],
};

export default function App() {
  const [categories, setCatgories] = useState(["My Day", "Important", "Tasks"]);
  const [todos, setTodos] = useState(InitialCategories);
  const [activeCatogory, setActiveCatogary] = useState("My Day");

  function handleAddTodo(category: string, todo: string) {
    setTodos((prevTodos) => ({
      ...prevTodos,
      [category]: [...prevTodos[category], todo],
    }));
  }

  return (
    <>
      <div className="container">
        <ThemeProvider>
          <Sidebar
            categories={categories}
            activeCategory={activeCatogory}
            onSelectCategory={setActiveCatogary}
          />
          <Todos
            category={activeCatogory}
            todos={todos[activeCatogory]}
            onAddTodo={handleAddTodo}
          />
        </ThemeProvider>
      </div>
    </>
  );
}
