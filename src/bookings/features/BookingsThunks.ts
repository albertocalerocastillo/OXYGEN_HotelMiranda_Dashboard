import { createAsyncThunk } from '@reduxjs/toolkit';
import { Booking } from '../interfaces/BookingInterfaces';

export const fetchBookings = createAsyncThunk<Booking[]>(
  'bookings/fetchBookings',
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

      const response = await fetch(`${apiUrl}/bookings`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data: Booking[] = await response.json();
      return data;
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
      const apiUrl = 'http://localhost:3001';
      if (!apiUrl) {
        throw new Error('API URL is not defined');
      }

      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Token is not available');
      }

      const response = await fetch(`${apiUrl}/bookings/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data: Booking = await response.json();
      return data;
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
      const apiUrl = 'http://localhost:3001';
      if (!apiUrl) {
        throw new Error('API URL is not defined');
      }

      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Token is not available');
      }

      const response = await fetch(`${apiUrl}/bookings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newBooking),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data: Booking = await response.json();
      return data;
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
      const apiUrl = 'http://localhost:3001';
      if (!apiUrl) {
        throw new Error('API URL is not defined');
      }

      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Token is not available');
      }

      const response = await fetch(`${apiUrl}/bookings/${updatedBooking.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updatedBooking),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data: Booking = await response.json();
      return data;
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
      const apiUrl = 'http://localhost:3001';
      if (!apiUrl) {
        throw new Error('API URL is not defined');
      }

      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Token is not available');
      }

      const response = await fetch(`${apiUrl}/bookings/${id}`, {
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
      console.error('Error deleting booking:', error);
      return rejectWithValue('Failed to delete booking');
    }
  }
);