import React from "react";
import { useLocation } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from "recoil";
import { todoListFilterState, todoListState } from "../state/atoms";
import { filteredTodoListState, todoListStatsState } from "../state/selectors";
import { FilterState, Todo } from "../types";
import TodoItem from "./TodoItem";
import { TodoItemCreator } from "./TodoItemCreator";

export default function TodoList() {
  let location = useLocation();
  const filteredTodoList = useRecoilValue(filteredTodoListState(location.pathname));
  const filterState = useRecoilValue(todoListFilterState(location.pathname));

  const {
    isAllCompleted,
    totalCompletedNum,
    totalUncompletedNum,
  } = useRecoilValue(todoListStatsState);
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const onToggleAll = () => {
    setTodoList(todoList.map(todo => ({...todo, isCompleted: !isAllCompleted})));
  };

  const onClearCompleted = () => {
    setTodoList(todoList.map(todo => ({...todo, isCompleted: false})));
  }
  
  return (
    <>
      <header className="header">
        <h1>todos</h1>
        <TodoItemCreator />
      </header>

      {todoList.length > 0 && (
        <section className="main">
          <input
            checked={isAllCompleted}
            className="toggle-all"
            id="toggle-all"
            onChange={onToggleAll}
            type="checkbox"
          />
          <label htmlFor="toggle-all" />
          
          <ul className="todo-list">
            {filteredTodoList.map((todoItem: Todo) => (
              <TodoItem key={todoItem.id} todo={todoItem} />
            ))}
          </ul>
        </section>
      )}
      
      {todoList.length > 0 && (
        <footer className="footer">
          <span className="todo-count">
            <strong>{totalUncompletedNum}</strong> items left
          </span>
          <ul className="filters">
						<li>
              <a href="#/" className={filterState === FilterState.ShowAll ? 'selected' : ''}>All</a>
            </li>
						<li>
              <a href="#/active" className={filterState === FilterState.ShowUncompleted ? 'selected' : ''}>Active</a>
            </li>
						<li>
              <a href="#/completed" className={filterState === FilterState.ShowCompleted ? 'selected' : ''}>Completed</a>
            </li>
					</ul>
          {totalCompletedNum > 0 && (
            <button className="clear-completed" onClick={onClearCompleted}>
              Clear completed
            </button>
          )}
        </footer>
      )}
    </>
  );
}