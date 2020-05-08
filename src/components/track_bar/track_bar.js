/** @jsx jsx */
import React, { useState } from 'react'
import { css, jsx } from '@emotion/core';
import _ from 'lodash';
import { v4 as uuidv4 } from 'uuid';

const TrackBar = ({ navigateTo, barLength, barDesc }) => {
  const [state, setState] = useState({
      padPlace: 0,
    }),
    { padPlace } = state,
    SENS_ZONE = 200,
    padStart = React.useRef(),
    padEnd = React.useRef(),
    padPlacement = React.useRef(),

    /**
     * Определим положение трэкпада, и выполним коллбэк, передав туда номер страницы
     * тут хардкод, но в идеале надо сделать так, чтоб трэк бар принимал количество страниц 
     * и равномерно их распределял по бару
     * @param {Object} e event
     */
    navigate = e => {
      padPlacement.current = e.clientX - padStart.current;

      if (padPlacement.current >= 0 && padPlacement.current <= (padEnd.current - padStart.current)) {
        setState({
          padPlace: e.clientX - padStart.current
        });
      }

      const debouncedNav = _.debounce(() => {
        switch (true) {
          case padPlacement.current <= SENS_ZONE:
            navigateTo(0);
            break;
        
          case padPlacement.current >= (parseInt(barLength) - SENS_ZONE):
            navigateTo(2);
            break;
                    
          case padPlacement.current >= parseInt(barLength)/2 - SENS_ZONE || padPlacement.current <= parseInt(barLength)/2 + SENS_ZONE:
            navigateTo(1);
            break;
        }
      }, 500);

      debouncedNav();
    },

    onMovePad = e => {
      let original_event = e.type === 'mousemove' ? e : e.touches[0];
      e.preventDefault();
      e.stopPropagation();
      navigate(original_event);
    },

    /**
     * Когда отпустим кнопку мыши/тач пад, удаляем соотв. эвенты с документа
     * @param {Object} e event
     */
    onDropPad = (e) => {
      if (e.type === 'touchend') {
        document.removeEventListener('touchmove', onMovePad);
        document.removeEventListener('touchend', onDropPad);
      } else {
        document.removeEventListener('mousemove', onMovePad);
        document.removeEventListener('mouseup', onDropPad);
      }
    },

    /**
     * При нажатии на кнопку мыши/тач пад, вешаем соотв. эвенты на документ
     * @param {Object} e event
     */
    onDragPad = (e) => {
      let original_event = e.type === 'mousedown' ? e : e.touches[0];
      e.preventDefault();
      e.stopPropagation();

      // Получим начало и конец трэк бара, при первом нажатии
      if (_.isUndefined(padStart.current)) {
        padStart.current = original_event.clientX;
        padEnd.current = original_event.clientX + parseInt(barLength);
      }

      if (e.type === 'mousedown') {
        document.addEventListener('mousemove', onMovePad);
        document.addEventListener('mouseup', onDropPad);
      } else if (e.type === 'touchstart') {
        document.addEventListener('touchmove', onMovePad);
        document.addEventListener('touchend', onDropPad);
      }
    };

  return (
    <React.Fragment>
      <div
          className="track-bar"
          css={css`
            width: ${barLength}px;
            height: 25px;
            position: absolute;
            background-color: #435063;
            z-index: 1000;
            bottom: 130px;
            left: 50%;
            transform: translateX(-50%);
          `}
      >
        <div 
          className="track-bar__pad"
          onMouseDown={(e) => onDragPad(e)}
          onTouchStart={(e) => onDragPad(e)}
          css={css`
            width: 80px;
            height: 110px;
            transform: translate(-50%, -35%);
            position: absolute;
            left: ${padPlace}px;
            background-image: url('./images/track-pad.svg');
            background-repeat: no-repeat;
            background-size: contain;
            background-position: center;
            cursor: move;
          `}
        ></div>
        <div 
          className="track-bar__background"
          onMouseDown={(e) => onDragPad(e)}
          onTouchStart={(e) => onDragPad(e)}
          css={css`
            height: 25px;
            width: ${padPlace}px;
            background-color: #ffffff;
          `}
        ></div>
      </div>
      <ul
        className="track-bar_description"
        css={css`
          width: ${parseInt(barLength)}px;
          padding-left: 0;
          height: 25px;
          position: absolute;
          z-index: 1000;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          justify-content: space-between;
          list-style: none;
          color: #ffffff;
          font-size: 30px;
        `}
      >
        {_.isUndefined(barDesc) ? null : _.map(barDesc, desc => <li key={uuidv4()}>{desc}</li>)}
      </ul>
    </React.Fragment>
  );
};

export { TrackBar };