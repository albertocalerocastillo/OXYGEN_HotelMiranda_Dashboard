import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchRooms = createAsyncThunk('rooms/fetchRooms', async () => {
  const response = await fetch('/data/roomsData.json');
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

export const fetchRoomById = createAsyncThunk('rooms/fetchRoomById', async (id) => {
  const response = await fetch('/data/roomsData.json');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data.find(room => room.id === id));
    }, 200);
  });
});

export const createRoom = createAsyncThunk('rooms/createRoom', async (newRoom) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(newRoom);
    }, 200);
  });
});

export const updateRoom = createAsyncThunk('rooms/updateRoom', async (updatedRoom) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(updatedRoom);
    }, 200);
  });
});

export const deleteRoom = createAsyncThunk('rooms/deleteRoom', async (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(id);
    }, 200);
  });
});