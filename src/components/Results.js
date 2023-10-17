import React, { useContext } from "react";
import { Context } from "../Context";
import Player from "./Player/Player";
import styles from "./Results.module.css";
import Title from "./Helpers/Title";

const Results = () => {
  const { players } = useContext(Context);

  return (
    <section className={styles.results}>
      <Title margin={"0 0 20px 0"}>RESULTADO</Title>
      {players && (
        <>
          {players.map((player, idx) => (
            <Player {...player} key={idx} />
          ))}
        </>
      )}
    </section>
  );
};

export default Results;
