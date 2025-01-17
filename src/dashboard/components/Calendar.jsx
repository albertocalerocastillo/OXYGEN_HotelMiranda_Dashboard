import React, { useState } from "react";
import "react-calendar/dist/Calendar.css";
import {
  StyledCalendarContainer,
  StyledCalendarHeader,
  StyledBookingDetails,
  StyledBookingItem,
  StyledRoomType,
  StyledCustomerName,
  StyledCalendar,
  StyledImageWrapper,
  StyledLargeImageWrapper,
  StyledImage,
  StyledSeparator,
  StyledCalendarWrapper,
  StyledBookingContainer,
  StyledStatsContainer,
  StyledBookingInfo,
  StyledBookingContent,
  StyledTime,
  StyledBookingDays,
  StyledViewMore,
} from "./CalendarStyles"; 
import perfilImage from "../../assets/perfil.jpg";
import ReservationStats from "./ReservationStats"; 

const CustomCalendar = () => {
  const [value, setValue] = useState(new Date());

  const bookings = [
    {
      roomType: "Queen Bed A-12324",
      customer: "James Sukardi",
      days: [3],
      color: "#0E7355",
      imageTop: perfilImage,
      imageBottom: perfilImage
    },
    {
      roomType: "Deluxe Room B-1324",
      customer: "Angela Moss",
      days: [16, 17, 18],
      color: "#E23428",
      imageTop: perfilImage,
      imageBottom: perfilImage
    },
    {
      roomType: "King Big C-2445",
      customer: "Geovanny",
      days: [20],
      color: "#FF9E0F",
      imageTop: perfilImage,
      imageBottom: perfilImage
    },
  ];

  return (
    <StyledCalendarContainer>
      <StyledCalendarHeader>
        <h3>Recent Booking Schedule</h3>
      </StyledCalendarHeader>
      <StyledCalendarWrapper>
        <StyledCalendar
          onChange={setValue}
          value={value}
          tileClassName={({ date, view }) => {
            if (view === "month") {
              const day = date.getDate();
              const booking = bookings.find((b) => b.days.includes(day));
              return booking ? `booking-day-${day}` : null;
            }
          }}
        />
        <StyledStatsContainer>
          <ReservationStats />
        </StyledStatsContainer>
      </StyledCalendarWrapper>
      <StyledSeparator />
      <StyledBookingContainer>
        <StyledBookingDetails>
          {bookings.map((booking, index) => (
            <StyledBookingItem key={index}>
              <StyledLargeImageWrapper>
                <StyledImage src={booking.imageTop} alt="Room Top" />
              </StyledLargeImageWrapper>
              <StyledBookingInfo>
                <StyledRoomType>{booking.roomType}</StyledRoomType>
                <StyledBookingContent>
                  <StyledImageWrapper>
                    <StyledImage src={booking.imageBottom} alt="Room Bottom" />
                    <StyledCustomerName>{booking.customer}</StyledCustomerName>
                    <StyledTime>12min ago</StyledTime>
                  </StyledImageWrapper>
                  <StyledBookingDays color={booking.color}>
                    {booking.days.join(', ')}
                  </StyledBookingDays>
                </StyledBookingContent>
              </StyledBookingInfo>
            </StyledBookingItem>
          ))}
        </StyledBookingDetails>
        <StyledViewMore>View More</StyledViewMore>
      </StyledBookingContainer>
    </StyledCalendarContainer>
  );
};

export default CustomCalendar;