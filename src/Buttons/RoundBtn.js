import React from "react";
import styles from "../styles.css";

export default function RoundBtn({ type, children }) {
  return (
    <button className={styles.roundBtn} type={type ? type : "button"}>
      {children ? children : "Round"}
    </button>
  );
}
