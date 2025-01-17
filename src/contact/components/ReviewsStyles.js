import styled from "styled-components";

export const ReviewsStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;

export const ReviewsMenuStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #D4D4D4;
  margin-bottom: 1rem;
  padding: .5rem 2%;
`;

export const ReviewsMenuTextStyled = styled.div`
  display: flex;
  gap: 2rem;
`;

export const ReviewsMenuItemStyled = styled.p`
  font-family: 'Poppins';
  font-weight: 600;
  font-size: 1rem;
  color: ${props => (props.active ? "#135846" : "#6E6E6E")};
  padding-right: 1rem;
  cursor: pointer;
  border-bottom: ${props => (props.active ? "solid 2px #135846" : "none")};
  margin-bottom: ${props => (props.active ? "-0.5rem" : "0")};
`;

export const ReviewsFirstRowStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  padding: 1rem 6rem;
`;

export const ReviewsFirstRowItemStyled = styled.p`
  font-family: 'Poppins';
  font-size: 1rem;
  font-weight: 700;
  color: #393939;
  margin: 0;
  width: ${props => (props.fullWidth ? '20%' : '15%')};
`;

export const ReviewsItemStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  padding: .5rem 1rem;
  margin: .5rem 0;

  &:hover {
    box-shadow: 0px 4px 4px #d5d5d5;
  }
`;

export const ReviewsItemTextStyled = styled.p`
  font-family: 'Poppins';
  font-size: 1rem;
  font-weight: 600;
  color: #393939;
  margin: 0;
  width: ${props => (props.fullWidth ? '20%' : '15%')};
`;

export const ReviewsItemDateStyled = styled(ReviewsItemTextStyled)`
  width: 20%;
`;

export const ReviewsItemCustomerStyled = styled(ReviewsItemTextStyled)`
  width: 20%;
`;

export const ReviewsItemReviewStyled = styled(ReviewsItemTextStyled)`
  width: 20%;
`;

export const ReviewsItemActionsStyled = styled.div`
  width: 15%;
  display: flex;
  justify-content: space-around;
`;

export const ReviewsButtonStyled = styled.button`
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