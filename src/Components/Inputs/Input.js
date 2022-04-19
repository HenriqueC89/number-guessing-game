import React, { useContext } from "react";
import { INPUT_MIN, INPUT_MAX, TEXT, GAME_STATUS } from "../../Utils/constants";
import { GameContext } from "../../GameContext";
import styles from "./Input.module.css";

const Input = ({ handleChange, guessInput }) => {
  const { gameInfos } = useContext(GameContext);

  return (
    <input
      className={styles.input}
      type='number'
      name='guessInput'
      id='guessInput'
      placeholder={TEXT.GUESS_INPUT_PLACEHOLDER_TEXT}
      onChange={handleChange}
      value={guessInput}
      min={INPUT_MIN}
      max={INPUT_MAX}
      disabled={gameInfos.status !== GAME_STATUS.DEFAULT}
    />
  );
};

export default Input;
