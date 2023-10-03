import React, { useState } from "react";

export const Context = React.createContext();

const GameStorage = ({ children }) => {
  const [tableDeck, setTableDeck] = useState("nulssl");
  const [playersDeck, setPlayersDeck] = useState(null);
  const [players, setPlayers] = useState([{ nome: "Leo", cards: ["K", "J"] }]);

  return (
    <Context.Provider value={{ tableDeck, players }}>
      {children}
    </Context.Provider>
  );
};

export default GameStorage;
