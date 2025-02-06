import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { fetchRooms } from '../features/RoomsThunks';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RootState, AppDispatch } from '../../store/store';
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

const Rooms: React.FC = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const { rooms, status, error } = useSelector((state: RootState) => state.rooms);

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState("number");
  const [sortOrder, setSortOrder] = useState("asc");

  const roomsPerPage = 10;

  useEffect(() => {
    dispatch(fetchRooms());
  }, [dispatch]);

  useEffect(() => {
    if (status === 'loading') {
      toast.info("Loading rooms...", {
        autoClose: 1000,
        toastId: 'loading'
      });
    } else if (status === 'succeeded') {
      toast.dismiss('loading');
      toast.success("Rooms loaded successfully!", {
        autoClose: 3000,
        toastId: 'success'
      });
    } else if (status === 'failed') {
      toast.dismiss('loading');
      toast.error(`Failed to load rooms: ${error}`, {
        autoClose: 3000,
        toastId: 'error'
      });
    }
  }, [status, error]);

  const calculateOfferPrice = (price: number | string, discount: number | string) => {
    const priceValue = typeof price === "string" ? parseFloat(price.replace(/[^0-9.-]+/g, "")) : price;
    const discountValue = typeof discount === "string" ? parseFloat(discount) : discount;
    if (isNaN(priceValue) || isNaN(discountValue)) {
      return "";
    }
    const offerPriceValue = priceValue - (priceValue * (discountValue / 100));
    return `$${offerPriceValue.toFixed(2)}`;
  };

  const roomsWithImages = rooms.map(room => ({
    ...room,
    photo: RoomPhoto,
    offerPrice: calculateOfferPrice(room.price, room.discount || "0")
  }));

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const handleSortOption = (option: string) => {
    const isAsc = sortOption === option && sortOrder === "asc";
    setSortOption(option);
    setSortOrder(isAsc ? "desc" : "asc");
  };

  const parsePrice = (priceString: string) => parseFloat(priceString.replace(/[^0-9.-]+/g, ""));

  const filteredRooms = roomsWithImages
    .filter(room => 
      (room.name && room.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (room.type && room.type.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (Array.isArray(room.amenities) && room.amenities.join(', ').toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => {
      if (sortOption === "number") {
        const numA = a.number || "";
        const numB = b.number || "";
        return sortOrder === "asc" ? numA.localeCompare(numB) : numB.localeCompare(numA);
      } else if (sortOption === "status") {
        const statusA = a.status || "";
        const statusB = b.status || "";
        return sortOrder === "asc" ? statusA.localeCompare(statusB) : statusB.localeCompare(statusA);
      } else if (sortOption === "price") {
        return sortOrder === "asc" ? parsePrice(a.price.toString()) - parsePrice(b.price.toString()) : parsePrice(b.price.toString()) - parsePrice(a.price.toString());
      }
      return 0;
    });

  const indexOfLastRoom = currentPage * roomsPerPage;
  const indexOfFirstRoom = indexOfLastRoom - roomsPerPage;
  const currentRooms = filteredRooms.slice(indexOfFirstRoom, indexOfLastRoom);

  useEffect(() => {
    console.log("Current Rooms:", currentRooms);
  }, [currentRooms]);

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
    <>
      <ToastContainer />
      <RoomsStyled>
        <RoomsMenuStyled>
          <RoomsMenuItemStyled>All Rooms</RoomsMenuItemStyled>
          <RoomsButtonStyled onClick={() => navigate("/new-room")}>
            + New Room
          </RoomsButtonStyled>
        </RoomsMenuStyled>
        <RoomsFirstRowStyled>
          <RoomsFirstRowItemStyled onClick={() => handleSortOption("number")}>
            Room Name <MdOutlineSort />
          </RoomsFirstRowItemStyled>
          <RoomsFirstRowItemStyled>Room Type</RoomsFirstRowItemStyled>
          <RoomsFirstRowItemStyled>Amenities</RoomsFirstRowItemStyled>
          <RoomsFirstRowItemStyled onClick={() => handleSortOption("price")}>
            Price <MdOutlineSort />
          </RoomsFirstRowItemStyled>
          <RoomsFirstRowItemStyled>Offer Price</RoomsFirstRowItemStyled>
          <RoomsFirstRowItemStyled onClick={() => handleSortOption("status")}>
            Status <MdOutlineSort />
          </RoomsFirstRowItemStyled>
        </RoomsFirstRowStyled>
        {status === 'loading' ? (
          <p>Loading rooms...</p>
        ) : status === 'succeeded' ? (
          currentRooms.map(room => (
            <RoomsItemStyled key={room.id}>
              <RoomsItemRoomProfileContainerStyled>
                <RoomsItemRoomProfilePhotoStyled src={room.photo} />
                <RoomsItemRoomProfileInfoStyled>
                  <RoomsItemRoomProfileIdStyled>{room.id}</RoomsItemRoomProfileIdStyled>
                  <RoomsItemTextStyled>{room.name} - {room.number}</RoomsItemTextStyled>
                </RoomsItemRoomProfileInfoStyled>
              </RoomsItemRoomProfileContainerStyled>
              <RoomsItemTextStyled>{room.type}</RoomsItemTextStyled>
              <RoomsItemTextStyled>{Array.isArray(room.amenities) ? room.amenities.join(', ') : room.amenities}</RoomsItemTextStyled>
              <RoomsItemTextStyled>{room.price} <span>/Night</span></RoomsItemTextStyled>
              <RoomsItemTextStyled>{room.offerPrice}</RoomsItemTextStyled>
              <RoomsItemStatusStyled type={room.status.toLowerCase()}>{room.status}</RoomsItemStatusStyled>
            </RoomsItemStyled>
          ))
        ) : status === 'failed' ? (
          <p>{error}</p>
        ) : null}
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
    </>
  );
};

export default Rooms;