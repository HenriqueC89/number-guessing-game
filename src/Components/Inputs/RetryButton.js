import React from "react";
import RefreshIcon from "@mui/icons-material/Refresh";
import { TEXT } from "../../Utils/constants";
import styles from "./RetryButton.module.css";

const RetryButton = ({ handleRetryClick }) => {
  return (
    <button onClick={handleRetryClick} className={styles.button}>
      <RefreshIcon className={styles.icon} />
      <span className={styles.text}>{TEXT.RETRY_BUTTON}</span>
    </button>
  );
};

export default RetryButton;
