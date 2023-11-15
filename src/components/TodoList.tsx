import styled from '@emotion/styled';
import TodoHandler from './TodoHandler';
import TodoCards from './TodoCards';

export default function TodoList() {
  return (
    <Wrap>
      <TodoHandler />
      <TodoCards />
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;
