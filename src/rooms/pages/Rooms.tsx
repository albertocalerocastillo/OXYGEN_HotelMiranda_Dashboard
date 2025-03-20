import React, { useState, useEffect, ChangeEvent } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchRooms, deleteRoom } from '../features/RoomsThunks';
import { RootState, AppDispatch } from '../../store/store';
import { MdOutlineSort, MdEdit, MdDelete } from "react-icons/md";
import {
    RoomsStyled,
    RoomsMenuStyled,
    RoomsMenuItemStyled,
    RoomsButtonStyled,
    PaginationContainer,
    PaginationButton,
    DataInfoStyled,
} from "../components/RoomsStyles";
import RoomPhoto from '../../assets/perfil.jpg';
import { Room } from '../interfaces/RoomInterfaces';
import styled from 'styled-components';

const RoomsTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-top: 1rem;
    background: #ffffff;
    border-radius: 0.5rem;
    box-shadow: 0px 4px 8px rgba(0,0,0,0.05);
`;

const TableHead = styled.thead`
    background: #ffffff;
    border-bottom: 1px solid #D4D4D4;
`;

const TableHeader = styled.th<{ active?: boolean, direction?: string }>`
    font-family: 'Poppins';
    font-size: 1rem;
    font-weight: 700;
    color: #393939;
    text-align: center;
    padding: 1rem 2%;
    cursor: pointer;
    background-color: ${props => props.active ? '#f0f0f0' : 'transparent'};
    vertical-align: middle;
    
    svg {
        transform: ${props => props.direction === 'desc' ? 'rotate(180deg)' : 'rotate(0deg)'};
    }
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr``;

const TableCell = styled.td`
    font-family: 'Poppins';
    font-size: 1rem;
    font-weight: 600;
    color: #393939;
    text-align: center;
    padding: 1rem 0%;
    border-bottom: 1px solid #D4D4D4;
    vertical-align: middle;
`;

const PhotoCell = styled(TableCell)`
    gap: 0.5rem;
    justify-content: center;
    align-items: center;

    img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        object-fit: cover;
    }
`;

const StatusCell = styled(TableCell)<{ status: string }>`
    color: ${props => (props.status === "Available" ? "#5AD07A" : "#E23428")};
    border-radius: 15px;
    background-size: 10px;
    vertical-align: middle;
`;

const ActionCell = styled(TableCell)`
    max-width: 70px;
    justify-content: center;
    gap: 0.5rem;
`;

const ActionButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.2rem;
    color: #393939;
`;

const RoomNameCell = styled(TableCell)`
    max-width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const RoomTypeCell = styled(TableCell)`
    max-width: 150px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const AmenitiesCell = styled(TableCell)`
    max-width: 250px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

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

    const handleDeleteRoom = (roomId: string) => {
      dispatch(deleteRoom(roomId))
          .unwrap()
          .then(() => {
              toast.success('Room deleted successfully!');
              dispatch(fetchRooms());
          })
          .catch((error) => {
              toast.error(`Failed to delete room: ${error}`);
          });
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

            <RoomsTable>
                <TableHead>
                    <TableRow>
                        <TableHeader>Photo</TableHeader>
                        <TableHeader 
                            onClick={() => handleSortOption("number")}
                            active={sortOption === "number"}
                            direction={sortOption === "number" ? sortOrder : undefined}
                        >
                            Room Name <MdOutlineSort />
                        </TableHeader>
                        <TableHeader>Room Type</TableHeader>
                        <TableHeader>Amenities</TableHeader>
                        <TableHeader 
                            onClick={() => handleSortOption("price")}
                            active={sortOption === "price"}
                            direction={sortOption === "price" ? sortOrder : undefined}
                        >
                            Price <MdOutlineSort />
                        </TableHeader>
                        <TableHeader>Offer Price</TableHeader>
                        <TableHeader 
                            onClick={() => handleSortOption("status")}
                            active={sortOption === "status"}
                            direction={sortOption === "status" ? sortOrder : undefined}
                        >
                            Status <MdOutlineSort />
                        </TableHeader>
                        <TableHeader>Actions</TableHeader>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {status === 'loading' ? (
                        <TableRow><TableCell colSpan={8}>Loading rooms...</TableCell></TableRow>
                    ) : status === 'succeeded' ? (
                        currentRooms.map((room: Room) => (
                            <TableRow key={room.id}>
                                <PhotoCell>
                                    <img src={room.photo} alt="Room" />
                                </PhotoCell>
                                <RoomNameCell>{room.name} - {room.number}</RoomNameCell>
                                <RoomTypeCell>{room.type}</RoomTypeCell>
                                <AmenitiesCell>{Array.isArray(room.amenities) ? room.amenities.join(', ') : room.amenities}</AmenitiesCell>
                                <TableCell>{room.price} <span>/Night</span></TableCell>
                                <TableCell>{room.offerPrice}</TableCell>
                                <StatusCell status={room.status}>{room.status}</StatusCell>
                                <ActionCell>
                                    <ActionButton>
                                        <Link to={`/edit-room/${room.id}`}>
                                            <MdEdit />
                                        </Link>
                                    </ActionButton>
                                    <ActionButton onClick={() => handleDeleteRoom(room.id)}>
                                        <MdDelete />
                                    </ActionButton>
                                </ActionCell>
                            </TableRow>
                        ))
                    ) : status === 'failed' ? (
                        <TableRow><TableCell colSpan={8}>{error}</TableCell></TableRow>
                    ) : null}
                </TableBody>
            </RoomsTable>

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