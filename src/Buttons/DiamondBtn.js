import React from "react";
import styles from "../styles.css";

export default function DiamondBtn({ type, children }) {
  return (
    <button className={styles.diamondBtn} type={type ? type : "button"}>
      {children ? children : "Diamond"}
    </button>
  );
}
