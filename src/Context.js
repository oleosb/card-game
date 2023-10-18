import React, { useState } from "react";
import { nanoid } from "nanoid";
export const Context = React.createContext();

const GameStorage = ({ children }) => {
  const [players, setPlayers] = useState([]);
  const [tableDeck, setTableDeck] = useState("");
  const [currentRoundData, setCurrentRoundData] = useState("");
  const [flippedCards, setFlippedCards] = useState(24);
  const [payModal, setPayModal] = useState(false);
  const [sendModal, setSendModal] = useState(false);

  const verifyCards = (tableCard, row) => {
    let playersCopy = [...players];
    let roundData = [];

    playersCopy.forEach((player) => {
      let castigos = 0;
      let mandos = 0;

      player.cards.forEach((card) => {
        if (card.code === tableCard) {
          if (row % 2 === 0) {
            mandos++;
            player.mandos++;

            if (mandos > 1) {
              roundData.forEach((obj) => {
                if (obj.id === player.id) {
                  obj.mandos++;
                }
              });
            } else {
              roundData.push({
                name: player.name,
                id: player.id,
                mandos: mandos,
              });
            }

            setCurrentRoundData(roundData);
            setSendModal(true);
          } else {
            castigos++;
            player.castigos++;

            if (castigos > 1) {
              roundData.forEach((obj) => {
                if (obj.id === player.id) {
                  obj.castigos++;
                }
              });
            } else {
              roundData.push({
                name: player.name,
                id: player.id,
                castigos: castigos,
              });
            }
            setCurrentRoundData(roundData);
            setPlayers(playersCopy);
            setPayModal(true);
          }
        }
      });
    });
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
        tableDeck,
        currentRoundData,
        flippedCards,
        payModal,
        sendModal,
        addPlayer,
        fetchTableDeck,
        verifyCards,
        setCurrentRoundData,
        setFlippedCards,
        deletePlayer,
        setPlayers,
        setPayModal,
        setSendModal,
        setTableDeck,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default GameStorage;
