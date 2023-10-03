import React, { useState } from "react";
import { nanoid } from "nanoid";

export const Context = React.createContext();

const GameStorage = ({ children }) => {
  const [players, setPlayers] = useState("");

  const addPlayer = (name) => {
    if (name) {
      console.log("name");
      const newPlayer = {
        id: nanoid(),
        name: name,
        cards: [],
      };

      if (players === "") {
        setPlayers([newPlayer]);
      } else {
        setPlayers([...players, newPlayer]);
      }
    }
  };

  return (
    <Context.Provider value={{ players, addPlayer }}>
      {children}
    </Context.Provider>
  );
};

export default GameStorage;
