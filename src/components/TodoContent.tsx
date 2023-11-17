import styled from '@emotion/styled';
import { Todo } from '../types';
import { useSwitch } from '../hooks/useSwitch';

interface TodoProps {
  todo: Todo;
}

export default function TodoContent({ todo }: TodoProps) {
  const { isOn: checked, toggleSwitch: toggleChecked } = useSwitch(false);

  return (
    <li>
      <input type='checkbox' id={todo.id} onChange={toggleChecked} />
      <label htmlFor={todo.id}>
        <Content checked={checked}>{todo.content}</Content>
      </label>
    </li>
  );
}

const Content = styled.span<{ checked: boolean }>`
  text-decoration: ${(props) => (props.checked ? 'line-through' : 'none')};
  text-decoration-color: ${(props) => props.theme.colors.main};
  text-decoration-thickness: 2px;
`;
