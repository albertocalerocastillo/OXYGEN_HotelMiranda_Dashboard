import { createAsyncThunk } from '@reduxjs/toolkit';
import { Room } from '../interfaces/RoomInterfaces';

export const fetchRooms = createAsyncThunk<Room[]>(
  'rooms/fetchRooms',
  async () => {
    const response = await fetch('/data/roomsData.json');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data: Room[] = await response.json();
    return new Promise<Room[]>((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, 200);
    });
  }
);

export const fetchRoomById = createAsyncThunk<Room | null, string>(
  'rooms/fetchRoomById',
  async (id: string) => {
    const response = await fetch('/data/roomsData.json');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data: Room[] = await response.json();
    return new Promise<Room | null>((resolve) => {
      setTimeout(() => {
        resolve(data.find(room => room.id === id) || null);
      }, 200);
    });
  }
);

export const createRoom = createAsyncThunk<Room, Room>(
  'rooms/createRoom',
  async (newRoom: Room) => {
    return new Promise<Room>((resolve) => {
      setTimeout(() => {
        resolve(newRoom);
      }, 200);
    });
  }
);

export const updateRoom = createAsyncThunk<Room, Room>(
  'rooms/updateRoom',
  async (updatedRoom: Room) => {
    return new Promise<Room>((resolve) => {
      setTimeout(() => {
        resolve(updatedRoom);
      }, 200);
    });
  }
);

export const deleteRoom = createAsyncThunk<string, string>(
  'rooms/deleteRoom',
  async (id: string) => {
    return new Promise<string>((resolve) => {
      setTimeout(() => {
        resolve(id);
      }, 200);
    });
  }
);