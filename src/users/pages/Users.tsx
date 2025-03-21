import React, { useState, useEffect, ChangeEvent } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchUsers, deleteUser } from '../features/UsersThunks';
import { MdOutlineLocalPhone, MdEdit, MdDelete } from "react-icons/md";
import {
    UsersStyled,
    UsersMenuStyled,
    UsersMenuTextStyled,
    UsersMenuItemStyled,
    SearchBarContainer,
    SearchBarInputStyled,
    UsersButtonStyled,
    SortSelectStyled,
    PaginationContainer,
    PaginationButton,
    DataInfoStyled,
} from "../components/UsersStyles";
import defaultProfilePhoto from '../../assets/perfil.jpg';
import { User, UsersState } from '../interfaces/UserInterfaces';
import { RootState, AppDispatch } from '../../store/store';
import styled from 'styled-components';

const UsersTable = styled.table`
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

const TableHeader = styled.th`
    font-family: 'Poppins';
    font-size: 1rem;
    font-weight: 700;
    color: #393939;
    text-align: center;
    padding: 1rem 2%;
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
`;

const ProfilePhotoCell = styled(TableCell)`
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

const NameCell = styled(TableCell)`
    text-align: center;
    max-width: 170px;
`;

const DescriptionCell = styled(TableCell)`
    text-align: center;
    max-width: 100px;
`;

const ContactCell = styled(TableCell)`
    gap: 0.5rem;
    align-items: center;
    max-width: 100px;
`;

interface StatusCellProps {
    status: 'ACTIVE' | 'INACTIVE';
}

const StatusCell = styled(TableCell)<StatusCellProps>`
    color: ${props => (props.status === "ACTIVE" ? "#5AD07A" : "#E23428")};
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

const Users: React.FC = () => {
    const navigate = useNavigate();
    const dispatch: AppDispatch = useDispatch();
    const { users, status, error } = useSelector((state: RootState) => state.users);

    const [activeTab, setActiveTab] = useState<string>("all");
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [sortOption, setSortOption] = useState<string>("date");

    const usersPerPage = 10;

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    useEffect(() => {
        if (status === 'loading') {
            toast.info("Loading users...", {
                autoClose: 1000,
                toastId: 'loading'
            });
        } else if (status === 'succeeded') {
            toast.dismiss('loading');
            toast.success("Users loaded successfully!", {
                autoClose: 3000,
                toastId: 'success'
            });
        } else if (status === 'failed') {
            toast.dismiss('loading');
            toast.error(`Failed to load users: ${error}`, {
                autoClose: 3000,
                toastId: 'error'
            });
        }
    }, [status, error]);

    const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
        setCurrentPage(1);
    };

    const handleSortOption = (event: ChangeEvent<HTMLSelectElement>) => {
        setSortOption(event.target.value);
    };

    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
        setCurrentPage(1);
    };

    const parseDate = (dateString: string): Date => {
        const months: { [key: string]: number } = {
            Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
            Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11
        };
        const [month, day, year] = dateString.split(" ");
        return new Date(parseInt(year), months[month], parseInt(day));
    };

    const filteredUsers = (users || [])
        .filter(user => {
            if (!user || !user.name) {
                return false;
            }
            return user.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
                (activeTab === "all" || user.status === (activeTab === "active" ? "ACTIVE" : "INACTIVE"));
        })
        .sort((a, b) => {
            if (sortOption === "name") {
                return a.name.localeCompare(b.name);
            }
            return parseDate(a.joinDate).getTime() - parseDate(b.joinDate).getTime();
        });

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

    const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

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

    const showingEnd = Math.min(indexOfLastUser, filteredUsers.length);
    const totalEntries = filteredUsers.length;

    const handleDelete = (id: string) => {
        dispatch(deleteUser(id))
            .unwrap()
            .then(() => {
                toast.success("User deleted successfully!", {
                    autoClose: 3000,
                    toastId: 'delete-success'
                });
            })
            .catch((error) => {
                toast.error(`Failed to delete user: ${error}`, {
                    autoClose: 3000,
                    toastId: 'delete-error'
                });
            });
    };

    return (
        <>
            <ToastContainer />
            <UsersStyled>
                <UsersMenuStyled>
                    <UsersMenuTextStyled>
                        <UsersMenuItemStyled
                            active={activeTab === "all"}
                            onClick={() => handleTabChange("all")}
                        >
                            All Employee
                        </UsersMenuItemStyled>
                        <UsersMenuItemStyled
                            active={activeTab === "active"}
                            onClick={() => handleTabChange("active")}
                        >
                            Active Employee
                        </UsersMenuItemStyled>
                        <UsersMenuItemStyled
                            active={activeTab === "inactive"}
                            onClick={() => handleTabChange("inactive")}
                        >
                            Inactive Employee
                        </UsersMenuItemStyled>
                        </UsersMenuTextStyled>
                        <SearchBarContainer>
                            <SearchBarInputStyled
                                type="text"
                                placeholder="Buscar empleado..."
                                value={searchTerm}
                                onChange={handleSearch}
                            />
                        </SearchBarContainer>
                        <SortSelectStyled value={sortOption} onChange={handleSortOption}>
                            <option value="date">Filtrar por Start Date</option>
                            <option value="name">Filtrar por Name</option>
                        </SortSelectStyled>
                        <UsersButtonStyled onClick={() => navigate("/new-employee")}>
                            + New Employee
                        </UsersButtonStyled>
                    </UsersMenuStyled>

                    <UsersTable>
                        <TableHead>
                            <TableRow>
                                <TableHeader>Photo</TableHeader>
                                <TableHeader>Name</TableHeader>
                                <TableHeader>Start Date</TableHeader>
                                <TableHeader>Description</TableHeader>
                                <TableHeader>Contact</TableHeader>
                                <TableHeader>Status</TableHeader>
                                <TableHeader>Actions</TableHeader> 
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {status === 'loading' ? (
                                <TableRow><TableCell colSpan={7}>Loading users...</TableCell></TableRow>
                            ) : status === 'succeeded' ? (
                                currentUsers.map((user: User) => (
                                    <TableRow key={user.id}>
                                        <ProfilePhotoCell>
                                            <img src={defaultProfilePhoto} alt="Profile" />
                                        </ProfilePhotoCell>
                                        <NameCell style={{ textAlign: 'center' }}>
                                            {user.name}<br />
                                            <span style={{ fontSize: '0.9rem', color: '#555', fontWeight: 'normal' }}>ID: {user.id}</span><br />
                                            <span style={{ fontSize: '0.9rem', color: '#555', fontWeight: 'normal' }}>Email: {user.email}</span>
                                        </NameCell>
                                        <TableCell>{user.joinDate}</TableCell>
                                        <DescriptionCell>{user.jobDesk}</DescriptionCell>
                                        <ContactCell>
                                            <MdOutlineLocalPhone style={{ marginRight: "0.5rem", fontSize: "1rem" }} /> {user.contact}
                                        </ContactCell>
                                        <StatusCell status={user.status}>{user.status}</StatusCell>
                                        <ActionCell>
                                            <ActionButton>
                                                <Link to={`/edit-employee/${user.id}`}>
                                                    <MdEdit />
                                                </Link>
                                            </ActionButton>
                                            <ActionButton onClick={() => handleDelete(user.id)}>
                                                <MdDelete />
                                            </ActionButton>
                                        </ActionCell>
                                    </TableRow>
                                ))
                            ) : status === 'failed' ? (
                                <TableRow><TableCell colSpan={7}>{error}</TableCell></TableRow>
                            ) : null}
                        </TableBody>
                    </UsersTable>

                    <PaginationContainer>
                        <DataInfoStyled>
                            Showing {showingEnd} of {totalEntries} Data
                        </DataInfoStyled>
                        <PaginationButton onClick={prevPage} disabled={currentPage === 1}>
                            Prev
                        </PaginationButton>
                        <PaginationButton onClick={nextPage} disabled={currentPage === totalPages}>
                            Next
                        </PaginationButton>
                    </PaginationContainer>
                </UsersStyled>
            </>
        );
    };

    export default Users;