export interface Todo {
  id: string;
  content: string;
  checked: boolean;
}

export interface CardData {
  id: string;
  title: string;
  todos: Todo[];
}
