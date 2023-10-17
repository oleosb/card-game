import { useContext, useRef } from "react";
import styles from "./Card.module.css";
import { Context } from "../Context";

const Card = ({ cardC, row }) => {
  const { tableDeck, verifyCards, flippedCards, setFlippedCards } =
    useContext(Context);

  const cardRef = useRef(null);

  const handleClick = () => {
    if (
      cardRef.current &&
      +cardRef.current.getAttribute("num") === flippedCards
    ) {
      cardRef.current.setAttribute("flipped", true);
      setTimeout(() => {
        verifyCards(cardRef.current.getAttribute("data"), row);
        setFlippedCards(flippedCards - 1);
      }, 700);
    }
  };

  return (
    <div
      className={styles.cardContainer}
      data={tableDeck ? tableDeck[cardC].value : ""}
      num={cardC}
      ref={tableDeck ? cardRef : null}
      onClick={() => handleClick()}
      row={row}
    >
      <div className={`${styles.card}`}>
        {tableDeck && <div className={styles.backCard}></div>}
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
