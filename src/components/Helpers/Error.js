import React from "react";
import styles from "./Error.module.css";

const Error = ({ error }) => {
  return (
    <section className={`${styles.errorContainer} ${error ? styles.true : ""}`}>
      <div className={`${styles.error}`}>
        <p>ADICIONE NO MÍNIMO 2 JOGADORES</p>
      </div>
    </section>
  );
};

export default Error;
