import styles from "./Player.module.css";
import Card from "../../imgs/card.png";

const Player = () => {
  return (
    <div className={styles.player}>
      <div className={styles.left}>
        <div className={styles.name}>Nome</div>
        <div className={styles.scores}>
          <div>
            Castigos: <span>01</span>
          </div>
          <div>
            Mandos: <span>02</span>
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
