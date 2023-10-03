import styles from "./Player.module.css";
import Card from "../../imgs/card.png";

const Player = ({ name, cards, mandos, castigos }) => {
  return (
    <div className={styles.player}>
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
          <img src={Card} alt="Card" />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Player;
