import styles from "./HTP.module.css";
import Title from "./Helpers/Title";
import Button from "./Helpers/Button";

import { ReactComponent as Thumb } from "../imgs/thumbs-up-solid.svg";

const HTP = ({ setHtpOpen, htpOpen }) => {
  return (
    <section
      className={`${styles.htp} ${htpOpen ? styles.open : styles.close}`}
    >
      <Title margin={"0 0 20px 0"}>COMO JOGAR</Title>
      <p>1. Para iniciar o jogo, é preciso adicionar no mínimo 2 jogadores.</p>
      <p>
        2. Ao adicionar um jogador, ele receberá 2 cartas aleatórias do baralho.
      </p>
      <p>
        3. Após ter adionado no mínimo 2 jogadores, as cartas podem ser
        distribuidas na mesa, clicando em "Dar cartas".
      </p>
      <p>
        4. As cartas podem ser viradas {"(click)"} nos sentidos da direita para
        esquerda e de baixo pra cima.
      </p>
      <p>
        5. Ao virar as cartas vermelhas e algum jogador tiver 1 ou 2 cartas
        iguais a carta da mesa, ele deverá pagar um castigo de acordo com a
        quantidade de cartas iguais.
      </p>
      <p>
        6. Ao virar as cartas azuis e algum jogador tiver 1 ou 2 cartas iguais a
        carta da mesa, ele deverá mandar 1 ou 2 jogadores pagar um castigo, de
        acordo com a quantidade de cartas iguais.
      </p>
      <p>7. O jogo encerra ao virar todas as cartas da pirâmide.</p>
      <p>
        8. Ganha o jogador que mais mandar e perde o jogodor que mais pagar
        castigos.
      </p>
      <p>BOM JOGO!</p>

      <Button
        Svg={Thumb}
        dark={true}
        margin={"20px auto 0 auto"}
        onClick={() => setHtpOpen(false)}
      >
        Ok
      </Button>
    </section>
  );
};

export default HTP;
