import React, { useState, createContext } from "react";
import { GET_RANDOM_NUMBER } from "./Api";
import useFetch from "./Hooks/useFetch";
import { GAME_STATUS } from "./Utils/constants";

const setInitialArray = (num) => Array.from(num.toString()).fill(10);
const initialGameState = {
  answer: null,
  displayArray: [10, 10, 10],
  guess: "",
  status: GAME_STATUS.DEFAULT,
};
export const GameContext = createContext();

export const GameStorage = ({ children }) => {
  const [gameInfos, setGameInfos] = useState(initialGameState);

  const { request } = useFetch();
  async function fetchRandomNumber() {
    setGameInfos(initialGameState);
    const { url, options } = GET_RANDOM_NUMBER();
    const { json } = await request(url, options);
    let answer = json.Error ? json.StatusCode : json.value;
    let newInfos = {
      answer: answer,
      displayArray: setInitialArray(answer),
      status: json.Error ? GAME_STATUS.ERROR : GAME_STATUS.DEFAULT,
    };
    setGameInfos((prevGameInfos) => ({ ...prevGameInfos, ...newInfos }));
  }
  return (
    <GameContext.Provider
      value={{ gameInfos, setGameInfos, fetchRandomNumber }}
    >
      {children}
    </GameContext.Provider>
  );
};
