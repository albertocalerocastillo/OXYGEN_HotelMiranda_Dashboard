import styled from "styled-components";
import Calendar from "react-calendar";

export const StyledCalendarContainer = styled.div`
    background-color: #ffffff;
    border-radius: 12px;
    padding: 24px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    width: 100%; 
    margin-top: -5rem;
    margin-bottom: 3rem;
`;

export const StyledCalendarHeader = styled.div`
  margin-bottom: 16px;

  h3 {
    font-size: 18px;
    font-weight: 600;
    color: #333;
    margin: 0;
  }
`;

export const StyledBookingDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%; 
`;

export const StyledBookingItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
`;

export const StyledImageWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-right: 16px;

  img {
    width: 40px;
    height: 40px;
    border-radius: 8px;
    object-fit: cover;
  }
`;

export const StyledLargeImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;

  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }
`;

export const StyledImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  object-fit: cover;
`;

export const StyledRoomDetails = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 4px;
`;

export const StyledBookingInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
`;

export const StyledBookingContent = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledRoomType = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #333333;
`;

export const StyledCustomerName = styled.p`
  font-size: 12px;
  color: #666666;
`;

export const StyledTime = styled.p`
  font-size: 12px;
  color: #799283;
  margin-left: 8px;
`;

export const StyledBookingDays = styled.div`
  background-color: ${props => props.color};
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 4px 8px;
  border-radius: 4px;
  margin-left: auto;
`;

export const StyledCalendarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%; 
`;

export const StyledStatsContainer = styled.div`
  width: 53%;
  padding-left: 58px;
`;

export const StyledBookingContainer = styled.div`
  flex-grow: 1;
`;

export const StyledCalendar = styled(Calendar)`
  border: none;
  width: 50%;

  .react-calendar__navigation {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;

    button {
      background: none;
      border: none;
      font-size: 16px;
      font-weight: 600;
      color: #393939;
      cursor: pointer;
    }
  }

  .react-calendar__month-view__weekdays {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    text-align: center;
    color: #799283;
    font-weight: 500;
    margin-bottom: 8px;
  }

  .react-calendar__tile {
    color: #333333;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 48px;
    font-size: 14px;
    font-weight: 500;
    transition: background-color 0.3s ease;
    border-radius: 0;
    padding: 0;

    &:hover {
      background-color: #f0f0f0;
    }
  }

  .react-calendar__tile--active {
    background-color: #e23428;
    color: #ffffff;
    font-weight: bold;
  }

  .react-calendar__tile--now {
    background-color: #f5f5f5;
    color: #333333;
  }

  .react-calendar__tile--disabled {
    color: #cccccc;
  }

  .booking-day-3 {
    background-color: #135846;
    border-radius: 10px;
    color: #ffffff;
  }

  .booking-day-16,
  .booking-day-17,
  .booking-day-18 {
    background-color: #e23428;
    border-radius: 10px;
    color: #ffffff;
  }

  .booking-day-20 {
    background-color: #ff9c3a;
    border-radius: 10px;
    color: #ffffff;
  }
`;

export const StyledSeparator = styled.div`
  height: 1px;
  background-color: #e5e5e5;
  margin: 16px 0;
`;

export const StyledViewMore = styled.div`
  text-align: center;
  font-size: 14px;
  color: #0E7355;
  margin-top: 16px;
  cursor: pointer;
`;