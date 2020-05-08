
/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import { v4 as uuidv4 } from 'uuid';

const Dot = ({ active }) => (
  <span
    css={css`
      padding: 13px;
      margin-bottom: 15px;
      cursor: pointer;
      border-radius: 50%;
      background: ${active ? '#f78b1f' : '#ffffff'};
    `}
  />
);

const Dots = ({ slides, activeIndex }) => (
  <div
    css={css`
      position: absolute;
      right: 50px;
      top: 50%;
      transform: translateY(-50%);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

    `}
  >
    {slides.map((slide, i) => (
      <Dot key={uuidv4()} active={activeIndex === i} />
    ))}
  </div>
);

export {
  Dots
};