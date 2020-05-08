/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import { Slider } from './../slider';

const Slide = ({ content, width }) => {
  let SlideComponent;

  // eslint-disable-next-line default-case
  switch (content.type) {
    case 'image':
      // eslint-disable-next-line jsx-a11y/alt-text
      SlideComponent = <img
        src={content.url}
        css={css`
          height: 100vh;
          width: ${width}px;
        `}
      />;
      break;

    case 'slider':
      SlideComponent = <Slider 
        slides={content.content} 
        settings={{
          sliderDots: false,
          sliderDirection: 'X',
          trackBar: true,
          trackBarDesc: ['1988', '2009', '2016']
        }}
      />
    break;
  }

  return (
    <React.Fragment>
      {SlideComponent}
    </React.Fragment>
  );
};

export { Slide };