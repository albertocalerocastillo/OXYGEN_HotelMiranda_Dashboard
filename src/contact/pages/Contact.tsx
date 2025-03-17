import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts, updateContact } from '../features/ContactThunks';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RootState, AppDispatch } from '../../store/store';
import {
  ContactCardsContainer,
  CardsContainer,
  ButtonCard,
} from "../components/ContactStyles";
import { FaArrowRightLong } from "react-icons/fa6";
import CardContact from "../../components/CardContact/CardContact";
import Popup from "../components/Popup";
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
} from "../components/ReviewsStyles";

const Contact: React.FC<{ isSidebarVisible: boolean }> = ({ isSidebarVisible }) => {
  const dispatch: AppDispatch = useDispatch();
  const { contacts, status, error } = useSelector((state: RootState) => state.contact);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupContent, setPopupContent] = useState('');
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    if (status === 'loading') {
      toast.info("Loading contacts...", {
        autoClose: 1000,
        toastId: 'loading'
      });
    } else if (status === 'succeeded') {
      toast.dismiss('loading');
      toast.success("Contacts loaded successfully!", {
        autoClose: 3000,
        toastId: 'success'
      });
    } else if (status === 'failed') {
      toast.dismiss('loading');
      toast.error(`Failed to load contacts: ${error}`, {
        autoClose: 3000,
        toastId: 'error'
      });
    }
  }, [status, error]);

  const handleCardClick = (content: string) => {
    setPopupContent(content);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setPopupContent('');
  };

  const handleArchive = (id: string) => {
    const contact = contacts.find(contact => contact.id === id);
    if (contact) {
      dispatch(updateContact({ ...contact, archived: true }));
    }
  };

  const handleUnarchive = (id: string) => {
    const contact = contacts.find(contact => contact.id === id);
    if (contact) {
      dispatch(updateContact({ ...contact, archived: false }));
    }
  };

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const filteredContacts = activeTab === "all"
    ? contacts.filter(contact => !contact.archived)
    : contacts.filter(contact => contact.archived);

  return (
    <>
      <ToastContainer />
      <div style={{ marginLeft: isSidebarVisible ? "" : "70px", transition: "margin-left 0.3s ease" }}>
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
          {status === 'loading' ? (
            <p>Loading contacts...</p>
          ) : status === 'succeeded' ? (
            filteredContacts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).map(contact => (
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
            ))
          ) : status === 'failed' ? (
            <p>{error}</p>
          ) : null}
        </ReviewsStyled>
      </div>
    </>
  );
};

export default Contact;