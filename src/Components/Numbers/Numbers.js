import React from "react";
import { Digit } from "./Digit";
import styles from "./Numbers.module.css";

const convertNumberIntoArray = (num) => Array.from(num.toString()).map(Number);

const Numbers = ({ number = 123 }) => {
  let numberArray = convertNumberIntoArray(number);
  return (
    <div className={styles.digitContainer}>
      {numberArray.map((digit, idx) => (
        <Digit key={idx} digit={digit} />
      ))}
    </div>
  );
};

export default Numbers;
