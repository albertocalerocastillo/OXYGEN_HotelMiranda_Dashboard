import React from "react";
import {
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
} from "../components/DashboardStyles";
import { IoBedOutline } from "react-icons/io5";
import { LuCalendarCheck } from "react-icons/lu";
import { RiLoginBoxLine, RiLogoutBoxLine } from "react-icons/ri";
import { FaArrowRightLong } from "react-icons/fa6";
import CardContact from "../../components/CardContact/CardContact";
import Calendar from "../components/Calendar";

const Dashboard = ({ isSidebarVisible }) => {
  return (
    <div 
      style={{ marginLeft: isSidebarVisible ? "250px" : "70px", transition: "margin-left 0.3s ease" }} 
      data-cy="dashboard"
    >
      <BoxContainer>
        <ChildDivContainer>
          <ChildDivColor bgcolor={"#FFEDEC"}>
            <IconContainer>
              <IoBedOutline fontSize={"xx-large"} color={"#E23428"} />
            </IconContainer>
          </ChildDivColor>
          <DashboardParagraph>
            8,461
            <DashboardSpan>New Booking</DashboardSpan>
          </DashboardParagraph>
        </ChildDivContainer>
        <ChildDivContainer>
          <ChildDivColor bgcolor={"#E23428"}>
            <IconContainer>
              <LuCalendarCheck fontSize={"xx-large"} color={"#FFFFFF"} />
            </IconContainer>
          </ChildDivColor>
          <DashboardParagraph>
            963
            <DashboardSpan>Scheduled Room</DashboardSpan>
          </DashboardParagraph>
        </ChildDivContainer>
        <ChildDivContainer>
          <ChildDivColor bgcolor={"#FFEDEC"}>
            <IconContainer>
              <RiLoginBoxLine fontSize={"xx-large"} color={"#E23428"} />
            </IconContainer>
          </ChildDivColor>
          <DashboardParagraph>
            753
            <DashboardSpan>Check in</DashboardSpan>
          </DashboardParagraph>
        </ChildDivContainer>
        <ChildDivContainer>
          <ChildDivColor bgcolor={"#FFEDEC"}>
            <IconContainer>
              <RiLogoutBoxLine fontSize={"xx-large"} color={"#E23428"} />
            </IconContainer>
          </ChildDivColor>
          <DashboardParagraph>
            516
            <DashboardSpan>Check out</DashboardSpan>
          </DashboardParagraph>
        </ChildDivContainer>
      </BoxContainer>

      <div>
        <Calendar />
      </div>

      <ContactCardsContainer>
        <Title>Latest Review by Customers</Title>
        <CardsContainer>
          <CardContact />
          <CardContact />
          <CardContact />
        </CardsContainer>
        <ButtonCard>
          <FaArrowRightLong fontSize={"xx-large"} color={"#ffffff"} />
        </ButtonCard>
      </ContactCardsContainer>
    </div>
  );
};

export default Dashboard;