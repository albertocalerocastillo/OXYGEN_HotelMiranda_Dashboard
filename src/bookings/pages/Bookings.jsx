import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { fetchBookings } from '../features/BookingsThunks';
import {
  BookingsFirstRowItemStyled,
  BookingsFirstRowStyled,
  BookingsItemCheckHourStyled,
  BookingsItemCheckStyled,
  BookingsItemBookingsIdStyled,
  BookingsItemBookingsInfoStyled,
  BookingsItemBookingsPhotoStyled,
  BookingsItemBookingsStyled,
  BookingsItemOrderDateStyled,
  BookingsItemSpecialRequestStyled,
  BookingsItemStatusStyled,
  BookingsItemStyled,
  BookingsItemTextStyled,
  BookingsMenuItemStyled,
  BookingsMenuSearchBarInputStyled,
  BookingsMenuSearchBarStyled,
  BookingsMenuSortBy,
  BookingsMenuSortByText,
  BookingsMenuStyled,
  BookingsMenuTextStyled,
  BookingsStyled
} from "../components/BookingsStyles";
import photo from '../../assets/perfil.jpg';
import { SlOptionsVertical } from "react-icons/sl";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";

const Bookings = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const bookings = useSelector((state) => state.bookings.bookings);

  useEffect(() => {
    dispatch(fetchBookings());
  }, [dispatch]);

  const handleViewNotes = (bookingId, status) => {
    if (status === "Booked") {
      navigate(`/bookings/details/${bookingId}`);
    }
  };

  return (
    <BookingsStyled>
      <BookingsMenuStyled>
        <BookingsMenuTextStyled>
          <BookingsMenuItemStyled>All Bookings</BookingsMenuItemStyled>
          <BookingsMenuItemStyled>Checking In</BookingsMenuItemStyled>
          <BookingsMenuItemStyled>Checking Out</BookingsMenuItemStyled>
          <BookingsMenuItemStyled>In Progress</BookingsMenuItemStyled>
        </BookingsMenuTextStyled>
        <BookingsMenuSearchBarStyled>
          <BookingsMenuSearchBarInputStyled type="text" placeholder="Buscar cliente..." />
          <IoIosSearch />
        </BookingsMenuSearchBarStyled>
        <BookingsMenuSortBy>
          <BookingsMenuSortByText>Newest</BookingsMenuSortByText>
          <IoIosArrowDown />
        </BookingsMenuSortBy>
      </BookingsMenuStyled>
      <BookingsFirstRowStyled>
        <BookingsFirstRowItemStyled>Guest</BookingsFirstRowItemStyled>
        <BookingsFirstRowItemStyled>Order Date</BookingsFirstRowItemStyled>
        <BookingsFirstRowItemStyled>Check In</BookingsFirstRowItemStyled>
        <BookingsFirstRowItemStyled>Check Out</BookingsFirstRowItemStyled>
        <BookingsFirstRowItemStyled>Special Request</BookingsFirstRowItemStyled>
        <BookingsFirstRowItemStyled>Room Type</BookingsFirstRowItemStyled>
        <BookingsFirstRowItemStyled>Status</BookingsFirstRowItemStyled>
      </BookingsFirstRowStyled>
      {bookings.map((booking) => (
        <BookingsItemStyled key={booking.id}>
          <BookingsItemBookingsStyled>
            <BookingsItemBookingsPhotoStyled src={photo} />
            <BookingsItemBookingsInfoStyled>
              <BookingsItemTextStyled>{booking.guest}</BookingsItemTextStyled>
              <BookingsItemBookingsIdStyled>{booking.id}</BookingsItemBookingsIdStyled>
            </BookingsItemBookingsInfoStyled>
          </BookingsItemBookingsStyled>
          <BookingsItemOrderDateStyled>{booking.orderDate}</BookingsItemOrderDateStyled>
          <BookingsItemCheckStyled>
            <BookingsItemTextStyled>{booking.checkInDate}</BookingsItemTextStyled>
            <BookingsItemCheckHourStyled>{booking.checkInTime}</BookingsItemCheckHourStyled>
          </BookingsItemCheckStyled>
          <BookingsItemCheckStyled>
            <BookingsItemTextStyled>{booking.checkOutDate}</BookingsItemTextStyled>
            <BookingsItemCheckHourStyled>{booking.checkOutTime}</BookingsItemCheckHourStyled>
          </BookingsItemCheckStyled>
          <BookingsItemSpecialRequestStyled type={booking.specialRequestType} onClick={() => handleViewNotes(booking.id, booking.status)}>
            {booking.specialRequest}
          </BookingsItemSpecialRequestStyled>
          <BookingsItemTextStyled>{booking.roomType}</BookingsItemTextStyled>
          <BookingsItemStatusStyled type={booking.status.toLowerCase()}>{booking.status}</BookingsItemStatusStyled>
          <SlOptionsVertical />
        </BookingsItemStyled>
      ))}
    </BookingsStyled>
  );
};

export default Bookings;