import { createAsyncThunk } from '@reduxjs/toolkit';
import { Contact } from '../interfaces/ContactInterfaces';

export const fetchContacts = createAsyncThunk<Contact[]>(
    'contact/fetchContacts',
    async (_, { rejectWithValue }) => {
        try {
            const apiUrl = 'http://localhost:3001';
            if (!apiUrl) {
                throw new Error('API URL is not defined');
            }

            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('Token is not available');
            }

            const response = await fetch(`${apiUrl}/contacts`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data: Contact[] = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching contacts:', error);
            return rejectWithValue('Failed to fetch contacts');
        }
    }
);

export const fetchContactById = createAsyncThunk<Contact | null, string>(
    'contact/fetchContactById',
    async (id: string, { rejectWithValue }) => {
        try {
            const apiUrl = 'http://localhost:3001';
            if (!apiUrl) {
                throw new Error('API URL is not defined');
            }

            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('Token is not available');
            }

            const response = await fetch(`${apiUrl}/contacts/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data: Contact = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching contact by ID:', error);
            return rejectWithValue('Failed to fetch contact by ID');
        }
    }
);

export const createContact = createAsyncThunk<Contact, Contact>(
    'contact/createContact',
    async (newContact: Contact, { rejectWithValue }) => {
        try {
            const apiUrl = 'http://localhost:3001';
            if (!apiUrl) {
                throw new Error('API URL is not defined');
            }

            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('Token is not available');
            }

            const response = await fetch(`${apiUrl}/contacts`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(newContact),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data: Contact = await response.json();
            return data;
        } catch (error) {
            console.error('Error creating contact:', error);
            return rejectWithValue('Failed to create contact');
        }
    }
);

export const updateContact = createAsyncThunk<Contact, Contact>(
    'contact/updateContact',
    async (updatedContact: Contact, { rejectWithValue }) => {
        try {
            const apiUrl = 'http://localhost:3001';
            if (!apiUrl) {
                throw new Error('API URL is not defined');
            }

            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('Token is not available');
            }

            const response = await fetch(`${apiUrl}/contacts/${updatedContact.id}/archive?archived=${updatedContact.archived}`, { // Ruta corregida
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data: Contact = await response.json();
            return data;
        } catch (error) {
            console.error('Error updating contact:', error);
            return rejectWithValue('Failed to update contact');
        }
    }
);

export const deleteContact = createAsyncThunk<string, string>(
    'contact/deleteContact',
    async (id: string, { rejectWithValue }) => {
        try {
            const apiUrl = 'http://localhost:3001';
            if (!apiUrl) {
                throw new Error('API URL is not defined');
            }

            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('Token is not available');
            }

            const response = await fetch(`${apiUrl}/contacts/${id}`, {
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
            console.error('Error deleting contact:', error);
            return rejectWithValue('Failed to delete contact');
        }
    }
);