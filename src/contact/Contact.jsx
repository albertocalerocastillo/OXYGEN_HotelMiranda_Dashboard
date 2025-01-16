import React, { useState } from "react";
import {
  ContactCardsContainer,
  CardsContainer,
  ButtonCard,
} from "./ContactStyles";
import { FaArrowRightLong } from "react-icons/fa6";
import CardContact from "../components/CardContact";
import Popup from "./Popup";
import {
  ReviewsStyled,
  ReviewsMenuStyled,
  ReviewsMenuTextStyled,
  ReviewsMenuItemStyled,
  ReviewsFirstRowStyled,
  ReviewsFirstRowItemStyled,
  ReviewsItemStyled,
  ReviewsItemTextStyled,
  ReviewsItemCustomerStyled,
  ReviewsItemReviewStyled,
  ReviewsItemDateStyled,
  ReviewsItemActionsStyled,
  ReviewsButtonStyled,
} from "./ReviewsStyles";

const Contact = ({ isSidebarVisible }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupContent, setPopupContent] = useState('');
  const [activeTab, setActiveTab] = useState("all");
  const [allContacts, setAllContacts] = useState([
    { date: "Nov 21th 2020 09:21 AM", id: "#000123456", customer: "James Sitepu", email: "jamesitepu@gmail.com", phone: "635 267 398", subject: "Dinner", comment: "Lorem ipsum dolor sit amet.", archived: false },
    { date: "Nov 21th 2020 09:21 AM", id: "#000123457", customer: "Hendric Lukaku", email: "hendricklukaku@gamil.com", phone: "622 217 399", subject: "Food", comment: "Lorem ipsum dolor sit amet.", archived: false },
    { date: "Nov 21th 2020 09:21 AM", id: "#000123458", customer: "Yosep Saragih", email: "yosepsaragih@gmail.com", phone: "619 001 934", subject: "Evening", comment: "Lorem ipsum dolor sit amet.", archived: false },
    { date: "Nov 21th 2020 09:21 AM", id: "#000123459", customer: "Hendric Lukaku", email: "hendricklukaku@gamil.com", phone: "622 217 399", subject: "Food", comment: "Lorem ipsum dolor sit amet.", archived: false },
    { date: "Nov 21th 2020 09:21 AM", id: "#000123450", customer: "James Sitepu", email: "jamesitepu@gmail.com", phone: "123-456-7890", subject: "Lorem", comment: "Lorem ipsum dolor sit amet.", archived: false },
  ]);

  const handleCardClick = (content) => {
    setPopupContent(content);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setPopupContent('');
  };

  const handleArchive = (id) => {
    setAllContacts(allContacts.map(contact =>
      contact.id === id ? { ...contact, archived: true } : contact
    ));
  };

  const handleUnarchive = (id) => {
    setAllContacts(allContacts.map(contact =>
      contact.id === id ? { ...contact, archived: false } : contact
    ));
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const filteredContacts = activeTab === "all"
    ? allContacts.filter(contact => !contact.archived)
    : allContacts.filter(contact => contact.archived);

  return (
    <div style={{ marginLeft: isSidebarVisible ? "250px" : "70px", transition: "margin-left 0.3s ease" }}>
      <ContactCardsContainer>
        <CardsContainer>
          <CardContact onClick={handleCardClick} />
          <CardContact onClick={handleCardClick} />
          <CardContact onClick={handleCardClick} />
          <CardContact onClick={handleCardClick} />
        </CardsContainer>
        <ButtonCard>
          <FaArrowRightLong fontSize={"xx-large"} color={"#ffffff"} />
        </ButtonCard>
      </ContactCardsContainer>
      {isPopupOpen && <Popup content={popupContent} onClose={handleClosePopup} />}
      
      <ReviewsStyled>
        <ReviewsMenuStyled>
          <ReviewsMenuTextStyled>
            <ReviewsMenuItemStyled
              active={activeTab === "all"}
              onClick={() => handleTabClick("all")}
            >
              All Contacts
            </ReviewsMenuItemStyled>
            <ReviewsMenuItemStyled
              active={activeTab === "archived"}
              onClick={() => handleTabClick("archived")}
            >
              Archived
            </ReviewsMenuItemStyled>
          </ReviewsMenuTextStyled>
        </ReviewsMenuStyled>
        <ReviewsFirstRowStyled>
          <ReviewsFirstRowItemStyled>Date</ReviewsFirstRowItemStyled>
          <ReviewsFirstRowItemStyled>Customer</ReviewsFirstRowItemStyled>
          <ReviewsFirstRowItemStyled>Asunto</ReviewsFirstRowItemStyled>
          <ReviewsFirstRowItemStyled>Comment</ReviewsFirstRowItemStyled>
          <ReviewsFirstRowItemStyled>Action</ReviewsFirstRowItemStyled>
        </ReviewsFirstRowStyled>
        {filteredContacts.sort((a, b) => new Date(b.date) - new Date(a.date)).map(contact => (
          <ReviewsItemStyled key={contact.id}>
            <ReviewsItemDateStyled>
              {contact.date}<br />ID: {contact.id}
            </ReviewsItemDateStyled>
            <ReviewsItemCustomerStyled>
              {contact.customer}<br />Email: {contact.email}<br />Teléfono: {contact.phone}
            </ReviewsItemCustomerStyled>
            <ReviewsItemTextStyled>{contact.subject}</ReviewsItemTextStyled>
            <ReviewsItemReviewStyled>{contact.comment}</ReviewsItemReviewStyled>
            <ReviewsItemActionsStyled>
              {activeTab === "all" ? (
                <ReviewsButtonStyled onClick={() => handleArchive(contact.id)}>Archive</ReviewsButtonStyled>
              ) : (
                <ReviewsButtonStyled onClick={() => handleUnarchive(contact.id)}>Unarchive</ReviewsButtonStyled>
              )}
            </ReviewsItemActionsStyled>
          </ReviewsItemStyled>
        ))}
      </ReviewsStyled>
    </div>
  );
};

export default Contact;