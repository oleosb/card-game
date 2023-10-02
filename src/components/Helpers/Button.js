import styles from "./Button.module.css";

const Button = ({ children, Svg, dark }) => {
  return (
    <button className={`${styles.button} ${dark ? styles.dark : styles.light}`}>
      <Svg />
      {children}
    </button>
  );
};

export default Button;
