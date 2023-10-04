import React, { useState } from "react";
import { nanoid } from "nanoid";
export const Context = React.createContext();

const GameStorage = ({ children }) => {
  const [players, setPlayers] = useState("");
  const [tableDeck, setTableDeck] = useState("");

  const fetchTableDeck = () => {
    fetch("https://www.deckofcardsapi.com/api/deck/new/draw/?count=25", {
      method: "GET",
      headers: {
        "Content-Type": "aplication/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setTableDeck(json.cards);
      });
  };

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
    <Context.Provider value={{ players, addPlayer, fetchTableDeck, tableDeck }}>
      {children}
    </Context.Provider>
  );
};

export default GameStorage;
