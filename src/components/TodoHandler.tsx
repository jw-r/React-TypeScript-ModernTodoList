import styled from '@emotion/styled';
import Button from './Button';
import React, { useState } from 'react';
import { useCardStore } from '../hooks/useCardStore';
import { isBlank } from '../utils/isBlank';
import { ALERT_MESSAGE } from '../constants';

export default function TodoHandler() {
  const { cardRepository, selectedCardId, addTodo } = useCardStore();
  const [value, setValue] = useState('');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (cardRepository.length < 1) {
      alert(ALERT_MESSAGE.createCardFirst);
      return;
    }

    if (!selectedCardId) {
      alert(ALERT_MESSAGE.selectCardFirst);
      return;
    }

    if (!isBlank(value)) {
      addTodo(value);
      setValue('');
    }
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
  box-shadow: ${(props) => props.theme.shadow.main};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  width: 280px;
`;

const Input = styled.input`
  padding: 10px 12px;

  background-color: ${(props) => props.theme.colors.bright_dark};
  border: none;
  border-radius: 2px;
  outline: none;
`;

const Actions = styled.div``;
