import '../style.scss';
import React, { useState } from 'react';

let BurgerMenu = ({toggle, isActive}) => {
  // console.log(isActive);
  // console.log(props.onClick);
  console.log(isActive ? 'close' : 'open')
    return ( 
    <button 
      type="button"
      className="burgermenu"
      onClick={toggle}>
      <i className={isActive ? 'close' : 'open'}></i>
      <i className={isActive ? 'close' : 'open'}></i>
      <i className={isActive ? 'close' : 'open'}></i>
    </button>
    )
}

export default BurgerMenu;