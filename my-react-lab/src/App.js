import React from 'react';
import './Styles/App.css'; 
import './Styles/Dashboard.css';
import UserInfo from './Components/UserInfo.js';
import Statistics from './Components/Statistics.js';
import Messages from './Components/Messages.js';


const Dashboard = () => {
  const user = {
    name: "Butt Saab",
    email: "buttsaab@gmail.com",
    role: "Administrator",
    image: "https://pbs.twimg.com/media/CIcBj0hWoAAJRyJ.jpg"
    };

  const stats = {
    totalUsers: 221409,
    activeUsers: 420,
    newSignups: 25,
    activePercentage: "50%"
    };

  const messages = [
    'Biryani or Beef Pulao?',
    'Dostoevsky or Allen Poe?',
    'Rimac or Koeniggseg?'
  ];
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Admin Dashboard</h1>
      <UserInfo {...user} />
      <Statistics {...stats} />
      <Messages messages={messages} />
    </div>
  );
}

export default Dashboard;
