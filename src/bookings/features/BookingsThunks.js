import { createAsyncThunk } from '@reduxjs/toolkit';

const initialBookings = [
  {
    id: "#000123456",
    guest: "Alberto Calero",
    orderDate: "Oct 30th 2020 09:21 AM",
    checkInDate: "Nov 2th, 2020",
    checkInTime: "9:46 PM",
    checkOutDate: "Nov 4th, 2020",
    checkOutTime: "6:12 PM",
    specialRequest: "View Notes",
    roomType: "Deluxe A - 02",
    status: "Refund",
    specialRequestType: "default"
  },
  {
    id: "#000123457",
    guest: "Alberto Calero",
    orderDate: "Oct 30th 2020 09:21 AM",
    checkInDate: "Nov 2th, 2020",
    checkInTime: "9:46 PM",
    checkOutDate: "Nov 4th, 2020",
    checkOutTime: "6:12 PM",
    specialRequest: "View Notes",
    roomType: "Deluxe A - 02",
    status: "Booked",
    specialRequestType: "booked"
  },
  {
    id: "#000123458",
    guest: "Alberto Calero",
    orderDate: "Oct 30th 2020 09:21 AM",
    checkInDate: "Nov 2th, 2020",
    checkInTime: "9:46 PM",
    checkOutDate: "Nov 4th, 2020",
    checkOutTime: "6:12 PM",
    specialRequest: "View Notes",
    roomType: "Deluxe A - 02",
    status: "Pending",
    specialRequestType: "default"
  },
  {
    id: "#000123459",
    guest: "Alberto Calero",
    orderDate: "Oct 30th 2020 09:21 AM",
    checkInDate: "Nov 2th, 2020",
    checkInTime: "9:46 PM",
    checkOutDate: "Nov 4th, 2020",
    checkOutTime: "6:12 PM",
    specialRequest: "View Notes",
    roomType: "Deluxe A - 02",
    status: "Canceled",
    specialRequestType: "default"
  },
  {
    id: "#000123460",
    guest: "Alberto Calero",
    orderDate: "Oct 30th 2020 09:21 AM",
    checkInDate: "Nov 2th, 2020",
    checkInTime: "9:46 PM",
    checkOutDate: "Nov 4th, 2020",
    checkOutTime: "6:12 PM",
    specialRequest: "View Notes",
    roomType: "Deluxe A - 02",
    status: "Refund",
    specialRequestType: "default"
  },
  {
    id: "#000123461",
    guest: "Alberto Calero",
    orderDate: "Oct 30th 2020 09:21 AM",
    checkInDate: "Nov 2th, 2020",
    checkInTime: "9:46 PM",
    checkOutDate: "Nov 4th, 2020",
    checkOutTime: "6:12 PM",
    specialRequest: "View Notes",
    roomType: "Deluxe A - 02",
    status: "Booked",
    specialRequestType: "booked"
  },
  {
    id: "#000123462",
    guest: "Alberto Calero",
    orderDate: "Oct 30th 2020 09:21 AM",
    checkInDate: "Nov 2th, 2020",
    checkInTime: "9:46 PM",
    checkOutDate: "Nov 4th, 2020",
    checkOutTime: "6:12 PM",
    specialRequest: "View Notes",
    roomType: "Deluxe A - 02",
    status: "Pending",
    specialRequestType: "default"
  },
  {
    id: "#000123463",
    guest: "Alberto Calero",
    orderDate: "Oct 30th 2020 09:21 AM",
    checkInDate: "Nov 2th, 2020",
    checkInTime: "9:46 PM",
    checkOutDate: "Nov 4th, 2020",
    checkOutTime: "6:12 PM",
    specialRequest: "View Notes",
    roomType: "Deluxe A - 02",
    status: "Canceled",
    specialRequestType: "default"
  }
];

export const fetchBookings = createAsyncThunk('bookings/fetchBookings', async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(initialBookings);
    }, 200);
  });
});

export const fetchBookingById = createAsyncThunk('bookings/fetchBookingById', async (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id });
    }, 200);
  });
});

export const createBooking = createAsyncThunk('bookings/createBooking', async (newBooking) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(newBooking);
    }, 200);
  });
});

export const updateBooking = createAsyncThunk('bookings/updateBooking', async (updatedBooking) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(updatedBooking);
    }, 200);
  });
});

export const deleteBooking = createAsyncThunk('bookings/deleteBooking', async (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(id);
    }, 200);
  });
});