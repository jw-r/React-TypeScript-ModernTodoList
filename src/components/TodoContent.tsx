import styled from '@emotion/styled';
import { useState } from 'react';
import { Todo } from '../types';

interface TodoProps {
  todo: Todo;
}

export default function TodoContent({ todo }: TodoProps) {
  const [checked, setChecked] = useState(false);

  return (
    <li>
      <input type='checkbox' id={todo.id} onChange={() => setChecked((prev) => !prev)} />
      <label htmlFor={todo.id}>
        <Content checked={checked}>{todo.content}</Content>
      </label>
    </li>
  );
}

const Content = styled.span<{ checked: boolean }>`
  text-decoration: ${(props) => (props.checked ? 'line-through' : 'none')};
  text-decoration-color: ${(props) => props.theme.colors.main};
`;
