import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Slide from "./components/Slider/Slider";
import { cards } from "./Data";
import Cart from "./components/Cart/Cart";
import Feauter from "./components/Feauter/Feauter";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <Cart key={card.id} item={card}/>
        ))}
      </Slide>
      <Feauter/>
    </div>
  );
}

export default App;
