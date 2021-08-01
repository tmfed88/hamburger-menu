import '../style.scss';
import React, { useState } from 'react';
import BurgerMenu from './BurgerMenu';

let Navbar = () => {
  const [isActive, setIsActive] = useState(true);
		let handleClick = (e) => {
      e.preventDefault();
			setIsActive(false);
		};
    // console.log(isActive);
    return( 
      <div className="navbar">
        <BurgerMenu toggle={handleClick} isActive={isActive} />
      </div>
    )
}

export default Navbar;