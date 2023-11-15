import styled from '@emotion/styled';
import TodoHandler from './TodoHandler';
import AddCardButton from './AddCard';

export default function TodoList() {
  return (
    <Wrap>
      <TodoHandler />
      <List>
        <AddCardButton />
        <Card>d</Card>
        <Card>d</Card>
        <Card>d</Card>
        <Card>d</Card>
        <Card>d</Card>
        <Card>d</Card>
      </List>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;

  width: 100%;
  padding: 30px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-height: 160px;
  padding: 12px;

  background-color: aliceblue;
  border-radius: 4px;
`;
