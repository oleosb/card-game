import styles from "./Table.module.css";
import Card from "./Card";
import { useContext, useState } from "react";
import Button from "../components/Helpers/Button";
import { ReactComponent as CardIcon } from "../imgs/cardIcon.svg";
import { ReactComponent as UserPlus } from "../imgs/user-plus.svg";
import { ReactComponent as Info } from "../imgs/circle-info-solid.svg";
import { ReactComponent as Reset } from "../imgs/reset.svg";
import Players from "./Player/Players";
import { Context } from "../Context";
import Error from "./Helpers/Error";
import PayModal from "./PayModal";

const Table = () => {
  const [playersOpen, setPlayersOpen] = useState(false);
  const { players, fetchTableDeck, tableDeck } = useContext(Context);
  const [error, setError] = useState(false);

  function fetchCardsValidation() {
    if (players.length < 2) {
      setError(true);
      setTimeout(() => setError(false), 2000);
    } else {
      setError(false);
      fetchTableDeck();
    }
  }

  return (
    <div className={styles.table}>
      <PayModal />
      <div className={styles.header}>
        <Button Svg={Info}>Como jogar</Button>
      </div>
      {(() => {
        let rows = [];
        let n = 5;
        let cardC = [];

        for (let i = 1; i <= n; i++) {
          rows.push(
            <div key={i} data={i}>
              {(() => {
                let columns = [];
                for (let j = 1; j <= 2 * n - 1; j++) {
                  if (j >= n - (i - 1) && j <= n + (i - 1)) {
                    cardC.push("+1");
                    columns.push(<Card key={j} cardC={cardC.length - 1} />);
                  }
                }
                return columns;
              })()}
            </div>
          );
        }
        return rows;
      })()}

      <div className={styles.footer}>
        <Button Svg={UserPlus} onClick={() => setPlayersOpen(true)}>
          Adicionar jogador
        </Button>
        {!tableDeck && (
          <Button Svg={CardIcon} onClick={() => fetchCardsValidation()}>
            Dar cartas
          </Button>
        )}
        {tableDeck && <Button Svg={Reset}>Resetar</Button>}
      </div>

      <Players setPlayersOpen={setPlayersOpen} playersOpen={playersOpen} />
      <Error error={error} />
    </div>
  );
};

export default Table;
