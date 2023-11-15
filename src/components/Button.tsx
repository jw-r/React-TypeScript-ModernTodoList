import styled from '@emotion/styled';
import React, { PropsWithChildren } from 'react';

interface ButtonProps extends PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>> {}

export default function Button({ children, ...props }: ButtonProps) {
  return <Wrap {...props}>{children}</Wrap>;
}

const Wrap = styled.button`
  padding: 8px 12px;

  color: white;

  background-color: #ff6f0f;
  border: none;
  border-radius: 8px;

  transition: background-color 0.2s ease-out;

  &:hover {
    background-color: #f06000;
  }
`;
