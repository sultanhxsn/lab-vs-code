import React from "react";
import { useParams } from "react-router-dom";
import '../Styles/UserProfile.css';

function UserProfile() {
  const { username } = useParams();
  return <h1>User Profile for: {username}</h1>;
}

export default UserProfile;
