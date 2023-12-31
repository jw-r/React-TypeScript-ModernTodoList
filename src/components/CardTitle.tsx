import styled from '@emotion/styled';
import { useState } from 'react';
import { useCardStore } from '../hooks/useCardStore';
import { isBlank } from '../utils/isBlank';
import { useSwitch } from '../hooks/useSwitch';
import { CardData } from '../types';

interface CardTitleProps {
  cardId: CardData['id'];
  title: CardData['title'];
}

export default function CardTitle({ cardId, title }: CardTitleProps) {
  const { changeTitle } = useCardStore();
  const [value, setValue] = useState('');
  const { isOn, toggleSwitch } = useSwitch(false);

  const changeCardTitle = () => {
    if (title !== value && !isBlank(value)) {
      changeTitle(cardId, value);
    }

    toggleSwitch();
  };

  return (
    <Wrap>
      {isOn ? (
        <form onSubmit={changeCardTitle}>
          <TitleInput
            onChange={(e) => setValue(e.target.value)}
            onBlur={changeCardTitle}
            placeholder={title}
            autoFocus={true}
          />
        </form>
      ) : (
        <Title onClick={toggleSwitch}>{title}</Title>
      )}
    </Wrap>
  );
}

const Wrap = styled.div`
  height: 24px;
  margin-bottom: 8px;
  font-size: 18px;
  font-weight: 900;
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
