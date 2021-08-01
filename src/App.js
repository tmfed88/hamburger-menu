import React from 'react';
import Navbar from './components/Navbar.js';

let App = (props) => {
    return (
        <>
          <Navbar>{props.children}</Navbar> 
        </>
    );  
}

export default App;

