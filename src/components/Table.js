import styles from "./Table.module.css";
import Card from "./Card";
import { useContext, useEffect, useState } from "react";
import useFetch from "../Hooks/useFetch";
import { GET_CARDS } from "../api";
import Button from "../components/Helpers/Button";
import { ReactComponent as CardIcon } from "../imgs/cardIcon.svg";
import { ReactComponent as UserPlus } from "../imgs/user-plus.svg";
import { ReactComponent as Info } from "../imgs/circle-info-solid.svg";
import Players from "./Player/Players";
import { Context } from "../Context";
import Error from "./Helpers/Error";

const Table = () => {
  const [playersOpen, setPlayersOpen] = useState(false);
  const { players } = useContext(Context);
  const [error, setError] = useState(false);

  //console.log(players.length, error);

  const { request } = useFetch();

  useEffect(() => {
    async function getData() {
      const { url, options } = GET_CARDS(36);
      await request(url, options);
    }
    getData();
  }, [request]);

  function fetchCards() {
    if (players.length < 2) {
      setError(true)
      setTimeout(() => setError(false), 2000);
    } else {
      setError(false);
      console.log(players);
    }
  }

  /*
  const endPoint = `https://www.deckofcardsapi.com/api/deck/new/draw/?count=${36}`;
  const [tableCards, setTableCards] = useState([]);

  useEffect(() => {
    fetch(endPoint, {
      method: "GET",
      headers: {
        "Content-Type": "aplication/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setTableCards(data);
      })
      .catch((err) => console.log(err));
  }, [endPoint]);

  if (tableCards.success === true) {
    return (
      <div className={styles.table}>
        {(() => {
          let rows = [];
          let n = 5;
          let cardC = [];

          for (let i = 1; i <= n; i++) {
            rows.push(
              <div key={i} data="row">
                {(() => {
                  let columns = [];
                  for (let j = 1; j <= 2 * n - 1; j++) {
                    if (j >= n - (i - 1) && j <= n + (i - 1)) {
                      columns.push(
                        <Card
                          src={tableCards.cards[cardC.length].image}
                          key={j}
                        />
                      );
                      cardC.push("+1");
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
    );
  }*/
  return (
    <div className={styles.table}>
      <div className={styles.header}>
        <Button Svg={Info}>Como jogar</Button>
      </div>
      {(() => {
        let rows = [];
        let n = 5;
        let cardC = [];

        for (let i = 1; i <= n; i++) {
          rows.push(
            <div key={i} data="row">
              {(() => {
                let columns = [];
                for (let j = 1; j <= 2 * n - 1; j++) {
                  if (j >= n - (i - 1) && j <= n + (i - 1)) {
                    columns.push(<Card key={j} />);
                    cardC.push("+1");
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
        <Button Svg={CardIcon} onClick={() => fetchCards()}>
          Dar cartas
        </Button>
      </div>

      <Players setPlayersOpen={setPlayersOpen} playersOpen={playersOpen} />
      <Error error={error} />
    </div>
  );
};

export default Table;
