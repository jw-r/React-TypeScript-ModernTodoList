import styled from '@emotion/styled';
import { useCardStore } from '../hooks/useCardStore';
import { CardData } from '../types';
import TodoContent from './TodoContent';
import CardTitle from './CardTitle';
import DeleteCardButton from './DeleteCardButton';

interface TodoCard {
  cardData: CardData;
}

export default function TodoCard({ cardData }: TodoCard) {
  const { selectedCardId, selectCard } = useCardStore();
  const { id: cardId, title, todos } = cardData;

  return (
    <Wrap key={cardId}>
      <Card selected={selectedCardId === cardId} onClick={() => selectCard(cardId)}>
        <CardTitle cardId={cardId} title={title} />
        {todos.length > 0 && (
          <Todos>
            {todos.map((todo) => (
              <TodoContent key={todo.id} cardId={cardId} todo={todo} />
            ))}
          </Todos>
        )}
      </Card>
      <DeleteCardButton cardId={cardId} />
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

const Todos = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: 100%;

  line-height: 30px;
`;
