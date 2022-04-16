import React, { useContext } from "react";
import { GameContext } from "../../GameContext";

const Button = ({ handleGuessClick, guessInput }) => {
  const { gameInfos, setGameInfos } = useContext(GameContext);

  return (
    <button
      onClick={handleGuessClick}
      disabled={gameInfos.status !== "default" || !guessInput}
    >
      Enviar
    </button>
  );
};

export default Button;
