import "./App.css";
import Game from "./Components/Game/Game";
import Heading from "./Components/Heading/Heading";
import { GameStorage } from "./GameContext";

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
