import styled from '@emotion/styled';
import AddCardButton from './AddCard';
import { useTodoStore } from '../hooks/useCardStore';
import Button from './Button';

export default function TodoCards() {
  const { cardRepository, createCard, deleteCard, selectedCardId, selectCard } = useTodoStore();

  return (
    <List>
      {cardRepository.map((cardData) => (
        <CardContainer key={cardData.id}>
          <Card selected={selectedCardId === cardData.id} onClick={() => selectCard(cardData.id)}>
            <div>{cardData.title}</div>
            {cardData.todos.map((todo, index) => (
              <div key={index}>{todo}</div>
            ))}
          </Card>
          <DeleteButton id={cardData.id} onClick={() => deleteCard(cardData.id)}>
            ❌
          </DeleteButton>
        </CardContainer>
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

const CardContainer = styled.div`
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

  background-color: aliceblue;
  border-radius: 4px;
  box-shadow: ${(props) => (props.selected ? '0px 0px 4px 3px rgba(255, 111, 15, 0.32)' : '')};
`;

const DeleteButton = styled(Button)`
  position: absolute;
  top: 4px;
  right: 4px;

  font-size: 8px;

  background-color: #ffd0d0;
`;
