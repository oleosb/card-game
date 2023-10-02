import styles from "./Button.module.css";

const Button = ({ children, Svg, dark, ...props }) => {
  return (
    <button
      {...props}
      className={`${styles.button} ${dark ? styles.dark : styles.light}`}
    >
      <Svg />
      {children}
    </button>
  );
};

export default Button;
