import React, { useState, createContext } from "react";
import { GET_RANDOM_NUMBER } from "./Api";
import useFetch from "./Hooks/useFetch";

const setInitialArray = (num) => Array.from(num.toString()).fill(10);
const initialGameState = {
  answer: null,
  displayArray: [10, 10, 10],
  guess: "",
  status: "default",
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
      status: json.Error ? "error" : "default",
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
