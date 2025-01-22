import { createAsyncThunk } from '@reduxjs/toolkit';

const initialRooms = [
  {
    id: "#0001234",
    photo: "perfil.jpg",
    number: "91234",
    name: "Deluxe A",
    type: "Double Bed",
    amenities: "AC, Shower, Double Bed, Towel, Bathup, Coffee Set, LED TV, Wifi",
    price: "$125",
    offerPrice: "$80",
    status: "Available"
  },
  {
    id: "#000123457",
    photo: "perfil.jpg",
    number: "91234",
    name: "Deluxe A",
    type: "Double Bed",
    amenities: "AC, Shower, Double Bed, Towel, Bathup, Coffee Set, LED TV, Wifi",
    price: "$160",
    offerPrice: "$100",
    status: "Booked"
  },
  {
    id: "#000123458",
    photo: "perfil.jpg",
    number: "91234",
    name: "Deluxe A",
    type: "Double Bed",
    amenities: "AC, Shower, Double Bed, Towel, Bathup, Coffee Set, LED TV, Wifi",
    price: "$145",
    offerPrice: "$90",
    status: "Available"
  }
];

export const fetchRooms = createAsyncThunk('rooms/fetchRooms', async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(initialRooms);
    }, 200);
  });
});

export const fetchRoomById = createAsyncThunk('rooms/fetchRoomById', async (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id });
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