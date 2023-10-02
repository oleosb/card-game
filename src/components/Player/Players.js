import Player from "./Player";
import styles from "./Players.module.css";
import Title from "../Helpers/Title";
import Button from "../Helpers/Button";
import { ReactComponent as Thumb } from "../../imgs/thumbs-up-solid.svg";
import { ReactComponent as Plus } from "../../imgs/plus-solid.svg";

const Players = ({ setPlayersOpen }) => {
  return (
    <section className={`${styles.players}`}>
      <Title margin={"0 0 10px 0"}>JOGADORES</Title>
      <Player />
      <Player />
      <Player />
      <footer>
        <Button Svg={Plus} dark={true}>
          Adicionar
        </Button>
        <Button Svg={Thumb} dark={true} onClick={() => setPlayersOpen(false)}>
          Ok
        </Button>
      </footer>
    </section>
  );
};

export default Players;
