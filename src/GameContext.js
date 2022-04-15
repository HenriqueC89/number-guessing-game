import React from "react";

export const GameContext = React.createContext();

export const GameStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  return (
    <GameContext.Provider value={{ data, setData }}>
      {children}
    </GameContext.Provider>
  );
};
