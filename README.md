# funkybuttons

> A component library with funky buttons

[![NPM](https://img.shields.io/npm/v/funkybuttons.svg)](https://www.npmjs.com/package/funkybuttons) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save funkybuttons
```

## Usage

```jsx
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
```

## License

MIT © [KumailP](https://github.com/KumailP)
