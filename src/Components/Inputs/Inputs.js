import React, { useContext, useState } from "react";
import Button from "./Button";
import Input from "./Input";
import { GameContext } from "../../GameContext";

const Inputs = () => {
  //botar logica do onchange aqui, apenas mudar o guess quando clicar no button
  const { gameInfos, setGameInfos } = useContext(GameContext);
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
  return (
    <div>
      <Input handleChange={handleChange} guessInput={guessInput} />
      <Button handleGuessClick={handleGuessClick} guessInput={guessInput} />
    </div>
  );
};

export default Inputs;
