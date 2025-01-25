import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchBookings = createAsyncThunk('bookings/fetchBookings', async () => {
  const response = await fetch('/data/bookingsData.json');
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

export const fetchBookingById = createAsyncThunk('bookings/fetchBookingById', async (id) => {
  const response = await fetch('/data/bookingsData.json');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data.find(booking => booking.id === id));
    }, 200);
  });
});

export const createBooking = createAsyncThunk('bookings/createBooking', async (newBooking) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(newBooking);
    }, 200);
  });
});

export const updateBooking = createAsyncThunk('bookings/updateBooking', async (updatedBooking) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(updatedBooking);
    }, 200);
  });
});

export const deleteBooking = createAsyncThunk('bookings/deleteBooking', async (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(id);
    }, 200);
  });
});