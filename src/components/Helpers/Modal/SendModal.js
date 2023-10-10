import { useContext } from "react";
import Title from "../Title";
import styles from "./SendModal.module.css";
import { Context } from "../../../Context";
import Button from "../Button";
import { ReactComponent as Thumb } from "../../../imgs/thumbs-up-solid.svg";

const SendModal = () => {
  const { currentRoundData, setCurrentRoundData } = useContext(Context);

  return (
    <div className={styles.modalContainer}>
      <div className={styles.modal}>
        <Title margin={"0 0 10px 0"}>QUEM MANDA?</Title>

        <div className={styles.players}>
          <div>
            Leo <span>1x</span>
          </div>
        </div>

        <Title margin={"20px 0 10px 0"}>QUEM PAGA?</Title>
        <div className={`${styles.players} ${styles.payers}`}>
          <div>
            <div>
              Leo <span>1x</span>
            </div>
            <div>
              <input type="radio" />
            </div>
          </div>
          <div>
            <div>
              Leo <span>1x</span>
            </div>
            <div>
              <input type="radio" />
            </div>
          </div>
        </div>

        <Button
          Svg={Thumb}
          dark={true}
          margin={"20px 0 0 0"}
          onClick={() => setCurrentRoundData("")}
        >
          Ok
        </Button>
      </div>
    </div>
  );
};

export default SendModal;
