import { useEffect, useContext } from "react";
import { GET_RANDOM_NUMBER } from "../../Api";
import useFetch from "../../Hooks/useFetch";
import Inputs from "../Inputs/Inputs";
import Numbers from "../Numbers/Numbers";
import { GameContext } from "../../GameContext";
import styles from "./Game.module.css";

const setInitialArray = (num) => Array.from(num.toString()).fill(10);

const Game = () => {
  const { error, request } = useFetch();
  const { gameInfos, setGameInfos } = useContext(GameContext);
  async function fetchRandomNumber() {
    const { url, options } = GET_RANDOM_NUMBER();
    const { json } = await request(url, options);
    let newAnswer = {
      answer: json.value,
      displayArray: setInitialArray(json.value),
    };
    setGameInfos((prevGameInfos) => ({ ...prevGameInfos, ...newAnswer }));
  }
  useEffect(() => {
    fetchRandomNumber();
  }, []);
  return (
    <>
      {error && <div>{error}</div>}
      {gameInfos.answer && (
        <div className={styles.gameContainer}>
          <Numbers />
          <Inputs />
        </div>
      )}
    </>
  );
  // if (error) return <div>{error}</div>;
  // if (data) return <Numbers number={data.value} />;
};

export default Game;
