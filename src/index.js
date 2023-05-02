import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import './Sidebar.css';
import Weather from './Weather';
import Sidebar from './Sidebar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Weather />
    <Sidebar />
  </React.StrictMode>
);
