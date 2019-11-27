import React from "react";

import Button, {
  RoundBtn,
  DiamondBtn,
  LeftArrowBtn,
  RightArrowBtn
} from "funkybuttons";

export default () => (
  <div className="main">
    <h1>funkybuttons</h1>
    <div className="buttons">
      <Button />
      <RoundBtn />
      <DiamondBtn />
      <LeftArrowBtn />
      <RightArrowBtn />
    </div>
  </div>
);
