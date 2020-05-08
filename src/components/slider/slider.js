/** @jsx jsx */
import React, { useState } from 'react'
import { css, jsx } from '@emotion/core'
import { SliderContent } from './../slider_content';
import { Slide } from './../slide';
import { Dots } from './../dots';
import { TrackBar } from './../track_bar';
import { Next } from './../next';

import { v4 as uuidv4 } from 'uuid';
import _ from 'lodash';

/**
 * @function Slider
 */
const Slider = ({ settings, slides }) => {
  const { sliderDots, 
      sliderDirection, 
      trackBar, 
      trackBarDesc, 
      showNext 
    } = settings,
    getWidth = () => window.innerWidth,
    getHeight = () => window.innerHeight,
    getSlideLength = sliderDirection === 'Y' ? getHeight : getWidth,
    sliderRef = React.useRef(),
    thumbRef = React.useRef(),
    diff = React.useRef(),
    moveEnd = React.useRef(),

    [state, setState] = useState({
      activeIndex: 0,
      translate: 0,
      transition: 0.45,
      cursorPlacement: 0
    }),

    { translate, transition, activeIndex } = state,

    navigateTo = (pageNum) => {
      setState({
        ...state,
        activeIndex: pageNum,
        translate: pageNum * getSlideLength()
      });
    },

    nextSlide = () => {
      if (activeIndex === slides.length - 1) {
        return setState({
          ...state,
          translate: 0,
          activeIndex: 0
        })
      }

    setState({
      ...state,
      activeIndex: activeIndex + 1,
      translate: (activeIndex + 1) * getSlideLength()
    });
  },

  prevSlide = () => {
    if (activeIndex === 0) {
      return setState({
        ...state,
        translate: (slides.length - 1) * getSlideLength(),
        activeIndex: slides.length - 1
      })
    }

    setState({
      ...state,
      activeIndex: activeIndex - 1,
      translate: (activeIndex - 1) * getSlideLength()
    })
  },

  handleMove = e => {
    let original_event = e.type === 'mousemove' ? e : e.touches[0];
    e.preventDefault();
    e.stopPropagation();

    const calcCurrentPlace = _.debounce(() => {
      moveEnd.current = original_event.clientY;
    }, 50);

    calcCurrentPlace();
  },
 
  handleEndMove = (e) => {

      if (diff.current < moveEnd.current) {
        prevSlide();
      } else if (diff.current > moveEnd.current) {
        nextSlide();
      }

    if (e.type === 'touchstart') {
      document.removeEventListener('touchmove', handleMove);
      document.removeEventListener('touchend', handleEndMove);
    } else {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseup', handleEndMove);
    }
  },

  handleStartMove = (e) => {
    diff.current = e.type === 'mousedown' ? e.clientY : e.touches[0].clientY;

    if (e.type === 'mousedown') {
      document.addEventListener('mousemove', handleMove);
      document.addEventListener('mouseup', handleEndMove);
    } else {
      document.addEventListener('touchmove', handleMove);
      document.addEventListener('touchend', handleEndMove);
    }
  },

  SlidesContent = sliderDirection === 'Y' ? 
    <SliderContent
      ref={thumbRef}
      onMouseDown={(e) => handleStartMove(e)}
      onTouchStart={(e) => handleStartMove(e)}
      translate={translate}
      transition={transition}
      height={`${getSlideLength() * slides.length}px`}
      width={'100%'}
      flexDirection={'column'}
      direction={sliderDirection}
    > 
      {slides.map((slide, i) => (
        <Slide key={uuidv4()} content={slide} width={getWidth()}/>
      ))}
    </SliderContent> :
    <SliderContent
      ref={thumbRef}
      translate={translate}
      transition={transition}
      width={`${getSlideLength() * slides.length}px`}
      height={'100%'}
      flexDdirection={'row'}
      direction={sliderDirection}
    >
      {slides.map((slide, i) => (
        <Slide key={uuidv4()} content={slide} width={getWidth()}/>
      ))}
    </SliderContent>
  
  return (
    <React.Fragment>
      <div css={SliderCSS} ref={sliderRef}>
        {SlidesContent}
        {sliderDots ? <Dots slides={slides} activeIndex={activeIndex} /> : null }
      </div>
      {trackBar ? <TrackBar navigateTo={(pageNum) => navigateTo(pageNum)} barLength={'700'} barDesc={!_.isUndefined(trackBarDesc) ? trackBarDesc : null}/> : null }
      <Next display={ showNext && activeIndex < slides.length - 1 ? 'block' : 'none' }/>
    </React.Fragment>
  );
};

const SliderCSS = css`
  position: relative;
  height: 99vh;
  width: 100vw;
  margin: 0 auto;
  overflow: hidden;
`;
export { Slider };