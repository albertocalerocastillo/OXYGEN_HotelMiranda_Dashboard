import { createAsyncThunk } from '@reduxjs/toolkit';

const initialContacts = [
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

export const fetchContacts = createAsyncThunk('contact/fetchContacts', async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(initialContacts);
    }, 200);
  });
});

export const fetchContactById = createAsyncThunk('contact/fetchContactById', async (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id });
    }, 200);
  });
});

export const createContact = createAsyncThunk('contact/createContact', async (newContact) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(newContact);
    }, 200);
  });
});

export const updateContact = createAsyncThunk('contact/updateContact', async (updatedContact) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(updatedContact);
    }, 200);
  });
});

export const deleteContact = createAsyncThunk('contact/deleteContact', async (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(id);
    }, 200);
  });
});