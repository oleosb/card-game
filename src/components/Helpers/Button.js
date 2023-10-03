import styles from "./Button.module.css";

const Button = ({ children, margin, Svg, dark, ...props }) => {
  return (
    <button
      {...props}
      style={{ margin: margin }}
      className={`${styles.button} ${dark ? styles.dark : styles.light}`}
    >
      <Svg />
      {children}
    </button>
  );
};

export default Button;
