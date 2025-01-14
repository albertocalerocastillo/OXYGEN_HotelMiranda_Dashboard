import styled from "styled-components";

const MainDivContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f8f8f8;
  padding: 50px;
`;


const BoxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  margin: 9rem auto;
`;


const ChildDivContainer = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.02);
  border-radius: 12px;
  width: 100%;
  height: 125px;
  padding: 10px;
  padding-top: 0px;
  display: flex;
  align-items: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
  }
`;


const ChildDivColor = styled.div`
  background-color: ${(props) => props.bgcolor};
  margin: 29px 22px 0 30px;
  width: 65px;
  height: 65px;
  border-radius: 8px;
  opacity: 1;
`;

const DashboardParagraph = styled.p`
  margin: 0px;
  padding-top: 45px;
  text-align: left;
  font: normal normal 600 30px 'Poppins';
  color: #393939;
`;

const DashboardSpan = styled.p`
  color: #787878;
  font-size: 14px;
  font-weight: 400;
  margin-top: -0.1rem;
`;

const IconContainer = styled.div`
  color: ${(props) => props.color};
    margin-top: 17px;
    margin-left: 17px;
`;

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
  MainDivContainer,
  BoxContainer,
  ChildDivContainer,
  ChildDivColor,
  DashboardParagraph,
  DashboardSpan,
  IconContainer,
  ContactCardsContainer,
  CardsContainer,
  Title,
  ButtonCard,
};