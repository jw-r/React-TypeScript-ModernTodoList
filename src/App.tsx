import { Global, ThemeProvider } from '@emotion/react';
import TodoList from './components/TodoList';
import { theme } from './styles/theme';
import { baseStyle } from './styles/baseStyle';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={baseStyle} />
      <TodoList />
    </ThemeProvider>
  );
}
