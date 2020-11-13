import React from 'react';
import ReactDOM from 'react-dom';
import {UglyContext} from "./UglyContext"
import App from './App';


ReactDOM.render(
  <UglyContext>
    <App />
  </UglyContext>,
  document.getElementById('root')
);


