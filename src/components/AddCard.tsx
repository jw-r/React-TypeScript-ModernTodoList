import styled from '@emotion/styled';

export default function AddCardButton() {
  return (
    <Wrap>
      <div>+</div>
    </Wrap>
  );
}

const Wrap = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 160px;

  background-color: #f2f3f6;
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
    color: white;

    background-color: #ff6f0f;
    border-radius: 50%;
  }

  &:hover > div {
    background-color: #f06000;
    transition: background-color 0.2s ease-out;
  }
`;
