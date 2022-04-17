import React, { useContext, useState } from "react";
import GuessButton from "./GuessButton";
import Input from "./Input";
import { GameContext } from "../../GameContext";
import RetryButton from "./RetryButton";

const Inputs = () => {
  const { gameInfos, setGameInfos, fetchRandomNumber } =
    useContext(GameContext);
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
      newStatus.status = "victory";
    }
    setGameInfos((prevGameInfos) => ({ ...prevGameInfos, ...newStatus }));
  };

  const handleRetryClick = () => {
    fetchRandomNumber();
  };
  return (
    <div>
      <div>
        {gameInfos.status !== "default" && (
          <RetryButton handleRetryClick={handleRetryClick} />
        )}
      </div>
      <Input handleChange={handleChange} guessInput={guessInput} />
      <GuessButton
        handleGuessClick={handleGuessClick}
        guessInput={guessInput}
      />
    </div>
  );
};

export default Inputs;
