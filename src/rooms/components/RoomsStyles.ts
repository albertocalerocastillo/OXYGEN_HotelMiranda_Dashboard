import styled from "styled-components";

export const RoomsItemRoomProfileIdStyled = styled.p`
  font-family: 'Poppins';
  font-size: .875rem;
  font-weight: 500;
  color: #799283;
  margin: 0;
`;

export const RoomsStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RoomsMenuStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3rem;
  padding: .5% 2%;
`;

export const RoomsMenuItemStyled = styled.p`
  font-family: 'Poppins';
  font-weight: 600;
  font-size: 1rem;
  color: #6E6E6E;
  padding-right: 1rem;
  cursor: pointer;
  border-bottom: 1px solid #D4D4D4;

  svg {
    cursor: pointer;
  }

  &:hover {
    color: #135846;
    border-color: #135846;
  }
`;

export const RoomsFirstRowStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1.5fr 1fr 1fr 1fr;
  gap: 1rem;
  align-items: center;
  background: #ffffff;
  padding: 1rem;
  margin: 0 1rem;
`;

export const RoomsFirstRowItemStyled = styled.p`
  font-family: 'Poppins';
  font-size: 1rem;
  font-weight: 700;
  color: #393939;
  margin: 0;
  min-width: 100px;
  cursor: pointer;

  svg {
    vertical-align: middle;
    margin-left: 0.5rem;
  }

  &:hover {
    color: #135846;
  }
`;

export const RoomsItemStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1.5fr 1fr 1fr 1fr;
  gap: 1rem;
  align-items: center;
  background: #ffffff;
  padding: .5rem 1rem;
  margin: 0 1rem;

  svg {
    color: #000000;
  }

  &:hover {
    box-shadow: 0px 4px 4px #d5d5d5;
  }
`;

export const RoomsItemTextStyled = styled.p`
  font-family: 'Poppins';
  font-size: 1rem;
  font-weight: 600;
  color: #393939;
  margin: 0;
  white-space: pre-wrap;
  overflow: hidden;

  span {
    font-size: .875rem;
    color: #799283;
    font-weight: 400;
  }
`;

export const RoomsItemRoomProfileContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const RoomsItemRoomProfilePhotoStyled = styled.img`
  width: auto;
  height: 4rem;
  margin-right: .5rem;
  border-radius: .5rem;
`;

export const RoomsItemRoomProfileInfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
`;

interface RoomsItemStatusStyledProps {
    type: 'available' | 'booked' | 'default';
  }
  
  export const RoomsItemStatusStyled = styled.button<RoomsItemStatusStyledProps>`
    cursor: pointer;
    background: ${props =>
      props.type === 'available' ? '#5AD07A' :
      props.type === 'booked' ? '#E23428' : 'white'
    };
    color: white;
    padding: .5rem .75rem;
    font-family: 'Poppins';
    font-size: .875rem;
    font-weight: 600;
    border: none;
    width: 100%;
    border-radius: .5rem;
    text-align: center;
  `

export const RoomsButtonStyled = styled.button`
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