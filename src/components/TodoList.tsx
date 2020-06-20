import React from "react";
import { useRecoilValue } from "recoil";
import { todoListState } from "../atoms";
import { Todo } from "../types";
import TodoItem from "./TodoItem";
import { TodoItemCreator } from "./TodoItemCreator";

export default function TodoList() {
  const todoList = useRecoilValue(todoListState);
  
  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <TodoItemCreator />
      </header>

      <section className="main">
        <input
          id="toggle-all"
          type="checkbox"
          className="toggle-all"
        />
        <label htmlFor="toggle-all" />
        
        <ul className="todo-list">
          {todoList.map((todoItem: Todo) => (
            <TodoItem key={todoItem.id} todo={todoItem} />
          ))}
        </ul>
      </section>
    </section>
  );
}