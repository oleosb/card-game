import React from "react";
import styles from "./Error.module.css";

const Error = ({ error }) => {
  return (
    <section className={`${styles.error} ${error ? styles.true : ""}`}>
      <p>ADICIONE NO MÍNIMO 2 JOGADORES</p>
    </section>
  );
};

export default Error;
