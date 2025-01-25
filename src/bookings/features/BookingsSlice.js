import { createSlice } from '@reduxjs/toolkit';
import { fetchBookings, fetchBookingById, createBooking, updateBooking, deleteBooking } from './BookingsThunks';

const bookingsSlice = createSlice({
  name: 'bookings',
  initialState: { bookings: [], booking: null, status: 'idle', error: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBookings.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBookings.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.bookings = action.payload;
      })
      .addCase(fetchBookings.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchBookingById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBookingById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.booking = action.payload;
      })
      .addCase(fetchBookingById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(createBooking.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createBooking.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.bookings.push(action.payload);
      })
      .addCase(createBooking.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(updateBooking.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateBooking.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const index = state.bookings.findIndex(booking => booking.id === action.payload.id);
        if (index !== -1) {
          state.bookings[index] = action.payload;
        }
      })
      .addCase(updateBooking.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(deleteBooking.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteBooking.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.bookings = state.bookings.filter(booking => booking.id !== action.payload);
      })
      .addCase(deleteBooking.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default bookingsSlice.reducer;