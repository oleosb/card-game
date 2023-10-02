import Player from "./Player";
import styles from "./Players.module.css";
import Plus from "../../imgs/plus-solid.svg";
import Title from "../Helpers/Title";

const Players = () => {
  return (
    <section className={styles.players}>
      <Title margin={"0 0 10px 0"}>JOGADORES</Title>
      <Player />
      <Player />
      <Player />
      <button className={styles.addPlayer}>
        <img src={Plus} alt="Adicionar jogador" />
      </button>
    </section>
  );
};

export default Players;
