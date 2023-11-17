import styled from '@emotion/styled';
import { CardData, Todo } from '../types';
import { useCardStore } from '../hooks/useCardStore';

interface TodoProps {
  cardId: CardData['id'];
  todo: Todo;
}

export default function TodoContent({ cardId, todo }: TodoProps) {
  const { toggleTodoChecked } = useCardStore();

  return (
    <li>
      <input type='checkbox' checked={todo.checked} id={todo.id} onChange={() => toggleTodoChecked(cardId, todo.id)} />
      <label htmlFor={todo.id}>
        <Content checked={todo.checked}>{todo.content}</Content>
      </label>
    </li>
  );
}

const Content = styled.span<{ checked: boolean }>`
  text-decoration: ${(props) => (props.checked ? 'line-through' : 'none')};
  text-decoration-color: ${(props) => props.theme.colors.main};
  text-decoration-thickness: 2px;
`;
