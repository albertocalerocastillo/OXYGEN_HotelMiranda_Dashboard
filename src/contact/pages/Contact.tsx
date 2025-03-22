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

    const handleArchive = async (id: string) => {
        const contact = contacts.find(contact => contact.id === id);
        if (contact) {
            await dispatch(updateContact({ ...contact, archived: true }));
            dispatch(fetchContacts());
        }
    };

    const handleUnarchive = async (id: string) => {
        const contact = contacts.find(contact => contact.id === id);
        if (contact) {
            await dispatch(updateContact({ ...contact, archived: false }));
            dispatch(fetchContacts());
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
                    <table>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Customer</th>
                                <th>Asunto</th>
                                <th>Comment</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {status === 'loading' ? (
                                <tr><td colSpan={5}>Loading contacts...</td></tr>
                            ) : status === 'succeeded' ? (
                                filteredContacts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).map(contact => (
                                    <tr key={contact.id}>
                                        <td>{contact.date}<br />ID: {contact.id}</td>
                                        <td>{contact.customer}<br />Email: {contact.email}<br />Teléfono: {contact.phone}</td>
                                        <td>{contact.subject}</td>
                                        <td>{contact.comment}</td>
                                        <td>
                                            {activeTab === "all" ? (
                                                <ReviewsButtonStyled onClick={() => handleArchive(contact.id)}>Archive</ReviewsButtonStyled>
                                            ) : (
                                                <ReviewsButtonStyled onClick={() => handleUnarchive(contact.id)}>Unarchive</ReviewsButtonStyled>
                                            )}
                                        </td>
                                    </tr>
                                ))
                            ) : status === 'failed' ? (
                                <tr><td colSpan={5}>{error}</td></tr>
                            ) : null}
                        </tbody>
                    </table>
                </ReviewsStyled>
            </div>
        </>
    );
};

export default Contact;