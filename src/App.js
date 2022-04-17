import React from "react";
import Game from "./Components/Game/Game";
import Heading from "./Components/Heading/Heading";
import { GameStorage } from "./GameContext";
import "./App.css";

function App() {
  return (
    <>
      <Heading />
      <GameStorage>
        <Game />
      </GameStorage>
    </>
  );
}

export default App;
