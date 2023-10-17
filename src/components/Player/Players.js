import Player from "./Player";
import styles from "./Players.module.css";
import Title from "../Helpers/Title";
import Button from "../Helpers/Button";
import { ReactComponent as Thumb } from "../../imgs/thumbs-up-solid.svg";
import { ReactComponent as Plus } from "../../imgs/plus-solid.svg";
import { useContext, useState } from "react";
import { Context } from "../../Context";

const Players = ({ setPlayersOpen, playersOpen }) => {
  const { addPlayer, players } = useContext(Context);
  const [name, setName] = useState("");

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
      <Title margin={"20px 0 0 0"}>JOGADORES</Title>
      {players && (
        <div className={styles.playersList}>
          {players.map((player, idx) => (
            <Player {...player} key={idx} />
          ))}
        </div>
      )}

      {players && (
        <Button
          Svg={Thumb}
          dark={true}
          onClick={() => setPlayersOpen(false)}
          margin={"0px 0 0 0"}
        >
          Ok
        </Button>
      )}
    </section>
  );
};

export default Players;
