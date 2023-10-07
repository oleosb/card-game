import Title from "./Helpers/Title";
import styles from "./PayModal.module.css";

import { ReactComponent as Thumb } from "../imgs/thumbs-up-solid.svg";
import Button from "./Helpers/Button";

import React from "react";

const PayModal = () => {
  return (
    <div className={styles.modalContainer}>
      <div className={styles.modal}>
        <Title margin={ '0 0 20px 0'}>PAGAM</Title>

        <div className={styles.players}>
          <div>Player1</div>
          <div>Player1</div>
          <div>Player1</div>
        </div>

        <Button Svg={Thumb} dark={true} margin={"20px 0 0 0"}>
          Ok
        </Button>
      </div>
    </div>
  );
};

export default PayModal;
