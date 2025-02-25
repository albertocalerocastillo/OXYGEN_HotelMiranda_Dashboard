import { createAsyncThunk } from '@reduxjs/toolkit';
import { User } from '../interfaces/UserInterfaces';

export const fetchUsers = createAsyncThunk<User[]>(
  'users/fetchUsers',
  async () => {
    const response = await fetch('/data/usersData.json');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data: User[] = await response.json();
    return new Promise<User[]>((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, 200);
    });
  }
);

export const fetchUserById = createAsyncThunk<User, number>(
  'users/fetchUserById',
  async (id: number) => {
    const response = await fetch('/data/usersData.json');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data: User[] = await response.json();
    const user = data.find(user => user.id === id);
    if (!user) {
      throw new Error('User not found');
    }
    return new Promise<User>((resolve) => {
      setTimeout(() => {
        resolve(user);
      }, 200);
    });
  }
);

export const createUser = createAsyncThunk<User, User>(
  'users/createUser',
  async (newUser: User) => {
    return new Promise<User>((resolve) => {
      setTimeout(() => {
        resolve(newUser);
      }, 200);
    });
  }
);

export const updateUser = createAsyncThunk<User, User>(
  'users/updateUser',
  async (updatedUser: User) => {
    return new Promise<User>((resolve) => {
      setTimeout(() => {
        resolve(updatedUser);
      }, 200);
    });
  }
);

export const deleteUser = createAsyncThunk<number, number>(
  'users/deleteUser',
  async (id: number) => {
    return new Promise<number>((resolve) => {
      setTimeout(() => {
        resolve(id);
      }, 200);
    });
  }
);