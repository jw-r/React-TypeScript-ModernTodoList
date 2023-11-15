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
  addTodo: (value: string) => void;
}

export const useTodoStore = create<State & Action>((set) => ({
  cardRepository: [],
  selectedCardId: undefined,

  createCard: () =>
    set((state) => {
      const id = uuid();
      return {
        selectedCardId: id,
        cardRepository: [...state.cardRepository, { id, title: `TODO ${state.cardRepository.length + 1}`, todos: [] }]
      };
    }),

  deleteCard: (targetId) =>
    set((state) => ({
      selectedCardId: state.selectedCardId === targetId ? undefined : state.selectedCardId,
      cardRepository: state.cardRepository.filter(({ id }) => id !== targetId)
    })),

  selectCard: (id) =>
    set((state) => ({
      ...state,
      selectedCardId: id
    })),

  addTodo: (value) =>
    set((state) => ({
      ...state,
      cardRepository: state.cardRepository.map((item) => {
        if (item.id === state.selectedCardId) {
          return { ...item, todos: [...item.todos, value] };
        }
        return item;
      })
    }))
}));
