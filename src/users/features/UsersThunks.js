import { createAsyncThunk } from '@reduxjs/toolkit';

const initialUsers = [
  {
    id: "#12341225",
    name: "James Sitepu",
    email: "james.sitepu@example.com",
    joinDate: "Aug 2th 2017",
    jobDesk: "Answering guest inquiries, directing phone calls, coordinating travel plans, and more.",
    contact: "012 334 55512",
    status: "ACTIVE",
    profilePhoto: "perfil.jpg"
  },
  {
    id: "#12341226",
    name: "Louis Humbs",
    email: "louis.humbs@example.com",
    joinDate: "Aug 2th 2010",
    jobDesk: "Offer restaurant and activity recommendations and assist guests in arranging transportation",
    contact: "012 334 55512",
    status: "INACTIVE",
    profilePhoto: "perfil.jpg"
  },
  {
    id: "#12341227",
    name: "Sarah Lee",
    email: "sarah.lee@example.com",
    joinDate: "Sep 15th 2018",
    jobDesk: "Managing bookings and customer service.",
    contact: "012 334 55513",
    status: "ACTIVE",
    profilePhoto: "perfil.jpg"
  }
];

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(initialUsers);
    }, 200);
  });
});

export const fetchUserById = createAsyncThunk('users/fetchUserById', async (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id });
    }, 200);
  });
});

export const createUser = createAsyncThunk('users/createUser', async (newUser) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(newUser);
    }, 200);
  });
});

export const updateUser = createAsyncThunk('users/updateUser', async (updatedUser) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(updatedUser);
    }, 200);
  });
});

export const deleteUser = createAsyncThunk('users/deleteUser', async (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(id);
    }, 200);
  });
});