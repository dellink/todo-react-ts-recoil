import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { ENTER_KEY, ESCAPE_KEY } from "../constants";
import { todoListState } from "../state/atoms";
import { Todo } from "../types";

export default function TodoItem({ todo }: { todo: Todo}) {

  const [todoList, setTodoList] = useRecoilState(todoListState);
  const [editing, setEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const index = todoList.findIndex((listItem) => listItem === todo);

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...todo,
      isCompleted: !todo.isCompleted,
    });

    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);

    setTodoList(newList);
  };

  const handleViewClick = () => setEditing(true);
  const handleKeyDown = ({which}: {which: number}) => {
    if (which === ESCAPE_KEY) {
      setEditing(false);
    } else if (which === ENTER_KEY) {
      const newList = replaceItemAtIndex(todoList, index, {
        ...todo,
        text: editText,
      });
  
      setTodoList(newList);
      setEditing(false);
    }
  };

  const handleChange = ({target: {value}}: {target: {value: string}}) => {
    setEditText(value);
  }
  
  return (
    <li
      className={`${editing ? "editing" : ""} ${todo.isCompleted ? "completed" : ""}`}
      onDoubleClick={handleViewClick}
    >
      <div className="view">
        <input
          autoFocus={true}
          checked={todo.isCompleted}
          className="toggle"
          onChange={toggleItemCompletion}
          type="checkbox"
        />
        <label>{todo.text}</label>
        <button className="destroy" onClick={deleteItem} />
      </div>
      {editing && (
        <input
          className="edit"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          value={editText}
        />
      )}
    </li>
  );
}

function replaceItemAtIndex(arr: Todo[], index: number, newValue: Todo) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr: Todo[], index: number) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}