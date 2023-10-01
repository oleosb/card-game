import styles from "./Table.module.css";
import Card from "./Card";
import { useEffect } from "react";
import useFetch from "../Hooks/useFetch";
import { GET_CARDS } from "../api";
import Button from "./Button";
import { ReactComponent as CardIcon } from "../imgs/cardIcon.svg";
import { ReactComponent as UserPlus } from "../imgs/user-plus.svg";

const Table = () => {
  const { request } = useFetch();

  useEffect(() => {
    async function getData() {
      const { url, options } = GET_CARDS(36);
      await request(url, options);
    }
    getData();
  }, [request]);

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

      <footer className={styles.footer}>
        <Button Svg={UserPlus}>Adicionar jogador</Button>
        <Button Svg={CardIcon}>Dar cartas</Button>
      </footer>
    </div>
  );
};

export default Table;
