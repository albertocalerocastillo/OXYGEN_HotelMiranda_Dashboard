import React from "react";
import { MainCard, ParagraphContact, ContactContainer, ImageContainer, DataUserContainer, DataUserContent, DataDescription, IconsContainer } from "./CardContactStyles";
import Perfil from "../assets/perfil.jpg";
import { FcOk } from "react-icons/fc";
import { GiCancel } from "react-icons/gi";

const CardContact = () => {
  return (
    <div>
      <MainCard>
        <ParagraphContact>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </ParagraphContact>
        <ContactContainer>
          <ImageContainer>
            <img src={Perfil} alt="contact" />
          </ImageContainer>
          <DataUserContainer>
            <DataUserContent>Alberto Calero</DataUserContent>
            <DataDescription>4m ago</DataDescription>
          </DataUserContainer>
          <IconsContainer>
            <FcOk size={20} />
            <GiCancel size={20} color={"red"} />
          </IconsContainer>
        </ContactContainer>
      </MainCard>
    </div>
  );
};

export default CardContact;