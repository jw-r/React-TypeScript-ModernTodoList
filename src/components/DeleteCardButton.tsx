import styled from '@emotion/styled';
import { useCardStore } from '../hooks/useCardStore';
import { IoTrashOutline } from 'react-icons/io5';
import { CardData } from '../types';

interface DeleteCardButton {
  cardId: CardData['id'];
}

export default function DeleteCardButton({ cardId }: DeleteCardButton) {
  const { deleteCard } = useCardStore();

  return (
    <DeleteButton onClick={() => deleteCard(cardId)}>
      <IoTrashOutline size={20} />
    </DeleteButton>
  );
}

const DeleteButton = styled.button`
  position: absolute;
  top: 6px;
  right: 4px;
`;
