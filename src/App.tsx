import { Global, ThemeProvider } from '@emotion/react';
import reset from './styles/reset';
import TodoList from './components/TodoList';
import { theme } from './styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={reset} />
      <TodoList />
    </ThemeProvider>
  );
}
