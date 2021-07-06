import './style.scss';
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Navbar from './components/Navbar.js';

let App = (props) => {
    return (
        <>
          <Router>
            <Navbar>{props.children}</Navbar>
          </Router>
        </>
    );  
}

export default App;

