import styled from '@emotion/styled';
import Button from './Button';
import React, { useState } from 'react';
import { useCardStore } from '../hooks/useCardStore';
import { isBlank } from '../utils/isBlank';
import { ALERT_MESSAGE } from '../constants';

export default function TodoHandler() {
  const { cardRepository, selectedCardId, addTodo, addTodoAll, clearCard } = useCardStore();
  const [value, setValue] = useState('');

  const alertIfNotValidOrExecute = (callback: (value: string) => void) => {
    if (cardRepository.length < 1) {
      alert(ALERT_MESSAGE.createCardFirst);
      return;
    }

    if (!selectedCardId) {
      alert(ALERT_MESSAGE.selectCardFirst);
      return;
    }

    if (!isBlank(value)) {
      callback(value);
      setValue('');
    }
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    alertIfNotValidOrExecute(addTodo);
  };

  return (
    <Wrap>
      <Form onSubmit={onSubmit}>
        <Input value={value} onChange={(e) => setValue(e.target.value)} placeholder='할일을 추가해주세요' />
        <Actions>
          <Button>추가</Button>
          <Button type='button' color='green' onClick={() => alertIfNotValidOrExecute(addTodoAll)}>
            전체 추가
          </Button>
          <Button type='button' color='red' onClick={clearCard}>
            전체 삭제
          </Button>
        </Actions>
      </Form>
    </Wrap>
  );
}

const Wrap = styled.div`
  position: fixed;
  z-index: 1;

  display: flex;
  align-items: flex-end;
  justify-content: center;

  width: 100%;
  height: 160px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 12px;

  width: 320px;
  padding: 30px 20px;

  background-color: ${(props) => props.theme.colors.bright};
  border-radius: 6px;
  box-shadow: ${(props) => props.theme.shadow.main};
`;

const Input = styled.input`
  padding: 10px 12px;

  background-color: ${(props) => props.theme.colors.bright_dark};
  border: none;
  border-radius: 2px;
  outline: none;
`;

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
`;
