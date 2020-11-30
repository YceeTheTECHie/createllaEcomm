import React from 'react';
import '../../App.css';
const Navbar = () => {
    return (
            <div className="headercontainer blue circleBehind">
            <h4 className="header-title">ASCII MARKETPLACE</h4>
            <h6>Sort by </h6>
            <a>Id</a>
            <a>Size</a>
            <a>Price</a>
            </div>
    );
}


export default Navbar;