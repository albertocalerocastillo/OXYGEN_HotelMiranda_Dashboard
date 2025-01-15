import styled from "styled-components";

const ContactCardsContainer = styled.div`
  position: relative;
  width: 98%;
  transition: margin-left 0.3s ease;
  background-color: #ffffff;
  box-shadow: 0px 4px 4px #00000005;
  border-radius: 20px;
  padding: 5px 72px 70px 30px;
  
`;

const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
`;

const Title = styled.h2`
  width: 100%;
  padding-bottom: 30px;
  text-align: left;
  letter-spacing: 0px;
  color: #393939;
`;

const ButtonCard = styled.button`
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

export {
  ContactCardsContainer,
  CardsContainer,
  Title,
  ButtonCard,
};