import Player from "./Player";
import styles from "./Players.module.css";
import Title from "../Helpers/Title";
import Button from "../Helpers/Button";
import { ReactComponent as Thumb } from "../../imgs/thumbs-up-solid.svg";
import { ReactComponent as Plus } from "../../imgs/plus-solid.svg";
import { useCallback, useContext, useState } from "react";
import { Context } from "../../Context";
import useFetch from "../../Hooks/useFetch";
import { json } from "react-router-dom";

const Players = ({ setPlayersOpen, playersOpen }) => {
  const { addPlayer, players, tableDeck } = useContext(Context);
  const [name, setName] = useState("");
  const { data } = useFetch();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    fetch("https://www.deckofcardsapi.com/api/deck/new/draw/?count=2", {
      method: "GET",
      headers: {
        "Content-Type": "aplication/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        addPlayer(name, json.cards);
      });
    setName("");
  };

  return (
    <section
      className={`${styles.players} ${
        playersOpen ? styles.open : styles.close
      }`}
    >
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          className={styles.name}
          placeholder="Adicione um nome ao jogador..."
          value={name}
          onChange={({ target }) => setName(target.value)}
        />
        <Button Svg={Plus} dark={true} margin={"10px 0 20px 0"}>
          Adicionar
        </Button>
      </form>
      {players && <Title margin={"20px 0 0 0"}>JOGADORES</Title>}

      {players &&
        players.map((player, idx) => <Player {...player} key={idx} />)}

      {players && (
        <Button
          Svg={Thumb}
          dark={true}
          onClick={() => setPlayersOpen(false)}
          margin={"20px 0 0 0"}
        >
          Ok
        </Button>
      )}

      {tableDeck && "aaa"}
    </section>
  );
};

export default Players;
