export interface Todo {
  id: string;
  content: string;
}

export interface CardData {
  id: string;
  title: string;
  todos: Todo[];
}
