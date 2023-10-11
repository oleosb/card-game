import styles from "./Player.module.css";
import { ReactComponent as Xmark } from "../../imgs/xmark.svg";
import { useContext } from "react";
import { Context } from "../../Context";

const Player = ({ name, cards, mandos, castigos, id }) => {
  const { deletePlayer, tableDeck } = useContext(Context);

  return (
    <div className={styles.player}>
      {!tableDeck && (
        <button
          className={styles.deletePlayer}
          onClick={() => deletePlayer(id)}
        >
          <Xmark />
        </button>
      )}
      <div className={styles.left}>
        <div className={styles.name}>{name}</div>
        <div className={styles.scores}>
          <div>
            Castigos: <span>{castigos}</span>
          </div>
          <div>
            Mandos: <span>{mandos}</span>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div>
          <img src={cards[0].src} alt="Card" />
        </div>
        <div>
          <img src={cards[1].src} alt="Card" />
        </div>
      </div>
    </div>
  );
};

export default Player;
