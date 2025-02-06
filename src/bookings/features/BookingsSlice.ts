import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchBookings, fetchBookingById, createBooking, updateBooking, deleteBooking } from './BookingsThunks';
import { Booking, BookingsState } from '../interfaces/BookingInterfaces';

const initialState: BookingsState = {
  bookings: [],
  booking: null,
  status: 'idle',
  error: null,
};

const bookingsSlice = createSlice({
  name: 'bookings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBookings.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBookings.fulfilled, (state, action: PayloadAction<Booking[]>) => {
        state.status = 'succeeded';
        state.bookings = action.payload;
      })
      .addCase(fetchBookings.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch bookings';
      })
      .addCase(fetchBookingById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBookingById.fulfilled, (state, action: PayloadAction<Booking | null>) => {
        state.status = 'succeeded';
        state.booking = action.payload;
      })
      .addCase(fetchBookingById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch booking by ID';
      })
      .addCase(createBooking.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createBooking.fulfilled, (state, action: PayloadAction<Booking>) => {
        state.status = 'succeeded';
        state.bookings.push(action.payload);
      })
      .addCase(createBooking.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to create booking';
      })
      .addCase(updateBooking.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateBooking.fulfilled, (state, action: PayloadAction<Booking>) => {
        state.status = 'succeeded';
        const index = state.bookings.findIndex(booking => booking.id === action.payload.id);
        if (index !== -1) {
          state.bookings[index] = action.payload;
        }
      })
      .addCase(updateBooking.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to update booking';
      })
      .addCase(deleteBooking.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteBooking.fulfilled, (state, action: PayloadAction<string>) => {
        state.status = 'succeeded';
        state.bookings = state.bookings.filter(booking => booking.id !== action.payload);
      })
      .addCase(deleteBooking.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to delete booking';
      });
  },
});

export default bookingsSlice.reducer;