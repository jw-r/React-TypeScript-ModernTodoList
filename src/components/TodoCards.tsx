import styled from '@emotion/styled';
import AddCardButton from './AddCard';
import { useTodoStore } from '../hooks/useCardStore';

export default function TodoCards() {
  const { cardRepository, createCard, deleteCard, selectedCardId, selectCard } = useTodoStore();

  return (
    <List>
      {cardRepository.map((cardData) => (
        <Card key={cardData.id} selected={selectedCardId === cardData.id} onClick={() => selectCard(cardData.id)}>
          <div>{cardData.title}</div>
          <button id={cardData.id} onClick={() => deleteCard(cardData.id)}>
            삭제
          </button>
        </Card>
      ))}
      {cardRepository.length < 9 && <AddCardButton onClick={createCard} />}
    </List>
  );
}

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;

  width: 100%;
  padding: 30px;
`;

const Card = styled.div<{ selected: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-height: 160px;
  padding: 12px;

  background-color: aliceblue;
  border-radius: 4px;
  box-shadow: ${(props) => (props.selected ? '0px 0px 4px 3px rgba(255, 111, 15, 0.32)' : '')};
`;
