import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
import usersData from '../components/usersData.json';

import profilePhoto from '../../assets/perfil.jpg';

const Users = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState("date");

  const usersPerPage = 10;

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const allUsers = [...usersData, ...storedUsers];
    setUsers(allUsers);
  }, []);

  const [users, setUsers] = useState([]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const handleSortOption = (event) => {
    setSortOption(event.target.value);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  const parseDate = (dateString) => {
    const months = {
      Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
      Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11
    };
    const [month, day, year] = dateString.split(" ");
    return new Date(year, months[month], parseInt(day));
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
      return parseDate(a.joinDate) - parseDate(b.joinDate);
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
      {currentUsers.map(user => (
        <UsersItemStyled key={user.id}>
          <UsersProfilePhotoStyled>
            <img src={user.profilePhoto && user.profilePhoto.startsWith('http') ? user.profilePhoto : profilePhoto} alt="Profile" />
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
      ))}
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