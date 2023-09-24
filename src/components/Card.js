import styles from "./Card.module.css";

const Card = ({ src }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <div className={styles.backCard}></div>
        <img
          className={`${styles.frontCard} ${styles.hidden}`}
          src={src}
          alt="Card"
        />
      </div>
    </div>
  );
};

export default Card;
