import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchContacts, fetchContactById, createContact, updateContact, deleteContact } from './ContactThunks';
import { Contact, ContactsState } from '../interfaces/ContactInterfaces';

const initialState: ContactsState = {
  contacts: [],
  contact: null,
  status: 'idle',
  error: null,
};

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchContacts.fulfilled, (state, action: PayloadAction<Contact[]>) => {
        state.status = 'succeeded';
        state.contacts = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch contacts';
      })
      .addCase(fetchContactById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchContactById.fulfilled, (state, action: PayloadAction<Contact | null>) => {
        state.status = 'succeeded';
        state.contact = action.payload;
      })
      .addCase(fetchContactById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch contact by ID';
      })
      .addCase(createContact.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createContact.fulfilled, (state, action: PayloadAction<Contact>) => {
        state.status = 'succeeded';
        state.contacts.push(action.payload);
      })
      .addCase(createContact.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to create contact';
      })
      .addCase(updateContact.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateContact.fulfilled, (state, action: PayloadAction<Contact>) => {
        state.status = 'succeeded';
        const index = state.contacts.findIndex((contact: Contact) => contact.id === action.payload.id);
        if (index !== -1) {
          state.contacts[index] = { ...state.contacts[index], ...action.payload };
        }
      })
      .addCase(updateContact.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to update contact';
      })
      .addCase(deleteContact.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteContact.fulfilled, (state, action: PayloadAction<string>) => {
        state.status = 'succeeded';
        state.contacts = state.contacts.filter((contact: Contact) => contact.id !== action.payload);
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to delete contact';
      });
  },
});

export default contactSlice.reducer;