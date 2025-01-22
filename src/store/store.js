import { configureStore } from '@reduxjs/toolkit';
import bookingsReducer from '../bookings/features/BookingsSlice';
import roomsReducer from '../rooms/features/RoomsSlice';
import usersReducer from '../users/features/UsersSlice';
import contactReducer from '../contact/features/ContactSlice.js';

const store = configureStore({
  reducer: {
    bookings: bookingsReducer,
    rooms: roomsReducer,
    users: usersReducer,
    contact: contactReducer,
  },
});

export default store;