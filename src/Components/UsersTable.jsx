import React, { useState, useEffect } from "react";
import { Button, Container, Form } from "react-bootstrap";
import "./userstable.css"; // Import the CSS

const UsersTable = ({ users }) => {
  const [sortedUsers, setSortedUsers] = useState(users);
  const [searchItem, setSearchItem] = useState("");
  const [filteredCity, setFilteredCity] = useState("all");
  const [dropdownOpen, setDropdownOpen] = useState(false); // State to toggle dropdown

  useEffect(() => {
    let filteredUsers = [...users];

    // Filter by city
    if (filteredCity !== "all") {
      filteredUsers = filteredUsers.filter(user => user.address.city === filteredCity);
    }

    // Filter by search term
    if (searchItem) {
      filteredUsers = filteredUsers.filter(user =>
        user.firstName.toLowerCase().includes(searchItem.toLowerCase()) ||
        user.lastName.toLowerCase().includes(searchItem.toLowerCase())
      );
    }

    setSortedUsers(filteredUsers);
  }, [searchItem, filteredCity, users]);

  const handleNameSort = (type) => {
    const sorted = [...sortedUsers].sort((a, b) =>
      type === "asc"
        ? (a.firstName || "").localeCompare(b.firstName || "")
        : (b.firstName || "").localeCompare(a.firstName || "")
    );
    setSortedUsers(sorted);
  };

  const cities = Array.from(new Set(users.map(user => user.address.city)));
  
  const handleFilter = (city) => {
    setFilteredCity(city);
    setDropdownOpen(false); // Close the dropdown when an option is selected
  };

  const handleChange = (e) => {
    setSearchItem(e.target.value);
  };

  return (
    <Container>
      <div className="search-and-buttons">
        <Form.Control
          type="text"
          placeholder="Search by name"
          value={searchItem}
          onChange={handleChange}
          className="search-box"
        />
        <Button variant="primary" onClick={() => handleNameSort("asc")}>
          Sort by Name (Asc)
        </Button>
        <Button variant="secondary" onClick={() => handleNameSort("desc")}>
          Sort by Name (Desc)
        </Button>
        
        <div className="dropdown">
          <div className="dropdown-toggle" onClick={() => setDropdownOpen(!dropdownOpen)}>
            Filter by City
          </div>
          {dropdownOpen && (
            <div className="dropdown-menu">
              <div className="dropdown-item" onClick={() => handleFilter("all")}>All Cities</div>
              {cities.map((city) => (
                <div key={city} className="dropdown-item" onClick={() => handleFilter(city)}>
                  {city}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <table className="table mt-3">
        <thead>
          <tr>
            <th>Image</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map((user) => (
            <tr key={user.id}>
              <td><img src={user.image} alt={`${user.firstName} ${user.lastName}`} style={{ width: '50px', height: '50px' }} /></td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{`${user.address.address}, ${user.address.city}, ${user.address.state}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export default UsersTable;
