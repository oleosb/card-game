import { useContext, useRef } from "react";
import styles from "./Card.module.css";
import { Context } from "../Context";

const Card = ({ cardC }) => {
  const { tableDeck, verifyCards } = useContext(Context);

  const cardRef = useRef(null);

  const handleClick = () => {
    if (cardRef.current !== null) {
      if (cardRef.current.getAttribute("fliped")) {
        return false;
      } else {
        if (
          cardRef.current.previousElementSibling === null ||
          cardRef.current.previousElementSibling.getAttribute("fliped")
        ) {
          cardRef.current.setAttribute("fliped", true);
          verifyCards(cardRef.current.getAttribute("data"));
        }
      }
    }
  };

  return (
    <div
      className={styles.cardContainer}
      data={tableDeck ? tableDeck[cardC].value : ""}
      ref={tableDeck ? cardRef : null}
      onClick={() => handleClick()}
    >
      <div className={`${styles.card}`}>
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
