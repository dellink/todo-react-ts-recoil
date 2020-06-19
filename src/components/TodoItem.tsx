import React from "react";
import { Todo } from "../types";

export default function TodoItem({ item }: { item: Todo}) {
  
  return (
    <li className={`${item.isCompleted ? "completed" : ""}`}>
      <div className="view">
        <input
          type="checkbox"
          className="toggle"
          checked={item.isCompleted}
          autoFocus={true}
        />
        <label>{item.text}</label>
        <button className="destroy" />
      </div>
    </li>
  );
}