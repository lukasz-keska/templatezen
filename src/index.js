import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/react-owl-carousel2/lib/styles.css';
import '../node_modules/slick-carousel/slick/slick.css';
import '../node_modules/magnific-popup/dist/magnific-popup.css';
import './assets/css/font-awesome.css';
import './assets/css/style.css';
import './assets/css/responsive.css';
import './index.css';

ReactDOM.render(
  <BrowserRouter basename={"/templatemonster/react/templezen/"}>
    <App />
  </BrowserRouter>,
  document.getElementById('templezen')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
