import { useContext, useEffect, useRef, useState } from "react";
import styles from "./Card.module.css";
import { Context } from "../Context";

const Card = ({ cardC, row }) => {
  const { tableDeck, verifyCards, flippedCards, setFlippedCards, setResults } =
    useContext(Context);

  const cardRef = useRef(null);
  const [cardColor, setCardColor] = useState("");

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

      if (flippedCards === 0) {
        setResults(true);
      }
    }
  };

  useEffect(() => {
    let color = row % 2;

    if (color === 0) {
      setCardColor(true);
    } else {
      setCardColor(false);
    }
  }, [row]);

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
        {tableDeck && (
          <div
            className={`${styles.backCard} ${
              cardColor ? styles.par : styles.impar
            }`}
          ></div>
        )}
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
