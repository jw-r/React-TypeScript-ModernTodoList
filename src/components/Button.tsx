import styled from '@emotion/styled';
import React, { PropsWithChildren } from 'react';

interface ButtonProps extends PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>> {}

export default function Button({ children, ...props }: ButtonProps) {
  return <Wrap {...props}>{children}</Wrap>;
}

const Wrap = styled.button`
  padding: 8px 12px;
  color: ${(props) => props.theme.colors.bright};
  background-color: ${(props) => props.theme.colors.main};
  transition: background-color 0.2s ease-out;

  &:hover {
    background-color: ${(props) => props.theme.colors.main_dark};
  }
`;
