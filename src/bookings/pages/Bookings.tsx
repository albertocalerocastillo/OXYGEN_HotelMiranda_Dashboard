import React, { useEffect, useState } from "react";
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
import { RootState, AppDispatch } from '../../store/store';
import { Booking } from '../interfaces/BookingInterfaces';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Bookings: React.FC = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const { bookings, status, error } = useSelector((state: RootState) => state.bookings);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(fetchBookings());
  }, [dispatch]);

  useEffect(() => {
    console.log("Bookings fetched:", bookings);
    if (status === 'loading') {
      toast.info("Loading bookings...", {
        autoClose: 1000,
        toastId: 'loading'
      });
    } else if (status === 'succeeded') {
      toast.dismiss('loading');
      toast.success("Bookings loaded successfully!", {
        autoClose: 3000,
        toastId: 'success'
      });
    } else if (status === 'failed') {
      toast.dismiss('loading');
      toast.error(`Failed to load bookings: ${error}`, {
        autoClose: 3000,
        toastId: 'error'
      });
    }
  }, [status, error, bookings]);

  const handleViewNotes = (bookingId: string, status: string) => {
    if (status === "Booked") {
      navigate(`/bookings/details/${bookingId}`);
    }
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    console.log("Search term:", event.target.value);
  };

  const filteredBookings = bookings.filter(booking => 
    booking.guest && booking.guest.toLowerCase().includes(searchTerm.toLowerCase())
  );

  console.log("Filtered Bookings:", filteredBookings);

  let content;

  if (status === 'loading') {
    content = <p>Loading bookings...</p>;
  } else if (status === 'succeeded' && filteredBookings.length > 0) {
    content = filteredBookings.map((booking: Booking) => (
      <BookingsItemStyled key={booking.id} data-cy="bookingItem">
        <BookingsItemBookingsStyled>
          <BookingsItemBookingsPhotoStyled src={photo} alt="Guest photo" />
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
        <BookingsItemSpecialRequestStyled type={booking.specialRequestType.toLowerCase()} onClick={() => handleViewNotes(booking.id, booking.status)}>
          {booking.specialRequest}
        </BookingsItemSpecialRequestStyled>
        <BookingsItemTextStyled>{booking.roomType}</BookingsItemTextStyled>
        <BookingsItemStatusStyled type={booking.status.toLowerCase()}>{booking.status}</BookingsItemStatusStyled>
        <SlOptionsVertical />
      </BookingsItemStyled>
    ));
  } else if (status === 'failed') {
    content = <p>{error}</p>;
  } else {
    content = <p>No bookings available</p>;
  }

  console.log("Content:", content);

  return (
    <>
      <ToastContainer />
      <BookingsStyled data-cy="bookings">
        <BookingsMenuStyled>
          <BookingsMenuTextStyled>
            <BookingsMenuItemStyled>All Bookings</BookingsMenuItemStyled>
            <BookingsMenuItemStyled>Checking In</BookingsMenuItemStyled>
            <BookingsMenuItemStyled>Checking Out</BookingsMenuItemStyled>
            <BookingsMenuItemStyled>In Progress</BookingsMenuItemStyled>
          </BookingsMenuTextStyled>
          <BookingsMenuSearchBarStyled>
            <BookingsMenuSearchBarInputStyled type="text" placeholder="Buscar cliente..." value={searchTerm} onChange={handleSearch} />
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
        {content}
      </BookingsStyled>
    </>
  );
};

export default Bookings;