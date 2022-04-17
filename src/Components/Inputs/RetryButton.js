import React from "react";
import { TEXT } from "../../Utils/constants";
const RetryButton = ({ handleRetryClick }) => {
  return <button onClick={handleRetryClick}>{TEXT.RETRY_BUTTON}</button>;
};

export default RetryButton;
