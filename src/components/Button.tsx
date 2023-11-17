import styled from '@emotion/styled';
import React, { PropsWithChildren } from 'react';
import { theme } from '../styles/theme';

interface ButtonProps extends PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>> {
  color?: keyof typeof theme.colors;
}

export default function Button({ children, color = 'main', ...props }: ButtonProps) {
  return (
    <Wrap {...props} color={color}>
      {children}
    </Wrap>
  );
}

const Wrap = styled.button<{ color: keyof typeof theme.colors }>`
  padding: 8px 12px;

  font-weight: 600;
  color: ${(props) => props.theme.colors.bright};

  background-color: ${(props) => props.theme.colors[props.color]};

  transition: background-color 0.2s ease-out;

  &:hover {
    background-color: ${(props) => props.theme.colors[`${props.color}_dark` as keyof typeof theme.colors]};
  }
`;
