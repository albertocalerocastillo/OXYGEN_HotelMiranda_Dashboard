import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: white;

  &.primary {
    background-color: blue;
  }

  &.secondary {
    background-color: gray;
  }

  &.extra-style {
    background-color: green;
  }
`;