import { createAsyncThunk } from '@reduxjs/toolkit';
import { User } from '../interfaces/UserInterfaces';

const apiUrl = 'http://localhost:3001';

export const fetchUsers = createAsyncThunk<User[]>(
    'users/fetchUsers',
    async (_, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('Token is not available');
            }

            const response = await fetch(`${apiUrl}/users`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data: User[] = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching users:', error);
            return rejectWithValue('Failed to fetch users');
        }
    }
);

export const fetchUserById = createAsyncThunk<User, string>(
    'users/fetchUserById',
    async (id: string, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('Token is not available');
            }

            const response = await fetch(`${apiUrl}/users/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data: User = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching user by ID:', error);
            return rejectWithValue('Failed to fetch user by ID');
        }
    }
);

export const createUser = createAsyncThunk<User, User>(
    'users/createUser',
    async (newUser: User, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('Token is not available');
            }

            const response = await fetch(`${apiUrl}/users`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(newUser),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data: User = await response.json();
            return data;
        } catch (error) {
            console.error('Error creating user:', error);
            return rejectWithValue('Failed to create user');
        }
    }
);

export const updateUser = createAsyncThunk<User, User>(
    'users/updateUser',
    async (updatedUser: User, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('Token is not available');
            }

            const response = await fetch(`${apiUrl}/users/${updatedUser.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(updatedUser),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data: User = await response.json();
            return data;
        } catch (error) {
            console.error('Error updating user:', error);
            return rejectWithValue('Failed to update user');
        }
    }
);

export const deleteUser = createAsyncThunk<string, string>(
    'users/deleteUser',
    async (id: string, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('Token is not available');
            }

            const response = await fetch(`${apiUrl}/users/${id}`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            return id;
        } catch (error) {
            console.error('Error deleting user:', error);
            return rejectWithValue('Failed to delete user');
        }
    }
);