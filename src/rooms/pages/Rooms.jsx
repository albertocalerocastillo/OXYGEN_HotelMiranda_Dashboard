import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineSort } from "react-icons/md";
import {
  RoomsStyled,
  RoomsMenuStyled,
  RoomsMenuItemStyled,
  RoomsFirstRowStyled,
  RoomsFirstRowItemStyled,
  RoomsItemStyled,
  RoomsItemTextStyled,
  RoomsItemRoomProfileContainerStyled,
  RoomsItemRoomProfilePhotoStyled,
  RoomsItemRoomProfileInfoStyled,
  RoomsItemRoomProfileIdStyled,
  RoomsItemStatusStyled,
  RoomsButtonStyled,
  PaginationContainer,
  PaginationButton,
  DataInfoStyled
} from "../components/RoomsStyles";
import RoomPhoto from '../../assets/perfil.jpg';

const Rooms = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState("number");
  const [sortOrder, setSortOrder] = useState("asc");

  const roomsPerPage = 10;

  const rooms = [
    {
      id: "#000123456",
      photo: RoomPhoto,
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
      photo: RoomPhoto,
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
      photo: RoomPhoto,
      number: "91234",
      name: "Deluxe A",
      type: "Double Bed",
      amenities: "AC, Shower, Double Bed, Towel, Bathup, Coffee Set, LED TV, Wifi",
      price: "$145",
      offerPrice: "$90",
      status: "Available"
    },
  ];

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const handleSortOption = (option) => {
    const isAsc = sortOption === option && sortOrder === "asc";
    setSortOption(option);
    setSortOrder(isAsc ? "desc" : "asc");
  };

  const parsePrice = (priceString) => parseFloat(priceString.replace(/[^0-9.-]+/g, ""));

  const filteredRooms = rooms
    .filter(room => 
      room.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      room.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      room.amenities.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === "number") {
        return sortOrder === "asc" ? a.number.localeCompare(b.number) : b.number.localeCompare(a.number);
      } else if (sortOption === "status") {
        return sortOrder === "asc" ? a.status.localeCompare(b.status) : b.status.localeCompare(a.status);
      } else if (sortOption === "price") {
        return sortOrder === "asc" ? parsePrice(a.price) - parsePrice(b.price) : parsePrice(b.price) - parsePrice(a.price);
      }
      return 0;
    });

  const indexOfLastRoom = currentPage * roomsPerPage;
  const indexOfFirstRoom = indexOfLastRoom - roomsPerPage;
  const currentRooms = filteredRooms.slice(indexOfFirstRoom, indexOfLastRoom);

  const totalPages = Math.ceil(filteredRooms.length / roomsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const showingEnd = Math.min(indexOfLastRoom, filteredRooms.length);
  const totalEntries = filteredRooms.length;

  return (
    <RoomsStyled>
      <RoomsMenuStyled>
        <RoomsMenuItemStyled>All Rooms</RoomsMenuItemStyled>   
        <RoomsButtonStyled onClick={() => navigate("/new-room")}>
          + New Room
        </RoomsButtonStyled>
      </RoomsMenuStyled>
      <RoomsFirstRowStyled>
        <RoomsFirstRowItemStyled onClick={() => handleSortOption("number")}>Room Name <MdOutlineSort /></RoomsFirstRowItemStyled>
        <RoomsFirstRowItemStyled>Room Type</RoomsFirstRowItemStyled>
        <RoomsFirstRowItemStyled>Amenities</RoomsFirstRowItemStyled>
        <RoomsFirstRowItemStyled onClick={() => handleSortOption("price")}>Price <MdOutlineSort /></RoomsFirstRowItemStyled>
        <RoomsFirstRowItemStyled>Offer Price</RoomsFirstRowItemStyled>
        <RoomsFirstRowItemStyled onClick={() => handleSortOption("status")}>Status <MdOutlineSort /></RoomsFirstRowItemStyled>
      </RoomsFirstRowStyled>
      {currentRooms.map(room => (
        <RoomsItemStyled key={room.id}>
          <RoomsItemRoomProfileContainerStyled>
            <RoomsItemRoomProfilePhotoStyled src={room.photo} />
            <RoomsItemRoomProfileInfoStyled>
              <RoomsItemRoomProfileIdStyled>{room.id}</RoomsItemRoomProfileIdStyled>
              <RoomsItemTextStyled>{room.name} - {room.number}</RoomsItemTextStyled>
            </RoomsItemRoomProfileInfoStyled>
          </RoomsItemRoomProfileContainerStyled>
          <RoomsItemTextStyled>{room.type}</RoomsItemTextStyled>
          <RoomsItemTextStyled>{room.amenities}</RoomsItemTextStyled>
          <RoomsItemTextStyled>{room.price} <span>/Night</span></RoomsItemTextStyled>
          <RoomsItemTextStyled>{room.offerPrice}</RoomsItemTextStyled>
          <RoomsItemStatusStyled type={room.status.toLowerCase()}>{room.status}</RoomsItemStatusStyled>
        </RoomsItemStyled>
      ))}
      <PaginationContainer>
        <DataInfoStyled>
          Showing {showingEnd} of {totalEntries} Data
        </DataInfoStyled>
        <PaginationButton onClick={prevPage} disabled={currentPage === 1}>
          Anterior
        </PaginationButton>
        <PaginationButton onClick={nextPage} disabled={currentPage === totalPages}>
          Siguiente
        </PaginationButton>
      </PaginationContainer>
    </RoomsStyled>
  );
};

export default Rooms;