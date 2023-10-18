import React, { useContext } from "react";
import { Context } from "../Context";
import Player from "./Player/Player";
import styles from "./Results.module.css";
import Title from "./Helpers/Title";
import Button from "./Helpers/Button";
import { ReactComponent as Thumb } from "../imgs/thumbs-up-solid.svg";

const Results = ({ resultsOpen, setResultsOpen }) => {
  const { players } = useContext(Context);

  return (
    <section
      className={`${styles.results} ${
        resultsOpen ? styles.open : styles.close
      }`}
    >
      <Title margin={"0 0 20px 0"}>RESULTADO</Title>
      {players && (
        <>
          {players.map((player, idx) => (
            <Player {...player} key={idx} />
          ))}
        </>
      )}

      <Button
        Svg={Thumb}
        dark={true}
        onClick={() => setResultsOpen(false)}
        margin={"20px 0 0 0"}
      >
        Ok
      </Button>
    </section>
  );
};

export default Results;
