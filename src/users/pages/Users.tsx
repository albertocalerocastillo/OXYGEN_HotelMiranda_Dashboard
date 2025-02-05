import React, { useState, useEffect, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../features/UsersThunks';
import { MdOutlineLocalPhone } from "react-icons/md";
import {
  UsersStyled,
  UsersMenuStyled,
  UsersMenuTextStyled,
  UsersMenuItemStyled,
  UsersFirstRowStyled,
  UsersFirstRowItemStyled,
  UsersItemStyled,
  UsersItemTextStyled,
  UsersItemNameStyled,
  UsersItemJobStyled,
  UsersItemContactStyled,
  UsersItemStatusStyled,
  UsersProfilePhotoStyled,
  SearchBarContainer,
  SearchBarInputStyled,
  UsersButtonStyled,
  SortSelectStyled,
  PaginationContainer,
  PaginationButton,
  DataInfoStyled
} from "../components/UsersStyles";
import profilePhoto from '../../assets/perfil.jpg';
import { User, UsersState } from '../interfaces/UserInterfaces';
import { RootState, AppDispatch } from '../../store/store';

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

  const filteredUsers = users
    .filter(user => 
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (activeTab === "all" || user.status === (activeTab === "active" ? "ACTIVE" : "INACTIVE"))
    )
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

  let content;

  if (status === 'loading') {
    content = <p>Loading users...</p>;
  } else if (status === 'succeeded') {
    content = currentUsers.map((user: User) => (
      <UsersItemStyled key={user.id}>
        <UsersProfilePhotoStyled>
          <img src={user.profilePhoto === "perfil.jpg" ? profilePhoto : user.profilePhoto} alt="Profile" />
        </UsersProfilePhotoStyled>
        <UsersItemNameStyled>
          {user.name}<br />
          ID: {user.id}<br />
          Email: {user.email}
        </UsersItemNameStyled>
        <UsersItemTextStyled>{user.joinDate}</UsersItemTextStyled>
        <UsersItemJobStyled>{user.jobDesk}</UsersItemJobStyled>
        <UsersItemContactStyled><MdOutlineLocalPhone style={{ marginRight: "0.5rem", fontSize: "1.5rem" }} /> {user.contact}</UsersItemContactStyled>
        <UsersItemStatusStyled status={user.status}>{user.status}</UsersItemStatusStyled>
      </UsersItemStyled>
    ));
  } else if (status === 'failed') {
    content = <p>{error}</p>;
  }

  return (
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
      <UsersFirstRowStyled>
        <UsersFirstRowItemStyled>Photo</UsersFirstRowItemStyled>
        <UsersFirstRowItemStyled>Name</UsersFirstRowItemStyled>
        <UsersFirstRowItemStyled>Start Date</UsersFirstRowItemStyled>
        <UsersFirstRowItemStyled>Description</UsersFirstRowItemStyled>
        <UsersFirstRowItemStyled>Contact</UsersFirstRowItemStyled>
        <UsersFirstRowItemStyled>Status</UsersFirstRowItemStyled>
      </UsersFirstRowStyled>
      {content}
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
  );
};

export default Users;