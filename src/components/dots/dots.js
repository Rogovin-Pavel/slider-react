
/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

const Dot = ({ active }) => (
  <span
    css={css`
      padding: 10px;
      margin-bottom: 5px;
      cursor: pointer;
      border-radius: 50%;
      background: ${active ? 'yellow' : 'white'};
    `}
  />
)

const Dots = ({ slides, activeIndex }) => (
  <div
    css={css`
      position: absolute;
      right: 25px;
      top: 50%;
      transform: translateY(-50%);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

    `}
  >
    {slides.map((slide, i) => (
      <Dot key={slide} active={activeIndex === i} />
    ))}
  </div>
)

export {
  Dots
}