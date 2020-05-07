import React from 'react';
import ReactDOM from 'react-dom';
import { Slider } from './components/slider';
import * as serviceWorker from './serviceWorker';

const images = [
  '/images/box_1.png',
  '/images/box_2.png',
  '/images/box_3_1.png',
];



ReactDOM.render(
  <React.StrictMode>
    <Slider slides={images} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
