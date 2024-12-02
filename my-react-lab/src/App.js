import React from 'react';
import './Styles/App.css'; 
import Card from './Components/Card.js';

function App() {
  return (
    <div>
      <Card name="Nainitalwala" age={40} occupation="Parchoon Ki Dukan" location="Dhoraji" />
    </div>
  );
}

export default App;
