import { useState } from "react";

export default function AddTodoForm({ onAdd }) {
  const [text, setText] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const value = text.trim();

    if (!value) return;

    onAdd(value);
    setText("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="Add a todo…"
      />
      <button type="submit">Add</button>
    </form>
  );
}
