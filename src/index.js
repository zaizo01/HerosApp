import React from 'react';
import ReactDOM from 'react-dom';
import './assets/main.css';
import { Navbar } from './components/UI/Navbar';
import { HerosApp } from './HerosApp';


ReactDOM.render(
    <HerosApp />,
  document.getElementById('root')
);

