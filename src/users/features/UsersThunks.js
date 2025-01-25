import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await fetch('/data/usersData.json');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 200);
  });
});

export const fetchUserById = createAsyncThunk('users/fetchUserById', async (id) => {
  const response = await fetch('/data/usersData.json');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data.find(user => user.id === id));
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