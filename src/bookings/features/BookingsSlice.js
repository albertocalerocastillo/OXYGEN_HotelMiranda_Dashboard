import { createSlice } from '@reduxjs/toolkit';
import { fetchBookings, fetchBookingById, createBooking, updateBooking, deleteBooking } from './BookingsThunks';

const bookingsSlice = createSlice({
  name: 'bookings',
  initialState: { bookings: [], booking: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBookings.fulfilled, (state, action) => {
        state.bookings = action.payload;
      })
      .addCase(fetchBookingById.fulfilled, (state, action) => {
        state.booking = action.payload;
      })
      .addCase(createBooking.fulfilled, (state, action) => {
        state.bookings.push(action.payload);
      })
      .addCase(updateBooking.fulfilled, (state, action) => {
        const index = state.bookings.findIndex(booking => booking.id === action.payload.id);
        if (index !== -1) {
          state.bookings[index] = action.payload;
        }
      })
      .addCase(deleteBooking.fulfilled, (state, action) => {
        state.bookings = state.bookings.filter(booking => booking.id !== action.payload);
      });
  },
});

export default bookingsSlice.reducer;