import { createSlice } from '@reduxjs/toolkit';
import { fetchRooms, fetchRoomById, createRoom, updateRoom, deleteRoom } from './RoomsThunks';

const roomsSlice = createSlice({
  name: 'rooms',
  initialState: { rooms: [], room: null, status: 'idle', error: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRooms.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRooms.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.rooms = action.payload;
      })
      .addCase(fetchRooms.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchRoomById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRoomById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.room = action.payload;
      })
      .addCase(fetchRoomById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(createRoom.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createRoom.fulfilled, (state, action) => {
        state.status = 'succeeded';
        console.log(action.payload)
        state.rooms  = [...state.rooms,action.payload]
      })
      .addCase(createRoom.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(updateRoom.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateRoom.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const index = state.rooms.findIndex(room => room.id === action.payload.id);
        if (index !== -1) {
          state.rooms[index] = action.payload;
        }
      })
      .addCase(updateRoom.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(deleteRoom.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteRoom.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.rooms = state.rooms.filter(room => room.id !== action.payload);
      })
      .addCase(deleteRoom.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default roomsSlice.reducer;