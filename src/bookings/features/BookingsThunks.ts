import { createAsyncThunk } from '@reduxjs/toolkit';
import { Booking } from '../interfaces/BookingInterfaces';

export const fetchBookings = createAsyncThunk<Booking[]>(
  'bookings/fetchBookings',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('/data/bookingsData.json');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data: Booking[] = await response.json();
      console.log('Fetched Data:', data);
      return new Promise<Booking[]>((resolve) => {
        setTimeout(() => {
          resolve(data);
        }, 200);
      });
    } catch (error) {
      console.error('Error fetching bookings:', error);
      return rejectWithValue('Failed to fetch bookings');
    }
  }
);

export const fetchBookingById = createAsyncThunk<Booking | null, string>(
  'bookings/fetchBookingById',
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await fetch('/data/bookingsData.json');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data: Booking[] = await response.json();
      return new Promise<Booking | null>((resolve) => {
        setTimeout(() => {
          resolve(data.find(booking => booking.id === id) || null);
        }, 200);
      });
    } catch (error) {
      console.error('Error fetching booking by ID:', error);
      return rejectWithValue('Failed to fetch booking by ID');
    }
  }
);

export const createBooking = createAsyncThunk<Booking, Booking>(
  'bookings/createBooking',
  async (newBooking: Booking, { rejectWithValue }) => {
    try {
      return new Promise<Booking>((resolve) => {
        setTimeout(() => {
          resolve(newBooking);
        }, 200);
      });
    } catch (error) {
      console.error('Error creating booking:', error);
      return rejectWithValue('Failed to create booking');
    }
  }
);

export const updateBooking = createAsyncThunk<Booking, Booking>(
  'bookings/updateBooking',
  async (updatedBooking: Booking, { rejectWithValue }) => {
    try {
      return new Promise<Booking>((resolve) => {
        setTimeout(() => {
          resolve(updatedBooking);
        }, 200);
      });
    } catch (error) {
      console.error('Error updating booking:', error);
      return rejectWithValue('Failed to update booking');
    }
  }
);

export const deleteBooking = createAsyncThunk<string, string>(
  'bookings/deleteBooking',
  async (id: string, { rejectWithValue }) => {
    try {
      return new Promise<string>((resolve) => {
        setTimeout(() => {
          resolve(id);
        }, 200);
      });
    } catch (error) {
      console.error('Error deleting booking:', error);
      return rejectWithValue('Failed to delete booking');
    }
  }
);