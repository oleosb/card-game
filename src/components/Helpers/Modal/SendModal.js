import { useContext } from "react";
import Title from "../Title";
import styles from "./SendModal.module.css";
import { Context } from "../../../Context";
import Button from "../Button";
import { ReactComponent as Thumb } from "../../../imgs/thumbs-up-solid.svg";

const SendModal = () => {
  const { players, setPlayers } = useContext(Context);

  const handleChange = (id, e) => {
    let playersCopy = [...players];
    playersCopy.forEach((player) => {
      if (player.id === id) {
        if (e.target.checked) {
          console.log("mais 1");
        } else {
          console.log("menos 1");
        }
      }
    });
  };

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
          {players.map((player, idx) => (
            <div key={idx}>
              <div>{player.name}</div>
              <div className={styles.checkers}>
                <input
                  type="checkbox"
                  onChange={(e) => handleChange(player.id, e)}
                />
                <input
                  type="checkbox"
                  onChange={(e) => handleChange(player.id, e)}
                />
              </div>
            </div>
          ))}
        </div>

        <Button Svg={Thumb} dark={true} margin={"20px 0 0 0"}>
          Ok
        </Button>
      </div>
    </div>
  );
};

export default SendModal;
