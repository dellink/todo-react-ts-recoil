import { selector, selectorFamily } from "recoil";
import { FilterState, Todo } from "../types";
import { todoListFilterState, todoListState } from "./atoms";

export const todoListStatsState = selector({
  key: 'todoListStatsState',
  get: ({get}) => {
    const todoList = get(todoListState);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter((item) => item.isCompleted).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;
    const isAllCompleted = totalNum === totalCompletedNum;

    return {
      isAllCompleted,
      totalCompletedNum,
      totalUncompletedNum,
    };
  },
});

export const filteredTodoListState = selectorFamily<Todo[], string>({
  key: 'filteredTodoListState',
  get: (pathname: string) => ({get}) => {
    const filter = get(todoListFilterState(pathname));
    const list = get(todoListState);

    switch (filter) {
      case FilterState.ShowCompleted:
        return list.filter((item) => item.isCompleted);
      case FilterState.ShowUncompleted:
        return list.filter((item) => !item.isCompleted);
      default:
        return list;
    }
  },
});