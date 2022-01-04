import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './pages/mainPage';
import './virtual:windi.css';
import '@arco-design/web-react/dist/css/arco.css';


ReactDOM.render(
  <React.StrictMode>
    <MainPage />
  </React.StrictMode>,
  document.getElementById('root')
);