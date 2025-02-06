import styled from "styled-components";

interface StatusProps {
  status: string;
}

export const BookingsDetailsStyled = styled.div`
  display: flex;
  flex-direction: row;
  padding: 2rem;
  background-color: #f7f7f7;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 1200px;
  margin: 2rem auto;
  gap: 2rem;
`;

export const BookingsDetailsLeftStyled = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const BookingsDetailsRightStyled = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const BookingsDetailsInfoStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BookingsDetailsNameStyled = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 2.5rem;
  color: #212121;
  margin-bottom: 0.5rem;
`;

export const BookingsDetailsIdStyled = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  color: #799283;
  margin-bottom: 1rem;
`;

export const BookingsDetailsContactContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const BookingsDetailsHorizontalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const BookingsDetailsFieldTitleStyled = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  color: #6E6E6E;
  margin-bottom: 0.5rem;
`;

export const BookingsDetailsFieldInfoStyled = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 1.2rem;
  color: #393939;
  margin-bottom: 1rem;
`;

export const BookingsDetailsFieldBoldInfoStyled = styled(BookingsDetailsFieldInfoStyled)`
  font-weight: 700;
  font-size: 1.5rem;

  span {
    font-size: 1rem;
    color: #799283;
    font-weight: 400;
  }
`;

export const BookingsDetailsAmenitiesContainerStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
`;

export const BookingsDetailsAmenitiesItemStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #E8FFEE;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;

  svg {
    color: #135846;
  }
`;

export const BookingsDetailsAmenitiesTextStyled = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: #135846;
`;

export const BookingsDetailsPhotoContainerStyled = styled.div`
  position: relative;
  width: 100%;
`;

export const BookingsDetailsPhotoImageStyled = styled.img`
  width: 100%;
  height: auto;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
`;

export const BookingsDetailsPhotoTagStyled = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #135846;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
`;

export const BookingsDetailsPhotoTitleStyled = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 1.5rem;
  color: #212121;
  margin-top: 1rem;
`;

export const BookingsDetailsPhotoDescriptionStyled = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  color: #6E6E6E;
  margin-top: 0.5rem;
`;

export const BookingStatusStyled = styled.div<StatusProps>`
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  color: ${props => (props.status === "CHECK IN" ? "#00A300" : props.status === "CHECK OUT" ? "#D8000C" : "#FFA500")};
  background-color: ${props => (props.status === "CHECK IN" ? "#E6FFEA" : props.status === "CHECK OUT" ? "#FFE6E6" : "#FFF5E6")};
  text-align: center;
  margin-top: 1rem;
`;