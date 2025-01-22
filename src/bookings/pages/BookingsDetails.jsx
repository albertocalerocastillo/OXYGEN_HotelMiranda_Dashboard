import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BookingsData from '../components/bookingsData.json';
import perfil from '../../assets/perfil.jpg';  // Importa la imagen correctamente
import {
  BookingsDetailsStyled,
  BookingsDetailsLeftStyled,
  BookingsDetailsRightStyled,
  BookingsDetailsAmenitiesContainerStyled,
  BookingsDetailsAmenitiesItemStyled,
  BookingsDetailsAmenitiesTextStyled,
  BookingsDetailsFieldBoldInfoStyled,
  BookingsDetailsFieldInfoStyled,
  BookingsDetailsFieldTitleStyled,
  BookingsDetailsHorizontalContainer,
  BookingsDetailsIdStyled,
  BookingsDetailsInfoStyled,
  BookingsDetailsNameStyled,
  BookingsDetailsPhotoContainerStyled,
  BookingsDetailsPhotoDescriptionStyled,
  BookingsDetailsPhotoImageStyled,
  BookingsDetailsPhotoTagStyled,
  BookingsDetailsPhotoTitleStyled,
  BookingStatusStyled
} from '../components/BookingsDetailsStyles';

const BookingsDetails = () => {
  const [booking, setBooking] = useState({});
  const { bookingId } = useParams();

  useEffect(() => {
    const selectedBooking = BookingsData.find((booking) => booking.id === bookingId);
    setBooking(selectedBooking);
  }, [bookingId]);

  return (
    <BookingsDetailsStyled>
      <BookingsDetailsLeftStyled>
        <BookingsDetailsInfoStyled>
          <BookingsDetailsNameStyled>{booking?.guest ?? "Alberto Calero"}</BookingsDetailsNameStyled>
          <BookingsDetailsIdStyled>{booking?.id ?? "ID 1234124512551"}</BookingsDetailsIdStyled>
          <BookingsDetailsFieldTitleStyled>Check In</BookingsDetailsFieldTitleStyled>
          <BookingsDetailsFieldInfoStyled>{booking?.checkInDate ?? "October 30th, 2020"} | {booking?.checkInTime ?? "08:23 AM"}</BookingsDetailsFieldInfoStyled>
          <BookingsDetailsFieldTitleStyled>Check Out</BookingsDetailsFieldTitleStyled>
          <BookingsDetailsFieldInfoStyled>{booking?.checkOutDate ?? "November 2th, 2020"}</BookingsDetailsFieldInfoStyled>
          <BookingsDetailsFieldTitleStyled>Room Info</BookingsDetailsFieldTitleStyled>
          <BookingsDetailsFieldBoldInfoStyled>{booking?.roomType ?? "Deluxe Z"} - {booking?.roomNumber ?? "002424"}</BookingsDetailsFieldBoldInfoStyled>
          <BookingsDetailsFieldTitleStyled>Price</BookingsDetailsFieldTitleStyled>
          <BookingsDetailsFieldBoldInfoStyled>{booking?.price ?? "$145"} <span>/night</span></BookingsDetailsFieldBoldInfoStyled>
          <BookingsDetailsFieldTitleStyled>Special Request</BookingsDetailsFieldTitleStyled>
          <BookingsDetailsFieldInfoStyled>{booking?.specialRequest ?? "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"}</BookingsDetailsFieldInfoStyled>
        </BookingsDetailsInfoStyled>
        <BookingsDetailsFieldTitleStyled>Amenities</BookingsDetailsFieldTitleStyled>
        <BookingsDetailsAmenitiesContainerStyled>
          <BookingsDetailsAmenitiesItemStyled>
            <BookingsDetailsAmenitiesTextStyled>Free Wifi</BookingsDetailsAmenitiesTextStyled>
          </BookingsDetailsAmenitiesItemStyled>
          <BookingsDetailsAmenitiesItemStyled>
            <BookingsDetailsAmenitiesTextStyled>3 Bed Space</BookingsDetailsAmenitiesTextStyled>
          </BookingsDetailsAmenitiesItemStyled>
          <BookingsDetailsAmenitiesItemStyled>
            <BookingsDetailsAmenitiesTextStyled>24 Hours Guard</BookingsDetailsAmenitiesTextStyled>
          </BookingsDetailsAmenitiesItemStyled>
          <BookingsDetailsAmenitiesItemStyled>
            <BookingsDetailsAmenitiesTextStyled>2 Bathroom</BookingsDetailsAmenitiesTextStyled>
          </BookingsDetailsAmenitiesItemStyled>
          <BookingsDetailsAmenitiesItemStyled>
            <BookingsDetailsAmenitiesTextStyled>Air Conditioner</BookingsDetailsAmenitiesTextStyled>
          </BookingsDetailsAmenitiesItemStyled>
          <BookingsDetailsAmenitiesItemStyled>
            <BookingsDetailsAmenitiesTextStyled>Television</BookingsDetailsAmenitiesTextStyled>
          </BookingsDetailsAmenitiesItemStyled>
        </BookingsDetailsAmenitiesContainerStyled>
      </BookingsDetailsLeftStyled>
      <BookingsDetailsRightStyled>
        <BookingsDetailsPhotoContainerStyled>
          <BookingsDetailsPhotoImageStyled src={perfil} alt="Room Image" />
          <BookingsDetailsPhotoTagStyled>BOOKED</BookingsDetailsPhotoTagStyled>
          <BookingsDetailsPhotoTitleStyled>{booking?.roomType ?? "Bed Room"}</BookingsDetailsPhotoTitleStyled>
          <BookingsDetailsPhotoDescriptionStyled>{booking?.description ?? "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerci"}</BookingsDetailsPhotoDescriptionStyled>
        </BookingsDetailsPhotoContainerStyled>
        <BookingStatusStyled status={booking?.status ?? "IN PROGRESS"}>{booking?.status ?? "IN PROGRESS"}</BookingStatusStyled>
      </BookingsDetailsRightStyled>
    </BookingsDetailsStyled>
  );
};

export default BookingsDetails;
