/* eslint-disable */

import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./styles.css";
import RoundBtn from "./Buttons/RoundBtn";
import DiamondBtn from "./Buttons/DiamondBtn";
import LeftArrowBtn from "./Buttons/LeftArrowBtn";
import RightArrowBtn from "./Buttons/RightArrowBtn";

export { RoundBtn, DiamondBtn, LeftArrowBtn, RightArrowBtn };

export default class Button extends Component {
  static propTypes = {
    type: PropTypes.string,
    children: PropTypes.string
  };

  static defaultProps = {
    children: "Regular",
    type: "button"
  };

  render() {
    const { type, children: text } = this.props;

    return (
      <button className={styles.button} type={type}>
        {text}
      </button>
    );
  }
}
