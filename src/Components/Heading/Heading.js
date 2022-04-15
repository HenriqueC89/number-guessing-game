import React from "react";
import styles from "./Heading.module.css";

const Heading = () => {
  return (
    <>
      <h1 className={styles.title}>QUAL É O NÚMERO?</h1>
      <hr className={styles.separator} />
    </>
  );
};

export default Heading;
