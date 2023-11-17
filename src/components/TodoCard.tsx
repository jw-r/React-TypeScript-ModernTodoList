import styled from '@emotion/styled';
import { useCardStore } from '../hooks/useCardStore';
import { CardData } from '../types';
import TodoContent from './TodoContent';
import { IoTrashOutline } from 'react-icons/io5';
import CardTitle from './CardTitle';

interface TodoCard {
  cardData: CardData;
}

export default function TodoCard({ cardData }: TodoCard) {
  const { deleteCard, selectedCardId, selectCard } = useCardStore();

  return (
    <Wrap key={cardData.id}>
      <Card selected={selectedCardId === cardData.id} onClick={() => selectCard(cardData.id)}>
        <CardTitle cardId={cardData.id} title={cardData.title} />
        {cardData.todos.length > 0 && (
          <Todos>
            {cardData.todos.map((todo) => (
              <TodoContent key={todo.id} todo={todo} />
            ))}
          </Todos>
        )}
      </Card>
      <DeleteButton id={cardData.id} onClick={() => deleteCard(cardData.id)}>
        <IoTrashOutline size={20} id={cardData.id} onClick={() => deleteCard(cardData.id)} />
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

const Todos = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: 100%;

  line-height: 30px;
`;

const DeleteButton = styled.button`
  position: absolute;
  top: 6px;
  right: 4px;
`;
