import React from 'react';
import ReactDOM from 'react-dom';
import { Slider } from './components/slider';
import * as serviceWorker from './serviceWorker';
import './index.css';

const content = [
  {
    type: 'image',
    url: '/images/box_1.png'
  },
  {
    type: 'image',
    url: '/images/box_2.png'
  },
  {
    type: 'slider',
    content: [
      {
        type: 'image',
        url: '/images/box_3_1.png'
      },
      {
        type: 'image',
        url: '/images/box_3_2.png'
      },
      {
        type: 'image',
        url: '/images/box_3_3.png'
      },
    ]
  },
];



ReactDOM.render(
  <React.StrictMode>
    <Slider 
      slides={content}
      settings={{
        sliderDots: true,
        sliderDirection: 'Y',
        trackBar: false,
        showNext: true
      }} 
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
