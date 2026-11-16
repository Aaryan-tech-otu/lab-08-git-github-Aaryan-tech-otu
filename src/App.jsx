import { useState } from "react";
import TodoList from "./TodoList.jsx";
import AddTodoForm from "./AddTodoForm.jsx";

const INITIAL_TODOS = [
  { id: 1, text: "Read the lab README", done: true },
  { id: 2, text: "Build the to-do list", done: false },
  { id: 3, text: "Add one of your own", done: false },
];

export default function App() {
  const [todos, setTodos] = useState(INITIAL_TODOS);
  const [filter, setFilter] = useState("all");

  function addTodo(text) {
    const trimmedText = text.trim();
    if (!trimmedText) return;

    setTodos((currentTodos) => [
      ...currentTodos,
      {
        id: Date.now() + Math.random(),
        text: trimmedText,
        done: false,
      },
    ]);
  }

  function toggleTodo(id) {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    );
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
  }

  const visibleTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.done;
    if (filter === "completed") return todo.done;
    return true;
  });

  const total = todos.length;
  const done = todos.filter((todo) => todo.done).length;

  return (
    <main className="app">
      <h1>My To-Dos</h1>
      <AddTodoForm onAdd={addTodo} />

      <div className="filter-bar">
        <button type="button" onClick={() => setFilter("all")}>
          All
        </button>
        <button type="button" onClick={() => setFilter("active")}>
          Active
        </button>
        <button type="button" onClick={() => setFilter("completed")}>
          Completed
        </button>
      </div>

      <TodoList
        todos={visibleTodos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
      />
      <p>
        {done} of {total} done
      </p>
    </main>
  );
}
