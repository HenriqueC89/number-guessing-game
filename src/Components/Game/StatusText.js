import React, { useContext } from "react";
import { GameContext } from "../../GameContext";
import styles from "./StatusText.module.css";
import { GAME_STATUS, TEXT } from "../../Utils/constants";

const StatusText = () => {
  const { gameInfos } = useContext(GameContext);
  let text = "";
  if (gameInfos.guess && gameInfos.status === GAME_STATUS.DEFAULT) {
    text =
      gameInfos.guess > gameInfos.answer ? TEXT.LOWER_GUESS : TEXT.HIGHER_GUESS;
  } else if (gameInfos.status === GAME_STATUS.ERROR) {
    text = TEXT.ERROR;
  } else if (gameInfos.status === GAME_STATUS.VICTORY) {
    text = TEXT.VICTORY;
  }
  return <p className={`${styles.text} ${styles[gameInfos.status]}`}>{text}</p>;
};

export default StatusText;
