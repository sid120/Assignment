import React from 'react';

const UserProfileCard = ({ user }) => {
  return (

    
    <div className="card" style={{ width: '18rem' }}>
      <img
        className="cardimg"
        src={user.image}
        alt={`${user.username}'s avatar`}
      />
      <div className="card-body">
        <h5 className="card-title">{user.username}</h5>
        <p className="card-text">
          Age: {user.age} <br />
          Gender: {user.gender} <br />
          Company: {user.company.name}
        </p>
        <a href="#" className="btn btn-primary">
          View Profile
        </a>
      </div>
    </div>
  );
};

export default UserProfileCard;
