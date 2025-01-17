import styled from "styled-components";

export const UsersStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8rem;
  padding: 1rem 2%;
  background: #f9f9f9;
  border-radius: .5rem;
  box-shadow: 0px 4px 8px rgba(0,0,0,0.1);
`;

export const UsersMenuStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #D4D4D4;
  margin-bottom: 1rem;
  padding: .5rem 0;
`;

export const UsersMenuTextStyled = styled.div`
  display: flex;
  gap: 2rem;
`;

export const UsersMenuItemStyled = styled.p`
  font-family: 'Poppins';
  font-weight: 600;
  font-size: 1rem;
  color: ${props => (props.active ? "#135846" : "#6E6E6E")};
  padding-right: 1rem;
  cursor: pointer;
  border-bottom: ${props => (props.active ? "solid 2px #135846" : "none")};
  margin-bottom: ${props => (props.active ? "-0.5rem" : "0")};
`;

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1rem;
`;

export const SearchBarInputStyled = styled.input`
  background-color: white;
  color: #135846;
  padding: .5rem;
  border: 1px solid #135846;
  border-radius: .5rem;
  font-family: 'Poppins';
  font-size: 1rem;
  outline: none;
`;

export const SortSelectStyled = styled.select`
  background-color: white;
  color: #135846;
  padding: .5rem;
  border: 1px solid #135846;
  border-radius: .5rem;
  font-family: 'Poppins';
  font-size: 1rem;
  outline: none;
`;

export const UsersFirstRowStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  padding: 1rem 2%;
  border-bottom: 1px solid #D4D4D4;
`;

export const UsersFirstRowItemStyled = styled.p`
  font-family: 'Poppins';
  font-size: 1rem;
  font-weight: 700;
  color: #393939;
  margin: 0;
  flex: 1;
  text-align: center;
`;

export const UsersItemStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  padding: 1rem 2%;
  margin: .1rem 0;
  border-radius: .5rem;
  box-shadow: 0px 4px 8px rgba(0,0,0,0.05);
`;

export const UsersItemTextStyled = styled.p`
  font-family: 'Poppins';
  font-size: 1rem;
  font-weight: 600;
  color: #393939;
  margin: 0;
  flex: 1;
  text-align: center;
`;

export const UsersItemNameStyled = styled(UsersItemTextStyled)`
  flex: 2;
`;

export const UsersItemJobStyled = styled(UsersItemTextStyled)`
  flex: 2;
`;

export const UsersItemContactStyled = styled(UsersItemTextStyled)`
  flex: 2;
`;

export const UsersItemStatusStyled = styled(UsersItemTextStyled)`
  flex: 1;
  color: ${props => (props.status === "ACTIVE" ? "#5AD07A" : "#E23428")};
`;

export const UsersProfilePhotoStyled = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const UsersButtonStyled = styled.button`
  padding: .5rem 1rem;
  cursor: pointer;
  color: #ffffff;
  background: #135846;
  border: none;
  border-radius: .5rem;
  text-align: center;

  &:hover {
    background: #0E4D3A;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 1rem;
  gap: 1rem;
`;

export const PaginationButton = styled.button`
  padding: .5rem 1rem;
  cursor: pointer;
  background-color: #FFFFFF;
  color: #135846;
  border: 1px solid #135846;
  border-radius: .5rem;
  text-align: center;

  &:disabled {
    background-color: #d4d4d4;
    color: white;
    border: none;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background-color: #135846;
    color: white;
    border: 1px solid white;
  }
`;

export const DataInfoStyled = styled.div`
  font-family: 'Poppins';
  font-size: 1rem;
  color: #393939;
  margin-right: auto;
`;