import styled from '@emotion/styled';
import Button from './Button';
import React, { useState } from 'react';
import { useTodoStore } from '../hooks/useCardStore';

export default function TodoHandler() {
  const { cardRepository, selectedCardId, addTodo } = useTodoStore();
  const [value, setValue] = useState('');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (cardRepository.length < 1) {
      alert('먼저 카드를 생성해주세요');
      return;
    }

    if (!selectedCardId) {
      alert('할일을 추가할 카드를 선택해주세요');
      return;
    }

    addTodo(value);
    setValue('');
  };

  return (
    <Wrap>
      <Form onSubmit={onSubmit}>
        <Input value={value} onChange={(e) => setValue(e.target.value)} placeholder='할일을 추가해주세요' />
        <Actions>
          <Button>추가</Button>
        </Actions>
      </Form>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: inline-block;

  margin-top: 16px;
  padding: 30px 20px;

  border-radius: 6px;
  box-shadow: 0px 0px 4px 3px rgba(255, 111, 15, 0.32);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  width: 280px;
`;

const Input = styled.input`
  padding: 10px 12px;

  background-color: #f2f3f6;
  border: none;
  border-radius: 2px;
  outline: none;
`;

const Actions = styled.div``;
