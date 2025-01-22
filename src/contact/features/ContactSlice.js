import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, fetchContactById, createContact, updateContact, deleteContact } from './ContactThunks';

const contactSlice = createSlice({
  name: 'contact',
  initialState: { contacts: [], contact: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts = action.payload;
      })
      .addCase(fetchContactById.fulfilled, (state, action) => {
        state.contact = action.payload;
      })
      .addCase(createContact.fulfilled, (state, action) => {
        state.contacts.push(action.payload);
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        const index = state.contacts.findIndex(contact => contact.id === action.payload.id);
        if (index !== -1) {
          state.contacts[index] = { ...state.contacts[index], ...action.payload };
        }
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
      });
  },
});

export default contactSlice.reducer;