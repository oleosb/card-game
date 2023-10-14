import React, { useState } from "react";
import { nanoid } from "nanoid";
export const Context = React.createContext();

const GameStorage = ({ children }) => {
  const [players, setPlayers] = useState([
    {
      id: nanoid(),
      name: "teste",
      cards: [
        { code: "7", src: "cards[0].image" },
        { code: "QUEEN", src: "cards[1].image" },
      ],
      mandos: 0,
      castigos: 0,
    },
    {
      id: nanoid(),
      name: "teste2",
      cards: [
        { code: "QUEEN", src: "cards[0].image" },
        { code: "QUEEN", src: "cards[1].image" },
      ],
      mandos: 0,
      castigos: 0,
    },
    {
      id: nanoid(),
      name: "teste3",
      cards: [
        { code: "QUEEN", src: "cards[0].image" },
        { code: "ACE", src: "cards[1].image" },
      ],
      mandos: 0,
      castigos: 0,
    },
  ]);
  const [tableDeck, setTableDeck] = useState("");
  const [currentRoundData, setCurrentRoundData] = useState("");

  const [flippedCards, setFlippedCards] = useState(24);

  const verifyCards = (tableCard) => {
    let playersCopy = [...players];
    let roundData = [];
    playersCopy.forEach((player) => {
      let castigo = 0;

      player.cards.forEach((card) => {
        if (card.code === tableCard) {
          castigo++;
          player.castigos++;

          if (castigo > 1) {
            roundData.forEach((obj) => {
              if (obj.id === player.id) {
                obj.castigo++;
              }
            });
          } else {
            roundData.push({
              name: player.name,
              id: player.id,
              castigo: castigo,
            });
          }
          setCurrentRoundData(roundData);
          setPlayers(playersCopy);
        }
      });
    });
  };

  const verifySendCards = (toggled) => {
    console.log(toggled);
  };

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

  const deletePlayer = (id) => {
    const playersCopy = players.filter((player) => player.id !== id);

    setPlayers(playersCopy);
  };

  return (
    <Context.Provider
      value={{
        players,
        addPlayer,
        fetchTableDeck,
        tableDeck,
        verifyCards,
        currentRoundData,
        setCurrentRoundData,
        flippedCards,
        setFlippedCards,
        deletePlayer,
        verifySendCards,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default GameStorage;
