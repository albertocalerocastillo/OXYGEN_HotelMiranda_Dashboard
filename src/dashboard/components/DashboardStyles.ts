import styled from "styled-components";

export const BoxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;
`;

export const ChildDivContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  flex: 1;
  margin-right: 1rem;

  &:last-child {
    margin-right: 0;
  }
`;

interface ChildDivColorProps {
  bgcolor: string;
}

export const ChildDivColor = styled.div<ChildDivColorProps>`
  background-color: ${(props) => props.bgcolor};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  margin-right: 1rem;
`;

export const DashboardParagraph = styled.p`
  font-size: 1.5rem;
  color: #333333;
  margin: 0;
`;

export const DashboardSpan = styled.span`
  display: block;
  font-size: 1rem;
  color: #799283;
  margin-top: 0.5rem;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContactCardsContainer = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  margin-top: 2rem;
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  color: #333333;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

export const ButtonCard = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #135846;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1rem;
`;