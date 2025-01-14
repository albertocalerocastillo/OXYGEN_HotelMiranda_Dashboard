import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { StyledStatsContainer, StyledBarChart, StyledHeader, StyledHeaderTop, StyledHeaderBottom } from "./ReservationStatsStyles";

const data = [
  { name: "Monday", checkIn: 35 },
  { name: "Tuesday", checkIn: 22 },
  { name: "Wednesday", checkIn: 45 },
  { name: "Thursday", checkIn: 32 },
  { name: "Friday", checkIn: 38 },
  { name: "Saturday", checkIn: 48 },
  { name: "Sunday", checkIn: 55 },
];

const totalCheckIns = data.reduce((total, day) => total + day.checkIn, 0);
const percentageChange = "+0.4%";

const ReservationStats = () => {
  return (
    <StyledStatsContainer>
      <StyledHeader>
        <StyledHeaderTop>
          <h2>Reservation Stats</h2>
        </StyledHeaderTop>
        <StyledHeaderBottom>
          <h3>Check In</h3>
          <div>
            <span>{totalCheckIns.toLocaleString()}</span>
            <span>{` ${percentageChange}`}</span>
          </div>
        </StyledHeaderBottom>
      </StyledHeader>
      <StyledBarChart>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis ticks={[0, 10, 20, 30, 40, 50, 60]} domain={[0, 60]} />
            <Tooltip />
            <Bar dataKey="checkIn" fill="#135846" />
          </BarChart>
        </ResponsiveContainer>
      </StyledBarChart>
    </StyledStatsContainer>
  );
};

export default ReservationStats;