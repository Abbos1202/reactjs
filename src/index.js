import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import './index.css';
import CRUD from './CRUD/CRUD';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <CRUD />
  </React.StrictMode>
);