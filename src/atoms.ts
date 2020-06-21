import { atom } from "recoil";

import { Todo, FilterState } from './types';

export const todoListState = atom<Todo[]>({
  key: 'todoListState',
  default: [],
});

export const todoListFilterState = atom({
  key: 'todoListFilterState',
  default: FilterState.ShowAll,
});