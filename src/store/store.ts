import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import bookingsReducer from '../bookings/features/BookingsSlice';
import roomsReducer from '../rooms/features/RoomsSlice';
import usersReducer from '../users/features/UsersSlice';
import contactReducer from '../contact/features/ContactSlice';

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

const store = configureStore({
  reducer: {
    bookings: bookingsReducer,
    rooms: roomsReducer,
    users: usersReducer,
    contact: contactReducer,
  },
});

export default store;