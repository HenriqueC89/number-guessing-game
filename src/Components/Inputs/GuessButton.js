import React, { useContext } from "react";
import { GameContext } from "../../GameContext";
import { TEXT } from "../../Utils/constants";

const GuessButton = ({ handleGuessClick, guessInput }) => {
  const { gameInfos } = useContext(GameContext);

  return (
    <button
      onClick={handleGuessClick}
      disabled={gameInfos.status !== "default" || !guessInput}
    >
      {TEXT.GUESS_BUTTON}
    </button>
  );
};

export default GuessButton;
