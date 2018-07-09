import React from "react";
import { NavLink } from "react-router-dom";
import './Header.scss';

const Header = () => {
    return(
        <header className="main-header">
            <nav>
                <NavLink exact to="/" >Home</NavLink>
                <NavLink exact to="/fe" >FrontEnd</NavLink>
                <NavLink exact to="/be" >BackEnd</NavLink>
            </nav>
        </header>
    );
};

export default Header;
