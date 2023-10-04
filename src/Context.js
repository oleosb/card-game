import React, { useState } from "react";
import { nanoid } from "nanoid";
import useFetch from "./Hooks/useFetch";

import { GET_CARDS } from "./api";

export const Context = React.createContext();

const GameStorage = ({ children }) => {
  async function getData(cardsNumber) {
    const { url, options } = GET_CARDS(cardsNumber);
    await request(url, options);
  }

  const { request } = useFetch();

  const [players, setPlayers] = useState("");

  const addPlayer = (name, cards) => {
    if (name) {
      const newPlayer = {
        id: nanoid(),
        name: name,
        cards: [
          { code: cards[0].value, src: cards[0].image },
          { code: cards[1].value, src: cards[1].image },
        ],
        mandos: 0,
        castigos: 0,
      };

      if (players === "") {
        setPlayers([newPlayer]);
      } else {
        setPlayers([...players, newPlayer]);
      }
    }
  };

  return (
    <Context.Provider value={{ players, addPlayer, getData }}>
      {children}
    </Context.Provider>
  );
};

export default GameStorage;
