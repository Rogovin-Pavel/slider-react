/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core'

const Next = ({ display }) => {
  return (
    <div
      className="track-bar"
      css={css`
        display: ${display};
        width: 100%;
        height: 170px;
        position: absolute;
        z-index: 1000;
        bottom: 0;
        left: 0;
        background-image: url('/images/next.png');
        background-image: url(/images/next.png);
        background-position: center bottom;
        background-size: contain;
        background-repeat: no-repeat;
      `}
    ></div>
  );
};

export { Next };