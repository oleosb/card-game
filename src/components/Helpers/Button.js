import styles from "./Button.module.css";

const Button = ({ children, Svg }) => {
  return (
    <button className={styles.button}>
      <Svg />
      {children}
    </button>
  );
};

export default Button;
