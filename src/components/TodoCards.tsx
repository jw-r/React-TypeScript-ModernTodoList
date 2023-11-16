import styled from '@emotion/styled';
import AddCardButton from './AddCard';
import { useTodoStore } from '../hooks/useCardStore';
import TodoCard from './TodoCard';
import { MAX_CARD_LENGTH } from '../constants';

export default function TodoCards() {
  const { cardRepository, createCard } = useTodoStore();

  return (
    <Wrap>
      {cardRepository.map((cardData) => (
        <TodoCard key={cardData.id} cardData={cardData} />
      ))}
      {cardRepository.length < MAX_CARD_LENGTH && <AddCardButton onClick={createCard} />}
    </Wrap>
  );
}

const Wrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;

  width: 100%;
  padding: 30px;
`;
