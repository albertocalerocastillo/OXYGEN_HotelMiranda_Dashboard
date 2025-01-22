import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers, fetchUserById, createUser, updateUser, deleteUser } from './UsersThunks';

const initialState = {
  users: [
    {
      id: "#12341225",
      name: "James Sitepu",
      email: "james.sitepu@example.com",
      joinDate: "Aug 2th 2017",
      jobDesk: "Answering guest inquiries, directing phone calls, coordinating travel plans, and more.",
      contact: "012 334 55512",
      status: "ACTIVE",
      profilePhoto: "perfil.jpg"
    },
    {
      id: "#12341226",
      name: "Louis Humbs",
      email: "louis.humbs@example.com",
      joinDate: "Aug 2th 2010",
      jobDesk: "Offer restaurant and activity recommendations and assist guests in arranging transportation",
      contact: "012 334 55512",
      status: "INACTIVE",
      profilePhoto: "perfil.jpg"
    },
    {
      id: "#12341227",
      name: "Sarah Lee",
      email: "sarah.lee@example.com",
      joinDate: "Sep 15th 2018",
      jobDesk: "Managing bookings and customer service.",
      contact: "012 334 55513",
      status: "ACTIVE",
      profilePhoto: "perfil.jpg"
    }
  ],
  user: null
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.users.push(action.payload);
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        const index = state.users.findIndex(user => user.id === action.payload.id);
        if (index !== -1) {
          state.users[index] = action.payload;
        }
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.users = state.users.filter(user => user.id !== action.payload);
      });
  },
});

export default usersSlice.reducer;
