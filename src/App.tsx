import { Global } from '@emotion/react';
import reset from './reset';
import TodoList from './components/TodoList';

export default function App() {
  return (
    <div>
      <Global styles={reset} />
      <TodoList />
    </div>
  );
}
