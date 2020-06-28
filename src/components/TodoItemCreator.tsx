import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { ENTER_KEY } from "../constants";
import { todoListState } from "../state/atoms";
import { Todo } from "../types";

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
      onChange={onChange}
      onKeyDown={handleKeyDown}
      placeholder="What needs to be done?"
      value={inputValue}
    />
  );
}

// utility for creating unique Id
let id = 0;
function getId() {
  return id++;
}