import React from "react";
import { MainCard, ParagraphContact, ContactContainer, ImageContainer, DataUserContainer, DataUserContent, DataDescription, IconsContainer } from "./CardContactStyles";
import Perfil from "../../assets/perfil.jpg";
import { FcOk } from "react-icons/fc";
import { GiCancel } from "react-icons/gi";

const CardContact: React.FC = () => {
  const content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam";

  return (
    <div>
      <MainCard>
        <ParagraphContact>
          {content}
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