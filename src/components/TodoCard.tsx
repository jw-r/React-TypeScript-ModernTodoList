import styled from '@emotion/styled';
import { useTodoStore } from '../hooks/useCardStore';
import { CardData } from '../types';
import Button from './Button';
import TodoContent from './TodoContent';

interface TodoCard {
  cardData: CardData;
}

export default function TodoCard({ cardData }: TodoCard) {
  const { deleteCard, selectedCardId, selectCard } = useTodoStore();

  return (
    <Wrap key={cardData.id}>
      <Card selected={selectedCardId === cardData.id} onClick={() => selectCard(cardData.id)}>
        <CardTitle>{cardData.title}</CardTitle>
        {cardData.todos.length > 0 && (
          <Todos>
            {cardData.todos.map((todo) => (
              <TodoContent key={todo.id} todo={todo} />
            ))}
          </Todos>
        )}
      </Card>
      <DeleteButton id={cardData.id} onClick={() => deleteCard(cardData.id)}>
        ❌
      </DeleteButton>
    </Wrap>
  );
}

const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
`;

const Card = styled.div<{ selected: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-height: 160px;
  padding: 12px;

  background-color: ${(props) => props.theme.colors.card_background};
  border-radius: 4px;
  box-shadow: ${(props) => (props.selected ? props.theme.shadow.main : '')};
`;

const CardTitle = styled.div`
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 600;
`;

const Todos = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: 100%;

  line-height: 30px;
`;

const DeleteButton = styled(Button)`
  position: absolute;
  top: 4px;
  right: 4px;

  font-size: 8px;

  background-color: #ffd0d0;
`;
