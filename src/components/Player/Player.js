import styles from "./Player.module.css";

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
