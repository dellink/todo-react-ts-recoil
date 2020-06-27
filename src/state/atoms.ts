import { atom, atomFamily } from "recoil";
import { FilterState, Todo } from '../types';

export const todoListState = atom<Todo[]>({
  key: 'todoListState',
  default: [],
});

export const todoListFilterState = atomFamily<FilterState, string>({
  key: 'todoListFilterState',
  default: pathname => {
    if (pathname === '/completed') {
      return FilterState.ShowCompleted;
    } else if (pathname === '/active') {
      return FilterState.ShowUncompleted;
    } else {
      return FilterState.ShowAll;
    }
  },
});