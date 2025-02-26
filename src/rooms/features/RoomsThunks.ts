import { createAsyncThunk } from '@reduxjs/toolkit';
import { Room } from '../interfaces/RoomInterfaces';

export const fetchRooms = createAsyncThunk<Room[]>(
  'rooms/fetchRooms',
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

      const response = await fetch(`${apiUrl}/rooms`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data: Room[] = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching rooms:', error);
      return rejectWithValue('Failed to fetch rooms');
    }
  }
);

export const fetchRoomById = createAsyncThunk<Room | null, string>(
  'rooms/fetchRoomById',
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

      const response = await fetch(`${apiUrl}/rooms/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data: Room = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching room by ID:', error);
      return rejectWithValue('Failed to fetch room by ID');
    }
  }
);

export const createRoom = createAsyncThunk<Room, Room>(
  'rooms/createRoom',
  async (newRoom: Room, { rejectWithValue }) => {
    try {
      const apiUrl = 'http://localhost:3001';
      if (!apiUrl) {
        throw new Error('API URL is not defined');
      }

      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Token is not available');
      }

      const response = await fetch(`${apiUrl}/rooms`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newRoom),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data: Room = await response.json();
      return data;
    } catch (error) {
      console.error('Error creating room:', error);
      return rejectWithValue('Failed to create room');
    }
  }
);

export const updateRoom = createAsyncThunk<Room, Room>(
  'rooms/updateRoom',
  async (updatedRoom: Room, { rejectWithValue }) => {
    try {
      const apiUrl = 'http://localhost:3001';
      if (!apiUrl) {
        throw new Error('API URL is not defined');
      }

      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Token is not available');
      }

      const response = await fetch(`${apiUrl}/rooms/${updatedRoom.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updatedRoom),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data: Room = await response.json();
      return data;
    } catch (error) {
      console.error('Error updating room:', error);
      return rejectWithValue('Failed to update room');
    }
  }
);

export const deleteRoom = createAsyncThunk<string, string>(
  'rooms/deleteRoom',
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

      const response = await fetch(`${apiUrl}/rooms/${id}`, {
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
      console.error('Error deleting room:', error);
      return rejectWithValue('Failed to delete room');
    }
  }
);