import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, fetchContactById, createContact, updateContact, deleteContact } from './ContactThunks';

const contactSlice = createSlice({
  name: 'contact',
  initialState: { contacts: [], contact: null, status: 'idle', error: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.contacts = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchContactById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchContactById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.contact = action.payload;
      })
      .addCase(fetchContactById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(createContact.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createContact.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.contacts.push(action.payload);
      })
      .addCase(createContact.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(updateContact.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const index = state.contacts.findIndex(contact => contact.id === action.payload.id);
        if (index !== -1) {
          state.contacts[index] = { ...state.contacts[index], ...action.payload };
        }
      })
      .addCase(updateContact.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(deleteContact.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default contactSlice.reducer;