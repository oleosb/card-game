import styles from "./Table.module.css";
import Card from "./Card";
import { useContext, useRef, useState } from "react";
import Button from "../components/Helpers/Button";
import { ReactComponent as CardIcon } from "../imgs/cardIcon.svg";
import { ReactComponent as UserPlus } from "../imgs/user-plus.svg";
import { ReactComponent as Info } from "../imgs/circle-info-solid.svg";
import { ReactComponent as Reset } from "../imgs/reset.svg";
import { ReactComponent as Result } from "../imgs/results.svg";
import Players from "./Player/Players";
import { Context } from "../Context";
import Error from "./Helpers/Error";
import PayModal from "./Helpers/Modal/PayModal";
import SendModal from "./Helpers/Modal/SendModal";
import Results from "./Results";

const Table = () => {
  const [playersOpen, setPlayersOpen] = useState(false);
  const [resultsOpen, setResultsOpen] = useState(false);
  const {
    players,
    fetchTableDeck,
    tableDeck,
    payModal,
    sendModal,
    setTableDeck,
    setCurrentRoundData,
    setFlippedCards,
    setPlayers,
  } = useContext(Context);
  const [error, setError] = useState(false);
  const pyramidRef = useRef(null);
  const [key, setKey] = useState(0);

  function fetchCardsValidation() {
    if (players.length < 2) {
      setError(true);
      setTimeout(() => setError(false), 2000);
    } else {
      setError(false);
      fetchTableDeck();
    }
  }

  function resetGame() {
    setKey((k) => k + 1);
    setTableDeck("");
    setCurrentRoundData("");
    setFlippedCards(24);
    let playersCopy = [...players];

    playersCopy.forEach((player) => {
      player.mandos = 0;
      player.castigos = 0;
    });

    setPlayers(playersCopy);
  }

  return (
    <div className={styles.table}>
      {sendModal && <SendModal />}
      {payModal && <PayModal />}
      <div className={styles.header}>
        <Button Svg={Info}>Como jogar</Button>
      </div>
      <div className={styles.pyramid} ref={pyramidRef} key={key}>
        {(() => {
          let rows = [];
          let n = 5;
          let cardC = [];

          for (let i = 1; i <= n; i++) {
            rows.push(
              <div key={i} row={i}>
                {(() => {
                  let columns = [];
                  for (let j = 1; j <= 2 * n - 1; j++) {
                    if (j >= n - (i - 1) && j <= n + (i - 1)) {
                      cardC.push("+1");
                      columns.push(
                        <Card key={j} cardC={cardC.length - 1} row={i} />
                      );
                    }
                  }
                  return columns;
                })()}
              </div>
            );
          }
          return rows;
        })()}
      </div>

      <div className={styles.footer}>
        {!tableDeck && (
          <Button Svg={UserPlus} onClick={() => setPlayersOpen(true)}>
            Adicionar jogador
          </Button>
        )}
        {tableDeck && (
          <Button Svg={Result} onClick={() => setResultsOpen(true)}>
            Resultado
          </Button>
        )}
        {!tableDeck && (
          <Button Svg={CardIcon} onClick={() => fetchCardsValidation()}>
            Dar cartas
          </Button>
        )}
        {tableDeck && (
          <Button Svg={Reset} onClick={() => resetGame()}>
            Resetar
          </Button>
        )}
      </div>

      <Players setPlayersOpen={setPlayersOpen} playersOpen={playersOpen} />
      <Results setResultsOpen={setResultsOpen} resultsOpen={resultsOpen} />
      {error && <Error />}
    </div>
  );
};

export default Table;
