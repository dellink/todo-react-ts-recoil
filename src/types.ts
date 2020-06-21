export type Todo = {
  id: number;
  text: string;
  isCompleted: boolean;
}

export enum FilterState {
  ShowAll = 'Show All',
  ShowCompleted = 'Show Completed',
  ShowUncompleted = 'Show Uncompleted',
}