import React, { useContext, useState } from "react";
import { GameContext } from "../../GameContext";
import GuessButton from "./GuessButton";
import Input from "./Input";
import RetryButton from "./RetryButton";
import styles from "./Inputs.module.css";
import { GAME_STATUS } from "../../Utils/constants";

const Inputs = () => {
  const { gameInfos, setGameInfos, fetchRandomNumber } = useContext(
    GameContext
  );
  const [guessInput, setGuessInput] = useState("");

  const handleChange = (event) => {
    let { value, min, max } = event.target;
    value = value.length
      ? Math.max(Number(min), Math.min(Number(max), Number(value)))
      : "";
    setGuessInput(value);
  };

  const handleGuessClick = () => {
    setGameInfos((prevGameInfos) => ({ ...prevGameInfos, guess: guessInput }));
    let newStatus = {};
    if (gameInfos.answer === guessInput) {
      newStatus.status = GAME_STATUS.VICTORY;
    }
    setGuessInput("");
    setGameInfos((prevGameInfos) => ({ ...prevGameInfos, ...newStatus }));
  };

  const handleRetryClick = () => {
    fetchRandomNumber();
  };

  return (
    <div className={styles.inputsContainer}>
      <div className={styles.retryButton}>
        {gameInfos.status !== GAME_STATUS.DEFAULT && (
          <RetryButton handleRetryClick={handleRetryClick} />
        )}
      </div>
      <Input
        handleChange={handleChange}
        guessInput={guessInput}
        className={styles.guessInput}
      />
      <GuessButton
        handleGuessClick={handleGuessClick}
        guessInput={guessInput}
        className={styles.guessButton}
      />
    </div>
  );
};

export default Inputs;
