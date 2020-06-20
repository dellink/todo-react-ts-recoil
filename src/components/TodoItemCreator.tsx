import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../atoms";
import { Todo } from "../types";

const ENTER_KEY = 13;

export function TodoItemCreator() {
  const [inputValue, setInputValue] = useState('');
  const setTodoList = useSetRecoilState<Todo[]>(todoListState);

  const handleKeyDown = ({which}: {which: number}) => {
    if (which === ENTER_KEY) {
      setTodoList((oldTodoList: Todo[]) => [
        ...oldTodoList,
        {
          id: getId(),
          text: inputValue,
          isCompleted: false,
        },
      ]);
      setInputValue('');
    }
  };

  const onChange = ({target: {value}} : {target: {value: string}}) => {
    setInputValue(value);
  };

  return (
    <input
      className="new-todo"
      placeholder="What needs to be done?"
      onKeyDown={handleKeyDown}
      value={inputValue}
      onChange={onChange}
    />
  );
}

// utility for creating unique Id
let id = 0;
function getId() {
  return id++;
}