import { useContext } from "react";
import styles from "./Card.module.css";
import { Context } from "../Context";

const Card = ({ data, cardC }) => {
  const { tableDeck } = useContext(Context);

  console.log(tableDeck);

  return (
    <div
      className={styles.cardContainer}
      data={tableDeck ? tableDeck[cardC].value : ""}
    >
      <div className={styles.card}>
        {/* <div className={styles.backCard}></div>
        <img
          className={`${styles.frontCard} ${styles.hidden}`}
          src={src}
          alt="Card"
        /> */}
        {data && <div className={styles.backCard}></div>}
        {tableDeck && (
          <img
            className={`${styles.frontCard} ${styles.hidden}`}
            src={tableDeck[cardC].image}
            alt="Card"
          />
        )}
      </div>
    </div>
  );
};

export default Card;
