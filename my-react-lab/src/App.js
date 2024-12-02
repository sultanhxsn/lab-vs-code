import React from 'react';
import './Styles/App.css'; 
import Card from './Components/Card.js';

function App() {
  return (
    <div>
      <Card name="Nainitalwala" age={40} occupation="Parchoon Ki Dukan" location="Dhoraji" image="image.jpg"/>
    </div>
  );
}

export default App;
