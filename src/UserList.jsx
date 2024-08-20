import React, { useState, useEffect } from 'react';
import UserProfileCard from './UserProfileCard';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data.users));
  }, []);

  const filteredUsers = users.filter((user) =>
    user.username.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <input
        type="text"
        className="form-control my-3"
        placeholder="Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="row">
        {filteredUsers.map((user) => (
          <div className="col-md-4 mb-3" key={user.id}>
            <UserProfileCard user={user} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
