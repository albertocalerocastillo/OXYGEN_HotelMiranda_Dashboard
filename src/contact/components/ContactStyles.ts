import styled from "styled-components";

export const ContactCardsContainer = styled.div`
  position: relative;
  width: 98%;
  transition: margin-left 0.3s ease;
  background-color: #F8F8F8;
  border-radius: 20px;
  padding: 5px 72px 70px 30px;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3rem;
`;

export const ButtonCard = styled.button`
  position: absolute;
  top: 55%;
  right: -25px;
  transform: translateY(-50%);
  width: 56px;
  height: 56px;
  background-color: #135846;
  border: none;
  justify-content: center;
  cursor: pointer;
  border-radius: 12px;

  &:hover {
    transform: translateY(-50%) scale(1.1);
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s, box-shadow 0.3s;
  }
`;