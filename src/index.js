import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter, Routes, Route, Outlet} from 'react-router-dom'

import GridSidebar from './pages/GridSidebar/GridSidebar'
import Single from './pages/Single/Single'
import SingleSidebar from './pages/SingleSidebar/SingleSidebar'
import Home from './pages/Home/Home';


ReactDOM.render(
  <React.StrictMode>
        <App />
  </React.StrictMode>,
  document.getElementById('root')
);

