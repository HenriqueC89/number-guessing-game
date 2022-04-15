import React, { useState } from "react";
import { INPUT_MIN, INPUT_MAX } from "../../Utils/constants";
import styles from "./Input.module.css";

const Input = () => {
  const [guess, setGuess] = useState("");
  const handleChange = (event) => {
    let { value, min, max } = event.target;
    value = value.length
      ? Math.max(Number(min), Math.min(Number(max), Number(value)))
      : "";
    setGuess(value);
  };
  return (
    <input
      className={styles.input}
      type='number'
      name='guessInput'
      id='guessInput'
      placeholder='Digite o palpite'
      onChange={handleChange}
      value={guess}
      min={INPUT_MIN}
      max={INPUT_MAX}
    />
  );
};

export default Input;
