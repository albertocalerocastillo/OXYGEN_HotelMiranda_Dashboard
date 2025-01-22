import { createSlice } from '@reduxjs/toolkit';
import { fetchRooms, fetchRoomById, createRoom, updateRoom, deleteRoom } from './RoomsThunks';

const roomsSlice = createSlice({
  name: 'rooms',
  initialState: { rooms: [], room: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRooms.fulfilled, (state, action) => {
        state.rooms = action.payload;
      })
      .addCase(fetchRoomById.fulfilled, (state, action) => {
        state.room = action.payload;
      })
      .addCase(createRoom.fulfilled, (state, action) => {
        state.rooms.push(action.payload);
      })
      .addCase(updateRoom.fulfilled, (state, action) => {
        const index = state.rooms.findIndex(room => room.id === action.payload.id);
        if (index !== -1) {
          state.rooms[index] = action.payload;
        }
      })
      .addCase(deleteRoom.fulfilled, (state, action) => {
        state.rooms = state.rooms.filter(room => room.id !== action.payload);
      });
  },
});

export default roomsSlice.reducer;