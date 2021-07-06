import React from 'react';
import Link from './Link';

let Navbar = (props) => {
    return <div>
        <Link>{props.children}</Link>
        <Link>{props.children}</Link>
        <Link>{props.children}</Link>
    </div>
}

export default Navbar;