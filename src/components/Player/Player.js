import styles from "./Player.module.css";
import Card from "../../imgs/card-back.jpg";

const Player = () => {
  return (
    <div className={styles.player}>
      <div className={styles.top}>
        <input type="text" placeholder="Nome" />
        <div className={styles.playerCards}>
          <img src={Card} alt="Card" />
          <img src={Card} alt="Card" />
        </div>
      </div>
      <div className={styles.bottom}>
        <div>Castigos: 01</div>
        <div>Mandos: 01</div>
      </div>
    </div>
  );
};

export default Player;
