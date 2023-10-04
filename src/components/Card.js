import { useContext, useRef, useState } from "react";
import styles from "./Card.module.css";
import { Context } from "../Context";

const Card = ({ cardC }) => {
  const { tableDeck } = useContext(Context);
  const [fliped, setFliped] = useState(false);

  const cardRef = useRef(null);

  const handleClick = () => {
    if (cardRef.current.getAttribute("fliped")) {
      return false;
    } else {
      cardRef.current.setAttribute("fliped", true);
    }
  };

  return (
    <div
      className={styles.cardContainer}
      data={tableDeck ? tableDeck[cardC].value : ""}
      ref={cardRef}
      onClick={() => handleClick()}
    >
      <div className={`${styles.card} `}>
        {/* <div className={styles.backCard}></div>
        <img
          className={`${styles.frontCard} ${styles.hidden}`}
          src={src}
          alt="Card"
        /> */}
        {/* <div className={styles.backCard}></div> */}
        {tableDeck && (
          <img
            className={`${styles.frontCard}`}
            src={tableDeck[cardC].image}
            alt="Card"
          />
        )}
      </div>
    </div>
  );
};

export default Card;
