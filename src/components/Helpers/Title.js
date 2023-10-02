import styles from "./Title.module.css";

const Title = ({ children, margin }) => {
  return (
    <h1 className={styles.title} style={{ margin: margin }}>
      {children}
    </h1>
  );
};

export default Title;
