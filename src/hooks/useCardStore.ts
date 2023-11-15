import { create } from 'zustand';
import { CardData } from '../types';
import uuid from 'react-uuid';

interface State {
  cardRepository: CardData[];
  selectedCardId?: CardData['id'];
}

interface Action {
  createCard: () => void;
  deleteCard: (id: CardData['id']) => void;
  selectCard: (id: CardData['id']) => void;
}

export const useTodoStore = create<State & Action>((set) => ({
  cardRepository: [],
  selectedCardId: undefined,
  createCard: () =>
    set((state) => ({
      ...state,
      cardRepository: [...state.cardRepository, { id: uuid(), title: `TODO ${state.cardRepository.length + 1}` }]
    })),
  deleteCard: (targetId) =>
    set((state) => ({
      ...state,
      cardRepository: state.cardRepository.filter(({ id }) => id !== targetId)
    })),
  selectCard: (id) =>
    set((state) => ({
      ...state,
      selectedCardId: id
    }))
}));
