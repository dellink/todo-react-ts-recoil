import React from "react";

export default function TodoList() {
  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
        />
      </header>

      <section className="main">
        <input
          id="toggle-all"
          type="checkbox"
          className="toggle-all"
        />
        <label htmlFor="toggle-all" />
        <ul className="todo-list">
        </ul>
      </section>
    </section>
  );
}