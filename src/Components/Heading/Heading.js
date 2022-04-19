import React from "react";
import { TEXT } from "../../Utils/constants";
import styles from "./Heading.module.css";

const Heading = () => {
  return (
    <>
      <h1 className={styles.title}>{TEXT.HEADING_TITLE}</h1>
      <hr className={styles.separator} />
    </>
  );
};

export default Heading;
