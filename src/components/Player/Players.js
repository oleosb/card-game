import Player from "./Player";
import styles from "./Players.module.css";
import Plus from "../../imgs/plus-solid.svg";

const Players = () => {
  return (
    <section className={styles.players}>
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
