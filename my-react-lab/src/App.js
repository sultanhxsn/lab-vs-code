import React from "react";
import Navbar from "./Components/Navbar";
import LandingPage from "./Components/LandingPage";
import SpecialtyMenu from "./Components/SpecialtyMenu";
import Footer from "./Components/Footer";
import Counter from "./Components/Counter";
import InputName from "./Components/Calculator";
import NameAge from "./Components/NameAge";
import QuizApp from "./Components/QuizApp";
import Calculator from "./Components/Calculator";
import LoginForm from "./Components/LoginForm";
import Counter1 from './Components/Counter1';
import Calc1 from "./Components/Calc1";

function App() {
  const menuItems = [
    { title: "Spicy Chicken Wings", description: "Our signature spicy wings", price: 500 },
    { title: "Classic Fried Chicken", description: "Traditional recipe", price: 350 },
    { title: "Spicy Chicken Wings", description: "Our signature spicy wings", price: 650 },
  ];

  return (
    <div>
      <Counter1 />
      <Calc1 />
    </div>
  );
}

export default App;

