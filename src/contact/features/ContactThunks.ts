import { createAsyncThunk } from '@reduxjs/toolkit';
import { Contact } from '../interfaces/ContactInterfaces';

const initialContacts: Contact[] = [
  {
    id: "#000123456",
    date: "Nov 21th 2020 09:21 AM",
    customer: "James Sitepu",
    email: "jamesitepu@gmail.com",
    phone: "635 267 398",
    subject: "Dinner",
    comment: "Lorem ipsum dolor sit amet.",
    archived: false
  },
  {
    id: "#000123457",
    date: "Nov 21th 2020 09:21 AM",
    customer: "Hendric Lukaku",
    email: "hendricklukaku@gamil.com",
    phone: "622 217 399",
    subject: "Food",
    comment: "Lorem ipsum dolor sit amet.",
    archived: false
  },
  {
    id: "#000123458",
    date: "Nov 21th 2020 09:21 AM",
    customer: "Yosep Saragih",
    email: "yosepsaragih@gmail.com",
    phone: "619 001 934",
    subject: "Evening",
    comment: "Lorem ipsum dolor sit amet.",
    archived: false
  },
  {
    id: "#000123459",
    date: "Nov 21th 2020 09:21 AM",
    customer: "Hendric Lukaku",
    email: "hendricklukaku@gamil.com",
    phone: "622 217 399",
    subject: "Food",
    comment: "Lorem ipsum dolor sit amet.",
    archived: false
  },
  {
    id: "#000123450",
    date: "Nov 21th 2020 09:21 AM",
    customer: "James Sitepu",
    email: "jamesitepu@gmail.com",
    phone: "123-456-7890",
    subject: "Lorem",
    comment: "Lorem ipsum dolor sit amet.",
    archived: false
  }
];

export const fetchContacts = createAsyncThunk<Contact[]>(
  'contact/fetchContacts',
  async () => {
    return new Promise<Contact[]>((resolve) => {
      setTimeout(() => {
        resolve(initialContacts);
      }, 200);
    });
  }
);

export const fetchContactById = createAsyncThunk<Contact | null, string>(
  'contact/fetchContactById',
  async (id: string) => {
    return new Promise<Contact | null>((resolve) => {
      setTimeout(() => {
        const contact = initialContacts.find(contact => contact.id === id);
        resolve(contact || null);
      }, 200);
    });
  }
);

export const createContact = createAsyncThunk<Contact, Contact>(
  'contact/createContact',
  async (newContact: Contact) => {
    return new Promise<Contact>((resolve) => {
      setTimeout(() => {
        resolve(newContact);
      }, 200);
    });
  }
);

export const updateContact = createAsyncThunk<Contact, Contact>(
  'contact/updateContact',
  async (updatedContact: Contact) => {
    return new Promise<Contact>((resolve) => {
      setTimeout(() => {
        resolve(updatedContact);
      }, 200);
    });
  }
);

export const deleteContact = createAsyncThunk<string, string>(
  'contact/deleteContact',
  async (id: string) => {
    return new Promise<string>((resolve) => {
      setTimeout(() => {
        resolve(id);
      }, 200);
    });
  }
);