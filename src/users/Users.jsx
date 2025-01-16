import React, { useState } from "react";
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
} from "./UsersStyles";
import profilePhoto1 from "../assets/perfil.jpg";
import profilePhoto2 from "../assets/perfil.jpg";

const Users = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState("date");
  
  const usersPerPage = 10;

  const [users, setUsers] = useState([
    {
        id: "#12341225",
        name: "James Sitepu",
        email: "james.sitepu@example.com",
        joinDate: "Aug 2th 2017",
        jobDesk: "Answering guest inquiries, directing phone calls, coordinating travel plans, and more.",
        contact: "012 334 55512",
        status: "ACTIVE",
        profilePhoto: profilePhoto1
      },
      {
        id: "#12341226",
        name: "Louis Humbs",
        email: "louis.humbs@example.com",
        joinDate: "Aug 2th 2010",
        jobDesk: "Offer restaurant and activity recommendations and assist guests in arranging transportation",
        contact: "012 334 55512",
        status: "INACTIVE",
        profilePhoto: profilePhoto2
      },
      {
        id: "#12341227",
        name: "Sarah Lee",
        email: "sarah.lee@example.com",
        joinDate: "Sep 15th 2018",
        jobDesk: "Managing bookings and customer service.",
        contact: "012 334 55513",
        status: "ACTIVE",
        profilePhoto: profilePhoto1
      },
      {
          id: "#12341228",
          name: "Alberto Calero",
          email: "albertocctrabajo@gmail.com",
          joinDate: "Sep 15th 2011",
          jobDesk: "Managing bookings and customer service.",
          contact: "012 334 55513",
          status: "ACTIVE",
          profilePhoto: profilePhoto1
        },
        {
          id: "#12341229",
          name: "Alberto Calero",
          email: "albertocctrabajo@gmail.com",
          joinDate: "Sep 15th 2011",
          jobDesk: "Managing bookings and customer service.",
          contact: "012 334 55513",
          status: "INACTIVE",
          profilePhoto: profilePhoto1
        },
        {
          id: "#22341229",
          name: "Alberto Calero",
          email: "albertocctrabajo@gmail.com",
          joinDate: "Sep 15th 2011",
          jobDesk: "Managing bookings and customer service.",
          contact: "012 334 55513",
          status: "INACTIVE",
          profilePhoto: profilePhoto1
        },
        {
          id: "#22341221",
          name: "Alberto Calero",
          email: "albertocctrabajo@gmail.com",
          joinDate: "Sep 15th 2011",
          jobDesk: "Managing bookings and customer service.",
          contact: "012 334 55513",
          status: "ACTIVE",
          profilePhoto: profilePhoto1
        },
        {
          id: "#29871221",
          name: "Alberto Calero",
          email: "albertocctrabajo@gmail.com",
          joinDate: "Sep 15th 2011",
          jobDesk: "Managing bookings and customer service.",
          contact: "012 334 55513",
          status: "ACTIVE",
          profilePhoto: profilePhoto1
        },
        {
          id: "#22341652",
          name: "Alberto Calero",
          email: "albertocctrabajo@gmail.com",
          joinDate: "Sep 15th 2011",
          jobDesk: "Managing bookings and customer service.",
          contact: "012 334 55513",
          status: "ACTIVE",
          profilePhoto: profilePhoto1
        },
        {
          id: "#22681221",
          name: "Alberto Calero",
          email: "albertocctrabajo@gmail.com",
          joinDate: "Sep 15th 2011",
          jobDesk: "Managing bookings and customer service.",
          contact: "012 334 55513",
          status: "INACTIVE",
          profilePhoto: profilePhoto1
        },
        {
          id: "#22341001",
          name: "Alberto Calero",
          email: "albertocctrabajo@gmail.com",
          joinDate: "Sep 15th 2011",
          jobDesk: "Managing bookings and customer service.",
          contact: "012 334 55513",
          status: "ACTIVE",
          profilePhoto: profilePhoto1
        },
        {
          id: "#22346671",
          name: "Alberto Calero",
          email: "albertocctrabajo@gmail.com",
          joinDate: "Sep 15th 2011",
          jobDesk: "Managing bookings and customer service.",
          contact: "012 334 55513",
          status: "INACTIVE",
          profilePhoto: profilePhoto1
        },
  ]);

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
            placeholder="Search by name..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </SearchBarContainer>
        <SortSelectStyled value={sortOption} onChange={handleSortOption}>
          <option value="date">Sort by Date</option>
          <option value="name">Sort by Name</option>
        </SortSelectStyled>
        <UsersButtonStyled>+ New Employee</UsersButtonStyled>
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
            <img src={user.profilePhoto} alt="Profile" />
          </UsersProfilePhotoStyled>
          <UsersItemNameStyled>
            {user.name}<br />
            ID: {user.id}<br />
            Email: {user.email}
          </UsersItemNameStyled>
          <UsersItemTextStyled>{user.joinDate}</UsersItemTextStyled>
          <UsersItemJobStyled>{user.jobDesk}</UsersItemJobStyled>
          <UsersItemContactStyled>{user.contact}</UsersItemContactStyled>
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