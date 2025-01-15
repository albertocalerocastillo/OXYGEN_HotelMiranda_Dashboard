import React from "react";
import {
  ContactCardsContainer,
  CardsContainer,
  Title,
  ButtonCard,
} from "./ContactStyles";
import { FaArrowRightLong } from "react-icons/fa6";
import CardContact from "../components/CardContact";

const Contact = ({ isSidebarVisible }) => {
  return (
    <div style={{ marginLeft: isSidebarVisible ? "250px" : "70px", transition: "margin-left 0.3s ease" }}>

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

export default Contact;