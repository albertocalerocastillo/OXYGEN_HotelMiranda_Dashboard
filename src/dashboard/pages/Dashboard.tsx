import React, { useEffect, useState } from "react";
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
  ButtonContainer
} from "../components/DashboardStyles";
import { IoBedOutline } from "react-icons/io5";
import { LuCalendarCheck } from "react-icons/lu";
import { RiLoginBoxLine, RiLogoutBoxLine } from "react-icons/ri";
import { FaArrowRightLong } from "react-icons/fa6";
import CardContact from "../../components/CardContact/CardContact";
import Calendar from "../components/Calendar";
import { DashboardProps } from '../interfaces/DashboardInterfaces';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dashboard: React.FC<DashboardProps> = ({ isSidebarVisible }) => {
  const [newBookings, setNewBookings] = useState(0);
  const [scheduledRooms, setScheduledRooms] = useState(0);
  const [checkIns, setCheckIns] = useState(0);
  const [checkOuts, setCheckOuts] = useState(0);//cambiar y tipar todos los useState

  useEffect(() => {
    setNewBookings(8461);
    setScheduledRooms(963);
    setCheckIns(753);
    setCheckOuts(516);

    toast.success('¡Bienvenido al Dashboard!', {
      position: "top-right",
    });
  }, []);

  return (
    <div 
      style={{ marginLeft: isSidebarVisible ? "250px" : "70px", transition: "margin-left 0.3s ease" }} 
      data-cy="dashboard"
    >
      <ToastContainer />
      <BoxContainer>
        <ChildDivContainer>
          <ChildDivColor bgcolor={"#FFEDEC"}>
            <IconContainer>
              <IoBedOutline fontSize={"xx-large"} color={"#E23428"} />
            </IconContainer>
          </ChildDivColor>
          <DashboardParagraph>
            {newBookings.toLocaleString()}
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
            {scheduledRooms.toLocaleString()}
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
            {checkIns.toLocaleString()}
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
            {checkOuts.toLocaleString()}
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
        <ButtonContainer>
          <ButtonCard>
            <FaArrowRightLong fontSize={"xx-large"} color={"#ffffff"} />
          </ButtonCard>
        </ButtonContainer>
      </ContactCardsContainer>
    </div>
  );
};

export default Dashboard;