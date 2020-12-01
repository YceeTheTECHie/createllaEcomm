import React from 'react';
import '../../App.css';
const Navbar = ({size,price,id}) => {
    return (
            <div className="headercontainer blue circleBehind">
            <h4 className="header-title">ASCII MARKETPLACE</h4>
            <h6>Sort by </h6><br/>
            <a onClick={id}>Id</a>
            <a onClick={size}>Size</a>
            <a onClick={price}>Price</a>
            </div>
    );
}


export default Navbar;