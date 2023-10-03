import React from "react";

export const Context = React.createContext();

const GameStorage = ({ children }) => {
  return <Context.Provider>{children}</Context.Provider>;
};

export default GameStorage;
