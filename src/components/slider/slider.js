/** @jsx jsx */
import React, { useState } from 'react'
import { css, jsx } from '@emotion/core'
import { SliderContent } from './../slider_content';
import { Slide } from './../slide';
import { Dots } from './../dots';
import _ from 'lodash';

/**
 * @function Slider
 */
const Slider = (props) => {
  const getHeight = () => window.innerHeight;
  const sliderRef = React.useRef();
  const thumbRef = React.useRef();
  const diff = React.useRef();
  const next = React.useRef();

  const [state, setState] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.45,
    direction: 'down',
    cursorPlacement: 0
  });

  const { translate, transition, activeIndex } = state;

  const nextSlide = () => {
    if (activeIndex === props.slides.length - 1) {
      return setState({
        ...state,
        translate: 0,
        activeIndex: 0
      })
    }

    setState({
      ...state,
      activeIndex: activeIndex + 1,
      translate: (activeIndex + 1) * getHeight()
    })
  }

  const prevSlide = () => {
    if (activeIndex === 0) {
      return setState({
        ...state,
        translate: (props.slides.length - 1) * getHeight(),
        activeIndex: props.slides.length - 1
      })
    }

    setState({
      ...state,
      activeIndex: activeIndex - 1,
      translate: (activeIndex - 1) * getHeight()
    })
  }

  const calcCoords =  _.debounce((e) => {
    let original_event = e.type === 'touchmove' ? e.touches[0] : e;
    next.current = original_event.clientY;
  }, 100);

  const handleMove = event => {
    event.preventDefault();
    console.log('moved');
    
    // console.log(event);
    // event.preventDefault();
    // calcCoords(event);
  };
 
  const handleEndMove = (event) => {
      console.log(diff.current, event.clientY);
      
      if (diff.current < event.clientY) {
        prevSlide();
      } else if (diff.current > event.clientY) {
        nextSlide();
      }

    if (event.type === 'touchstart') {
      document.removeEventListener('touchmove', handleMove);
      document.removeEventListener('touchend', handleEndMove);
    } else {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseup', handleEndMove);
    }
  };

  const handleStartMove = (e) => {
    diff.current = e.type === 'mousedown' ? e.clientY : e.touches[0].clientY;

    if (e.type === 'mousedown') {
      document.addEventListener('mousemove', handleMove);
      document.addEventListener('mouseup', handleEndMove);
    } else if (e.type === 'touchstart') {
      document.addEventListener('touchmove', handleMove);
      document.addEventListener('touchend', handleEndMove);
    }
  };

  return (
    <div css={SliderCSS} ref={sliderRef}>
      <SliderContent
        ref={thumbRef}
        onMouseDown={(e) => handleStartMove(e)}
        onTouchStart={(e) => handleStartMove(e)}
        translate={translate}
        transition={transition}
        height={getHeight()}
      >
        {props.slides.map((slide, i) => (
          <Slide key={slide + i} content={slide}/>
        ))}
      </SliderContent>
      <Dots slides={props.slides} activeIndex={activeIndex} />
    </div>
  );
};

const SliderCSS = css`
  position: relative;
  height: 100vh;
  width: 100vw;
  margin: 0 auto;
  overflow: hidden;
`;
export { Slider };