import styled from "styled-components";

export const BookingsStyled = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
`;

export const BookingsMenuStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #D4D4D4;
  margin-bottom: 3rem;
  margin-top: 7rem;
  padding: .5% 2%;
`;

export const BookingsMenuTextStyled = styled.div`
  display: flex;
  gap: 2rem;
`;

export const BookingsMenuSearchBarStyled = styled.div`
  width: 20%;
  border: 1px solid #135846;
  border-radius: .5rem;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: .5rem 1rem;

  svg {
    color: #000000;
  }
`;

export const BookingsMenuSearchBarInputStyled = styled.input`
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 1rem;
  margin: 0;
  background: #ffffff;
  border: none;
  color: #000000;
`;

export const BookingsMenuSortBy = styled.div`
  padding: .5rem 1rem;
  display: flex;
  align-items: center;
  border: 1px solid #135846;
  border-radius: .75rem;
  background: #ffffff;
  cursor: pointer;

  svg {
    color: #CCCCCC;
  }
`;

export const BookingsMenuSortByText = styled.p`
  color: #135846;
  font-size: 1rem;
  font-weight: 600;
  font-family: 'Poppins';
  margin: 0;
  padding-right: 1rem;
`;

export const BookingsMenuItemStyled = styled.p`
  font-family: 'Poppins';
  font-weight: 600;
  font-size: 1rem;
  color: #6E6E6E;
  padding-right: 1rem;
  cursor: pointer;
  position: relative;

  &:hover {
    color: #135846;
    border-bottom: solid 2px #135846;
    margin-bottom: -0.5rem;
  }
`;

export const BookingsFirstRowStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background: #ffffff;
  padding: 1rem 0;
`;

export const BookingsFirstRowItemStyled = styled.p`
  font-family: 'Poppins';
  font-size: 1rem;
  font-weight: 700;
  color: #393939;
  margin: 0;
`;

export const BookingsItemStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 6.5rem;
  align-items: center;
  background: #ffffff;
  padding: .5rem 1rem;
  margin: .5rem 0;

  svg {
    color: #000000;
  }

  &:hover {
    box-shadow: 0px 4px 4px #d5d5d5;
  }
`;

export const BookingsItemTextStyled = styled.p`
  font-family: 'Poppins';
  font-size: 1rem;
  font-weight: 600;
  color: #393939;
  margin: 0;
`;

export const BookingsItemBookingsStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const BookingsItemBookingsPhotoStyled = styled.img`
  width: auto;
  height: 4rem;
  margin-right: .5rem;
  border-radius: .5rem;
`;

export const BookingsItemBookingsInfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 0;
  text-align: start;
`;

export const BookingsItemBookingsIdStyled = styled.p`
  font-family: 'Poppins';
  font-size: .875rem;
  font-weight: 500;
  color: #799283;
  margin: 0;
`;

export const BookingsItemOrderDateStyled = styled.p`
  font-family: 'Poppins';
  font-size: 1rem;
  font-weight: 500;
  color: #393939;
  margin: 0;
`;

export const BookingsItemCheckStyled = styled.div`
  flex-direction: column;
  margin: auto 0;
  text-align: start;
`;

export const BookingsItemCheckHourStyled = styled.p`
  font-family: 'Poppins';
  font-size: .875rem;
  font-weight: 500;
  color: #393939;
  margin: 0; 
`;

export const BookingsItemSpecialRequestStyled = styled.button`
  padding: .8rem 1.5rem;
  cursor: pointer;
  color: ${props =>
    props.type === 'booked' ? '#799283' : '#000000'
  };
  font-family: 'Poppins';
  font-size: 1rem;
  font-weight: 500;
  background: ${props =>
    props.type === 'booked' ? '#ffffff' : '#EEF9F2'
  };
  border: ${props =>
    props.type === 'booked' ? '1px solid #799283' : 'none'
  };
  border-radius: .5rem;
  text-align: center;
`;

export const BookingsItemStatusStyled = styled.button`
  cursor: pointer;
  background: ${props => 
    props.type === 'booked' ? '#E8FFEE' : 
    props.type === 'refund' ? '#FFEDEC' :
    props.type === 'pending' ? '#E2E2E2' :
    props.type === 'canceled' ? '#575757' : 'white'
  };
  color: ${props => 
    props.type === 'booked' ? '#5AD07A' : 
    props.type === 'refund' ? '#E23428' :
    props.type === 'pending' ? '#6D6D6D' :
    props.type === 'canceled' ? '#BEBEBE' : 'white'
  };
  width: 8%;
  padding: .8rem 1rem;
  font-family: 'Poppins';
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: .5rem;
  text-align: center;
`;
