import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { CardData, Todo } from '../types';
import uuid from 'react-uuid';

interface State {
  cardRepository: CardData[];
  selectedCardId?: CardData['id'];
}

interface Action {
  createCard: () => void;
  deleteCard: (id: CardData['id']) => void;
  clearCard: () => void;
  selectCard: (id: CardData['id']) => void;
  addTodo: (value: string) => void;
  changeTitle: (id: CardData['id'], value: string) => void;
  toggleTodoChecked: (cardId: CardData['id'], todoId: Todo['id']) => void;
}

export const useCardStore = create<State & Action>()(
  persist(
    (set) => ({
      cardRepository: [],
      selectedCardId: undefined,

      createCard: () =>
        set((state) => {
          const id = uuid();
          return {
            selectedCardId: id,
            cardRepository: [
              ...state.cardRepository,
              { id, title: `TODO ${state.cardRepository.length + 1}`, todos: [] }
            ]
          };
        }),

      deleteCard: (targetId) =>
        set((state) => ({
          selectedCardId: state.selectedCardId === targetId ? undefined : state.selectedCardId,
          cardRepository: state.cardRepository.filter(({ id }) => id !== targetId)
        })),

      clearCard: () =>
        set(() => ({
          selectedCardId: undefined,
          cardRepository: []
        })),

      selectCard: (id) =>
        set((state) => {
          if (state.selectedCardId === id) return state;

          return {
            ...state,
            selectedCardId: id
          };
        }),

      changeTitle: (id, value) =>
        set((state) => ({
          ...state,
          cardRepository: state.cardRepository.map((item) => {
            if (item.id === id) {
              return { ...item, title: value };
            }
            return item;
          })
        })),

      addTodo: (value) =>
        set((state) => ({
          ...state,
          cardRepository: state.cardRepository.map((item) => {
            if (item.id !== state.selectedCardId) return item;

            return { ...item, todos: [...item.todos, { id: uuid(), content: value, checked: false }] };
          })
        })),

      toggleTodoChecked: (cardId: CardData['id'], todoId: Todo['id']) =>
        set((state) => ({
          ...state,
          cardRepository: state.cardRepository.map((item) => {
            if (item.id !== cardId) return item;

            return {
              ...item,
              todos: item.todos.map((todo) => {
                if (todo.id !== todoId) return todo;

                return { ...todo, checked: !todo.checked };
              })
            };
          })
        }))
    }),
    {
      name: 'cardRepository',
      storage: createJSONStorage(() => localStorage)
    }
  )
);
