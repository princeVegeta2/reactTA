import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchAllUsers } from '../../features/users/userSlice';
import styles from './Home.module.css';
import searchImage from '../../assets/images/search-interface-symbol.png';

type Column = 'name' | 'username' | 'email' | 'phone'; // Column types in search fields

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const { users, loading, error } = useAppSelector((state) => state.users);

  // State to control visibility of search inputs for each column
  const [showSearch, setShowSearch] = useState({
    name: false,
    username: false,
    email: false,
    phone: false,
  });

  // State to store the search input for each column
  const [searchTerm, setSearchTerm] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
  });

  useEffect(() => {
    dispatch(fetchAllUsers());  // Fetch users on component mount
  }, [dispatch]);

  // Handle the toggle for search inputs
  const toggleSearch = (column: Column) => {
    setShowSearch((prevState) => ({
      ...prevState,
      [column]: !prevState[column],
    }));
  };

  // Handle the input change for search fields(dynamic)
  const handleSearchInputChange = (column: Column, value: string) => {
    setSearchTerm((prevState) => ({
      ...prevState,
      [column]: value,
    }));
  };

  // Filter users based on search terms for each column
  const filteredUsers = users.filter((user) => {
    return (
      user.name.toLowerCase().includes(searchTerm.name.toLowerCase()) &&
      user.username.toLowerCase().includes(searchTerm.username.toLowerCase()) &&
      user.email.toLowerCase().includes(searchTerm.email.toLowerCase()) &&
      user.phone.toLowerCase().includes(searchTerm.phone.toLowerCase())
    );
  });

  if (loading) {
    return <p>Loading users...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>User List</h1>
      <table className={styles.userTable}>
        <thead>
          <tr>
            <th>
              Name
              <img
                src={searchImage}
                alt="Search"
                className={styles.searchIcon}
                onClick={() => toggleSearch('name')}
              />
              {showSearch.name && (
                <input
                  type="text"
                  className={styles.searchInput}
                  value={searchTerm.name}
                  onChange={(e) => handleSearchInputChange('name', e.target.value)}
                  placeholder="Search Name"
                />
              )}
            </th>
            <th>
              Username
              <img
                src={searchImage}
                alt="Search"
                className={styles.searchIcon}
                onClick={() => toggleSearch('username')}
              />
              {showSearch.username && (
                <input
                  type="text"
                  className={styles.searchInput}
                  value={searchTerm.username}
                  onChange={(e) => handleSearchInputChange('username', e.target.value)}
                  placeholder="Search Username"
                />
              )}
            </th>
            <th>
              Email
              <img
                src={searchImage}
                alt="Search"
                className={styles.searchIcon}
                onClick={() => toggleSearch('email')}
              />
              {showSearch.email && (
                <input
                  type="text"
                  className={styles.searchInput}
                  value={searchTerm.email}
                  onChange={(e) => handleSearchInputChange('email', e.target.value)}
                  placeholder="Search Email"
                />
              )}
            </th>
            <th>
              Phone
              <img
                src={searchImage}
                alt="Search"
                className={styles.searchIcon}
                onClick={() => toggleSearch('phone')}
              />
              {showSearch.phone && (
                <input
                  type="text"
                  className={styles.searchInput}
                  value={searchTerm.phone}
                  onChange={(e) => handleSearchInputChange('phone', e.target.value)}
                  placeholder="Search Phone"
                />
              )}
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
