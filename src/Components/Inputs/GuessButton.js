import React, { useContext } from "react";
import { GameContext } from "../../GameContext";
import { TEXT } from "../../Utils/constants";
import styles from "./GuessButton.module.css";

const GuessButton = ({ handleGuessClick, guessInput }) => {
  const { gameInfos } = useContext(GameContext);

  return (
    <button
      onClick={handleGuessClick}
      disabled={gameInfos.status !== "default" || !guessInput}
      className={styles.button}
    >
      {TEXT.GUESS_BUTTON}
    </button>
  );
};

export default GuessButton;
