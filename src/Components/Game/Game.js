import { useEffect } from "react";
import { GET_RANDOM_NUMBER } from "../../Api";
import useFetch from "../../Hooks/useFetch";
import Inputs from "../Inputs/Inputs";
import Numbers from "../Numbers/Numbers";
import styles from "./Game.module.css";

const Game = () => {
  const { data, error, request } = useFetch();

  useEffect(() => {
    async function fetchRandomNumber() {
      const { url, options } = GET_RANDOM_NUMBER();
      const { response, json } = await request(url, options);
    }
    fetchRandomNumber();
  }, []);
  return (
    <>
      {error && <div>{error}</div>}
      {data && (
        <div className={styles.gameContainer}>
          <Numbers number={data.value} />
          <Inputs />
        </div>
      )}
    </>
  );
  if (error) return <div>{error}</div>;
  if (data) return <Numbers number={data.value} />;
};

export default Game;
