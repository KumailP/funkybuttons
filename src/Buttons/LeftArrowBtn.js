import React from "react";
import styles from "../styles.css";

export default function LeftArrowBtn({ type, children }) {
  return (
    <button className={styles.leftArrow} type={type ? type : "button"}>
      {children ? children : "Left"}
    </button>
  );
}
