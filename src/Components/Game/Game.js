import React, { useEffect, useContext } from "react";
import Inputs from "../Inputs/Inputs";
import Numbers from "../Numbers/Numbers";
import { GameContext } from "../../GameContext";
import styles from "./Game.module.css";
import StatusText from "./StatusText";

const Game = () => {
  const { gameInfos, fetchRandomNumber } = useContext(GameContext);

  useEffect(() => {
    fetchRandomNumber();
  }, []);
  return (
    <>
      {gameInfos.answer && (
        <div className={styles.gameContainer}>
          <StatusText />
          <Numbers />
          <Inputs />
        </div>
      )}
    </>
  );
};

export default Game;
