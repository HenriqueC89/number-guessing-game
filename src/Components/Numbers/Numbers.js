import React, { useContext, useEffect, useState } from "react";
import { Digit } from "./Digit";
import { GameContext } from "../../GameContext";
import styles from "./Numbers.module.css";

const convertNumberIntoArray = (num) => Array.from(num.toString()).map(Number);
const Numbers = () => {
  const { gameInfos } = useContext(GameContext);
  const [numberArray, setNumberArray] = useState();
  useEffect(() => {
    setNumberArray(
      gameInfos.guess
        ? convertNumberIntoArray(gameInfos.guess)
        : gameInfos.displayArray
    );
  }, [gameInfos, setNumberArray]);

  return (
    <div className={styles.digitContainer}>
      {numberArray &&
        numberArray.map((digit, idx) => <Digit key={idx} digit={digit} />)}
    </div>
  );
};

export default Numbers;
