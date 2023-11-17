import styled from '@emotion/styled';
import React from 'react';

interface AddCardButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function AddCardButton({ ...props }: AddCardButtonProps) {
  return (
    <Wrap {...props}>
      <div>+</div>
    </Wrap>
  );
}

const Wrap = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 160px;

  background-color: ${(props) => props.theme.colors.bright_dark};
  border: none;
  border-radius: 4px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 50px;
    height: 50px;

    font-size: 24px;
    font-weight: 600;
    color: ${(props) => props.theme.colors.bright};

    background-color: ${(props) => props.theme.colors.main};
    border-radius: 50%;
  }

  &:hover > div {
    background-color: ${(props) => props.theme.colors.main_dark};
    transition: background-color 0.2s ease-out;
  }
`;
