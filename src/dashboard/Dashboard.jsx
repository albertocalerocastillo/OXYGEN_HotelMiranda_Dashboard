import React from "react";
import { IoBedOutline } from "react-icons/io5";
import { LuCalendarCheck } from "react-icons/lu";
import { RiLoginBoxLine, RiLogoutBoxLine } from "react-icons/ri";
import { FaArrowRightLong } from "react-icons/fa6";
import CardContact from "../components/CardContact";
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
} from "./DashboardStyles";

const Dashboard = () => {
  return (
    <>
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
    </>
  );
};

export default Dashboard;