import React, { useState, createContext } from "react";

export const GameContext = createContext();

export const GameStorage = ({ children }) => {
  const [gameInfos, setGameInfos] = useState({
    answer: null,
    displayArray: [10, 10, 10],
    guess: "",
    status: "default",
  });
  return (
    <GameContext.Provider value={{ gameInfos, setGameInfos }}>
      {children}
    </GameContext.Provider>
  );
};
