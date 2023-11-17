import styled from '@emotion/styled';
import AddCardButton from './AddCard';
import { useCardStore } from '../hooks/useCardStore';
import TodoCard from './TodoCard';
import { MAX_CARD_LENGTH } from '../constants';

export default function TodoCards() {
  const { cardRepository, createCard } = useCardStore();

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
  margin-top: 160px;
  padding: 24px;

  @media screen and (max-width: 870px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 570px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
