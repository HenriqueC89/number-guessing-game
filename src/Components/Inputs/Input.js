import React, { useContext } from "react";
import { INPUT_MIN, INPUT_MAX } from "../../Utils/constants";
import { GameContext } from "../../GameContext";
import styles from "./Input.module.css";

const Input = ({ handleChange, guessInput }) => {
  const { gameInfos, setGameInfos } = useContext(GameContext);

  return (
    <input
      className={styles.input}
      type='number'
      name='guessInput'
      id='guessInput'
      placeholder='Digite o palpite'
      onChange={handleChange}
      value={guessInput}
      min={INPUT_MIN}
      max={INPUT_MAX}
      disabled={gameInfos.status !== "default"}
    />
  );
};

export default Input;
