import styled from '@emotion/styled';
import AddCardButton from './AddCard';
import { useState } from 'react';
import uuid from 'react-uuid';

interface CardData {
  id: string;
  title: string;
}

export default function TodoCards() {
  const [cardRepository, setCardRepository] = useState<CardData[]>([]);
  const createCard = () => {
    setCardRepository((prev) => [...prev, { id: uuid(), title: `TODO ${cardRepository.length + 1}` }]);
  };
  const deleteCard = ({ currentTarget }: React.MouseEvent<HTMLButtonElement>) => {
    setCardRepository((prev) => prev.filter(({ id }) => id !== currentTarget.id));
  };

  return (
    <List>
      {cardRepository.map((cardData) => (
        <Card key={cardData.id}>
          <div>{cardData.title}</div>
          <button id={cardData.id} onClick={deleteCard}>
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

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-height: 160px;
  padding: 12px;

  background-color: aliceblue;
  border-radius: 4px;
`;
