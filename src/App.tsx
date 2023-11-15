import { Global } from '@emotion/react';
import reset from './Reset';
import TodoList from './components/TodoList';

export default function App() {
  return (
    <div>
      <Global styles={reset} />
      <TodoList />
    </div>
  );
}
