import styled from '@emotion/styled';
import React, { useState } from 'react';
import { useCardStore } from '../hooks/useCardStore';

interface CardTitleProps {
  cardId: string;
  title: string;
}

export default function CardTitle({ cardId, title }: CardTitleProps) {
  const { changeTitle } = useCardStore();
  const [value, setValue] = useState('');
  const [open, isOpen] = useState(false);

  const changeCardTitle = () => {
    changeTitle(cardId, value);

    isOpen((prev) => !prev);
  };

  return (
    <Wrap>
      {open ? (
        <form onSubmit={changeCardTitle}>
          <TitleInput
            onChange={({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => setValue(value)}
            onBlur={changeCardTitle}
            placeholder={title}
            autoFocus={true}
          />
        </form>
      ) : (
        <Title onClick={() => isOpen((prev) => !prev)}>{title}</Title>
      )}
    </Wrap>
  );
}

const Wrap = styled.div`
  margin-bottom: 8px;
  font-size: 18px;
  font-weight: 600;
`;

const Title = styled.div`
  cursor: pointer;

  padding: 1px 6px;

  border: ${(props) => `2px solid ${props.theme.colors.card_background}`};
  border-radius: 2px;

  transition: border-color 0.1s ease-out;

  &:hover {
    border: ${(props) => `2px solid ${props.theme.colors.main}`};
  }
`;

const TitleInput = styled.input`
  font-size: 18px;
  font-weight: 600;
  text-align: center;

  background-color: inherit;
  border: none;
  border-bottom: ${(props) => `2px solid ${props.theme.colors.main}`};
  outline: none;
`;
