import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/tailwind.css';
import App from './App';
import 'typeface-roboto';
// const { Titlebar, Color } = require('custom-electron-titlebar');
// const { remote } = require('electron');

// new Titlebar({
//     backgroundColor: Color.fromHex('#2E2E2E'),
//     menu: remote.Menu.getApplicationMenu(), 
//     // Other configurations can go here
// });



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
    <App />
  </React.StrictMode>
);
