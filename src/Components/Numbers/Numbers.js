import React, { useContext, useEffect, useState } from "react";
import { Digit } from "./Digit";
import { GameContext } from "../../GameContext";
import styles from "./Numbers.module.css";

const convertNumberIntoArray = (num) => Array.from(num.toString()).map(Number);

const Numbers = () => {
  const { gameInfos } = useContext(GameContext);
  const [numberArray, setNumberArray] = useState();
  useEffect(() => {
    function handleArrayToDisplay() {
      if (gameInfos.status === "error")
        return convertNumberIntoArray(gameInfos.answer);
      else if (gameInfos.guess) return convertNumberIntoArray(gameInfos.guess);
      else return gameInfos.displayArray;
    }
    setNumberArray(handleArrayToDisplay());
  }, [gameInfos, setNumberArray]);

  return (
    <div className={styles.digitContainer}>
      {numberArray &&
        numberArray.map((digit, idx) => <Digit key={idx} digit={digit} />)}
    </div>
  );
};

export default Numbers;
