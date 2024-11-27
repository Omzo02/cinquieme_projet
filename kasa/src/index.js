import React from 'react';
import ReactDOM from 'react-dom';
import './styles/Main.scss';
import Router from './router/Router';

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);
