import React from "react";
import styles from "../styles.css";

export default function RightArrowBtn({ type, children }) {
  return (
    <button className={styles.rightArrow} type={type ? type : "button"}>
      {children ? children : "Right"}
    </button>
  );
}
