import Title from "../Title";
import styles from "./PayModal.module.css";

import { ReactComponent as Thumb } from "../../../imgs/thumbs-up-solid.svg";
import Button from "../Button";

import React, { useContext } from "react";
import { Context } from "../../../Context";

const PayModal = () => {
  const { currentRoundData, setCurrentRoundData, setPayModal } =
    useContext(Context);

  return (
    <div className={styles.modalContainer}>
      <div className={styles.modal}>
        <Title margin={"0 0 20px 0"}>QUEM PAGA?</Title>

        <div className={styles.players}>
          {currentRoundData.map((player, idx) => (
            <div key={idx}>
              {player.name} <span>{player.castigos}x</span>
            </div>
          ))}
        </div>

        <Button
          Svg={Thumb}
          dark={true}
          margin={"20px 0 0 0"}
          onClick={() => {
            setCurrentRoundData("");
            setPayModal(false);
          }}
        >
          Ok
        </Button>
      </div>
    </div>
  );
};

export default PayModal;
