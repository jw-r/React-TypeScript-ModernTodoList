import styled from '@emotion/styled';
import Button from './Button';

export default function TodoHandler() {
  return (
    <Wrap>
      <Form>
        <Input placeholder='할일을 추가해주세요' />
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
  box-shadow: 0px 0px 4px 3px rgba(255, 111, 15, 0.32);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  width: 280px;
`;

const Input = styled.input`
  padding: 10px 12px;

  background-color: #f2f3f6;
  border: none;
  border-radius: 2px;
  outline: none;
`;

const Actions = styled.div``;
