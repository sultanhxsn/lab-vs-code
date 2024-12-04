import React from 'react';
import '../Styles/UserInfo.css';

const UserInfo = ({ name, email, role, image }) => {
return (
    <div className="user-data-container">
      <h2 className="user-data-title">User Information</h2>
      <div className="user-data-item">
        <img
          src={image}
          alt="User"
          style={{ maxWidth: '500px', borderRadius: '3%', alignContent: 'center' }}
        />
      </div>
      <div className="user-data-item">
        <span>Name:</span>
        <span>{name}</span>
      </div>
      <div className="user-data-item">
        <span>Email:</span>
        <span>{email}</span>
      </div>
      <div className="user-data-item">
        <span>Role:</span>
        <span>{role}</span>
      </div>
    </div>
);
}
export default UserInfo;