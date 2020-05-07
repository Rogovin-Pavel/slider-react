/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';

const Slide = ({ content }) => {

  return (
    <img
      src={content}
      css={css`
        height: 100vh;
      `}
    />
  );
};

export { Slide };