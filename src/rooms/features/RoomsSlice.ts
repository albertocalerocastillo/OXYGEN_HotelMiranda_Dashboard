import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchRooms, fetchRoomById, createRoom, updateRoom, deleteRoom } from './RoomsThunks';
import { Room, RoomsState } from '../interfaces/RoomInterfaces';

const initialState: RoomsState = {
  rooms: [],
  room: null,
  status: 'idle',
  error: null,
};

const roomsSlice = createSlice({
  name: 'rooms',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRooms.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRooms.fulfilled, (state, action: PayloadAction<Room[]>) => {
        state.status = 'succeeded';
        state.rooms = action.payload;
      })
      .addCase(fetchRooms.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch rooms';
      })
      .addCase(fetchRoomById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRoomById.fulfilled, (state, action: PayloadAction<Room | null>) => {
        state.status = 'succeeded';
        state.room = action.payload;
      })
      .addCase(fetchRoomById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch room by ID';
      })
      .addCase(createRoom.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createRoom.fulfilled, (state, action: PayloadAction<Room>) => {
        state.status = 'succeeded';
        state.rooms = [...state.rooms, action.payload];
      })
      .addCase(createRoom.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to create room';
      })
      .addCase(updateRoom.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateRoom.fulfilled, (state, action: PayloadAction<Room>) => {
        state.status = 'succeeded';
        const index = state.rooms.findIndex(room => room.id === action.payload.id);
        if (index !== -1) {
          state.rooms[index] = action.payload;
        }
      })
      .addCase(updateRoom.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to update room';
      })
      .addCase(deleteRoom.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteRoom.fulfilled, (state, action: PayloadAction<string>) => {
        state.status = 'succeeded';
        state.rooms = state.rooms.filter(room => room.id !== action.payload);
      })
      .addCase(deleteRoom.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to delete room';
      });
  },
});

export default roomsSlice.reducer;